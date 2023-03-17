/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { CreateExpenseDto } from 'src/transections/expense/dto/create-expense.dto';
import { UpdateExpenseDto } from 'src/transections/expense/dto/update-expense.dto';
import { expenseService } from 'src/transections/expense/expense.service';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: expenseService) {}
  @Get('pages?')
  async pagination(@Request() request) {
    return await this.expenseService.paginate(
      request.query.hasOwnProperty('page') ? request.query.page : 0,
      request.query.hasOwnProperty('size') ? request.query.size : 10,
      request.query.hasOwnProperty('sort') ? request.query.sort : 'name',
      request.query.hasOwnProperty('order') ? request.query.order : 'asc',
      request.query.hasOwnProperty('seach') ? request.query.seach : '',
    );
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.expenseService.findById(BigInt(id));
  }

  @Post()
  async create(@Body() createExpensetDTO: CreateExpenseDto) {
    return await this.expenseService.create(createExpensetDTO);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExpensetDto: UpdateExpenseDto,
  ) {
    return await this.expenseService.update(BigInt(id), updateExpensetDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.expenseService.remove(BigInt(id));
  }
}
