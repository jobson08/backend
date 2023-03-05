import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AccountController } from 'src/transections/accounts/account.controller';
import { accountService } from 'src/transections/accounts/account.service';
import { AccountRepository } from 'src/transections/accounts/repository/account.repository';

@Module({
  controllers: [AccountController],
  providers: [PrismaService, accountService, AccountRepository],
})
export class AccountModule {}
