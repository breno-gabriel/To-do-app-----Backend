import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { jwtConstants } from './constant';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private jwtService : JwtService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ') [1]; 

    console.log(request.headers)

    

    if (!token) {
      console.log(token)
      console.log("erro numero 1")
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: jwtConstants.secret
        }
      );

      request['user'] = payload;
    } catch {
      console.log("Erro numero 2")
      throw new UnauthorizedException();
    }

    return true;
  }
}
