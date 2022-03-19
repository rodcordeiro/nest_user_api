import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { iUser } from '../interfaces';

@Controller('users')
export class UserController {
  constructor(private readonly users: UserService) {}
  @Get()
  findAll(): iUser[] {
    return this.users.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): iUser[] {
    console.log({ id });
    return this.users.findAll();
  }
}
