/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { CreateExpenseDto } from 'src/transections/expense/dto/create-expense.dto';


export class UpdateExpenseDto extends PartialType(CreateExpenseDto) {
  @IsNumber({}, { message: 'O id não pode ser vazio.' })
  @Type(() => Number)
  readonly id: bigint;
}