/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAccountDto {

@IsNotEmpty({ message: 'O nome não pode ser vazio.' })
@IsString({ message: 'O nome não pode ser vazio.' })
name: string;

@IsNotEmpty({ message: 'O campo não pode ser vazio.' })
@IsString({ message: 'O campo não pode ser vazio.' })
typeAccount: string
}