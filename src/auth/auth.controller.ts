import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUser } from './dto/auth-user.dto';
import { LoginUser } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {

    constructor (private authService : AuthService) {}

    @Post()
    async login (@Body() loginUser : LoginUser) : Promise<AuthUser>{

        return this.authService.login(loginUser.email, loginUser.senha);

    }

}
