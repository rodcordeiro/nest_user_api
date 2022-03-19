import { Injectable } from '@nestjs/common';
import { iUser } from '../interfaces';

@Injectable()
export class UserService {
  findAll(): iUser[] {
    return [];
  }
}
