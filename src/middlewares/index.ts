import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log({
      Route: req.url,
      Method: req.method,
      // body: req.body,
      // query: req.query,
      // params: req.params,
    });
    next();
  }
}
