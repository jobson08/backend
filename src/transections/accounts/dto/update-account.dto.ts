/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { CreateAccountDto } from 'src/transections/accounts/dto/create-account.dto';


export class UpdateAccountDto extends PartialType(CreateAccountDto) {
  @IsNumber({}, { message: 'O id não pode ser vazio.' })
  @Type(() => Number)
  readonly id: bigint;
}