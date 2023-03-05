import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExpenseController } from 'src/transections/expense/expense.controller';
import { expenseService } from 'src/transections/expense/expense.service';
import { ExpenseRepository } from 'src/transections/expense/repository/expense.repository';

@Module({
  controllers: [ExpenseController],
  providers: [PrismaService, expenseService, ExpenseRepository],
})
export class ExpenseModule {}
