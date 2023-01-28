/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { CreateSubCategoryDto } from './create-subCategory.dto';



export class UpdateSubCategoryDto extends PartialType(CreateSubCategoryDto) {
  @IsNumber({}, { message: 'O id não pode ser vazio.' })
  @Type(() => Number)
  readonly id: bigint;
}