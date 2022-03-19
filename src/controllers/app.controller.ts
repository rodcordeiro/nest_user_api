import { Controller, Get } from '@nestjs/common';
import { version } from '../../package.json';

@Controller()
export class AppController {
  constructor() {}
  @Get()
  validatesAPIHealth() {
    return {
      version,
    };
  }
}
