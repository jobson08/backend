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

 @IsNotEmpty({ message: 'A categoria não pode ser vazio.' })
 @IsNumber({}, { message: 'A categoria não pode ser vazio.', each:true })
 @Type(() => Number)
 categoryId: number;

}