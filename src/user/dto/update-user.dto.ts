/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNumber({}, { message: 'O id não pode ser vazio.' })
  @Type(() => Number)
  readonly id: bigint;
}