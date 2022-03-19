import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { AppController } from './controllers/app.controller';
import { LoggerMiddleware } from './middlewares';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
