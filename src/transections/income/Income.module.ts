import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { incomeService } from 'src/transections/income/Income.service';
import { IncomeController } from 'src/transections/income/income.controller';

import { IncomeRepository } from 'src/transections/income/repository/income.repository';

@Module({
  controllers: [IncomeController],
  providers: [PrismaService, incomeService, IncomeRepository],
})
export class IncomeModule {}
