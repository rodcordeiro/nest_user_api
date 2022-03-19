import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

function validateRequest(request: Request) {
  const token = request.headers['access-token'];
  if (!token) return false;
  if (token !== 'meegu') return false;
  return true;
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
