/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovementDto {
 @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
 @IsString({ message: 'O nome não pode ser vazio.' })
 name : string;

 @IsNumber({},{ message: 'O Valor não pode ser vazio.' })
 @Type(() =>Number)
 value : number;
}