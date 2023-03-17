import { Module } from '@nestjs/common';
import { LoginController } from 'src/login/login.controller';
import { LoginService } from 'src/login/login.service';
import { LoginRepository } from 'src/login/repository/login.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LoginController],
  providers: [PrismaService, LoginService, LoginRepository],
})
export class LoginModule {}
