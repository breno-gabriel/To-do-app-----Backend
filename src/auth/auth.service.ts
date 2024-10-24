import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthUser } from './dto/auth-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async login(email: string, senha: string): Promise<AuthUser> {

    const user = await this.userService.findByEmail(email);

    console.log(user)

    if (!user || !(await bcrypt.compare(senha, user.senha))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { id: user.id, email: user.email, nome: user.nome };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: user,
    };
  }
}
