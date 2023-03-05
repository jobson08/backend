import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { CategoryModule } from './transections/category/category.module';
import { IncomeModule } from 'src/transections/income/Income.module';
import { ExpenseModule } from 'src/transections/expense/expense.module';
import { AccountModule } from 'src/transections/accounts/account.module';

@Module({
  imports: [
    UserModule,
    IncomeModule,
    ExpenseModule,
    CategoryModule,
    AccountModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
