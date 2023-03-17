import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/login/dto/login.dto';
import { LoginRepository } from 'src/login/repository/login.repository';
import { AuthService } from 'src/auth/auth.service';
@Injectable()
export class LoginService {
  constructor(
    private readonly repository: LoginRepository,
    private readonly authService: AuthService,
  ) {}

  async login(loginDTO: LoginDto) {
    const user = await this.repository.findUserByEmail(loginDTO.email);
    const result = bcrypt.compareSync(loginDTO.password, user.password);
    if (result) {
      const accessToken = await this.authService.login(user);
      return { accessToken };
    } else {
      throw new NotFoundException('Usuario não encontrado.');
    }
  }
}
