/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { CreateIncomeDto } from 'src/transections/income/dto/create-Income.dto';

export class UpdateIncomeDto extends PartialType(CreateIncomeDto) {
  @IsNumber({}, { message: 'O id não pode ser vazio.' })
  @Type(() => Number)
  readonly id: bigint;
}