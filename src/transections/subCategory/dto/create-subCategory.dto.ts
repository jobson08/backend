/* eslint-disable prettier/prettier */
;
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubCategoryDto {
 @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
 @IsString({ message: 'O nome não pode ser vazio.' })
 name : string;

 @IsNotEmpty({ message: 'O descriçao não pode ser vazio.' })
 @IsString({ message: 'O descriçao não pode ser vazio.' })
 descripton : string;

 @IsNumber({}, { message: 'A unidade deve ser um número.' })
 @Type(() => Number)
 categoryId: number;

}