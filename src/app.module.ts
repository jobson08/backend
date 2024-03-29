import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { CategoryModule } from './transections/category/category.module';
import { IncomeModule } from 'src/transections/income/Income.module';
import { ExpenseModule } from 'src/transections/expense/expense.module';
import { AccountModule } from 'src/transections/accounts/account.module';
import { SubCategoryModule } from 'src/transections/subCategory/subCategory.module';
import { LoginModule } from 'src/login/login.module';
import { AuthModule } from 'src/auth/auth,module';

@Module({
  imports: [
    UserModule,
    IncomeModule,
    ExpenseModule,
    CategoryModule,
    AccountModule,
    SubCategoryModule,
    LoginModule,
    AuthModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
