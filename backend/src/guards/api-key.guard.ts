import {
  CanActivate,
  ExecutionContext,
  Injectable,
  // UnauthorizedException,
} from '@nestjs/common';
// import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(context: ExecutionContext): boolean {
    // const request = context.switchToHttp().getRequest<Request>();
    // const apiKey = request.headers['apikey'];
    // const apiKeyFromEnv = process.env.API_KEY;

    return true;
  }
}
