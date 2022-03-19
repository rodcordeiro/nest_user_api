import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Query,
  Delete,
  BadRequestException,
  HttpStatus,
  Res,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import * as Joi from 'joi';
import { UserService } from '../services/user.service';
import { iUser } from '../interfaces';
import { CreateUserDTO } from '../dto';
import { GetAddress } from '../../utils/api';
import { JoiValidationPipe } from '../../utils/pipes';
import { AuthGuard } from '../../guards/Auth.guard';

const now = Date.now();
const isOlder = new Date(now - 1000 * 60 * 60 * 24 * 365 * 18);
const userCreationSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  birthdate: Joi.date().max(isOlder).required(),
  document: Joi.string(),
  acceptedTerms: Joi.boolean().equal(true).required(),
  zipcode: Joi.string().required(),
});

@Controller('users')
export class UserController {
  constructor(private readonly users: UserService) {}

  @Get()
  findAll(
    @Res() res: Response,
    @Query('name') name?: string,
  ): Response<iUser[]> | Response<iUser> {
    if (!name) {
      const data = this.users.findAll();
      if (!data || !data.length) {
        console.log('no content');
        return res.status(HttpStatus.NO_CONTENT).send();
      }
      return res.status(HttpStatus.OK).json(data);
    }
    console.log('searching for a user');
    const user = this.users.findOne({ name });
    if (!user)
      throw new BadRequestException({
        statusCode: 400,
        message: 'User not found',
        error: 'User not found',
      });
    return res.status(HttpStatus.OK).json(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string): iUser | iUser[] {
    const user = this.users.findOne({ id });
    if (!user)
      throw new BadRequestException({
        statusCode: 400,
        message: 'User not found',
        error: 'User not found',
      });
    return user;
  }

  @Post()
  @UsePipes(new JoiValidationPipe(userCreationSchema))
  async create(@Body() data: CreateUserDTO) {
    const address = await GetAddress(data.zipcode);
    return this.users.create({ ...data, ...address });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: CreateUserDTO) {
    return this.users.update(id, data);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  delete(@Param('id') id: string, @Res() res: Response) {
    const user = this.users.delete(id);
    if (user) {
      return res.status(HttpStatus.NO_CONTENT).send();
    }
    throw new BadRequestException({
      statusCode: 400,
      message: 'User not found',
      error: 'User not found',
    });
  }
}
