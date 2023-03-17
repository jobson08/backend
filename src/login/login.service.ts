import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/login/dto/login.dto';
import { LoginRepository } from 'src/login/repository/login.repository';

@Injectable()
export class LoginService {
  constructor(private readonly repository: LoginRepository) {}

  async login(loginDTO: LoginDto) {
    const user = await this.repository.findUserByEmail(loginDTO.email);
    return bcrypt.compareSync(loginDTO.password, user.password);
  }
}
