import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsString({ message: 'O nome não pode ser vazio.' })
  name: string;

  @IsNotEmpty({ message: 'O email não pode ser vazio.' })
  @IsEmail({}, { message: 'O email não pode ser vazio.' })
  email: string;

  avata: string;

  @IsNotEmpty({ message: 'O senha não pode ser vazio.' })
  @IsString({ message: 'O senha não pode ser vazio.' })
  @MinLength(8, { message: 'A senha deve ter 8 caracteres no minimo ' })
  password: string;

  enabled: boolean;

  @Type(() => Number)
  accountId: number;

  @Type(() => Number)
  categoryId: number;

  @Type(() => Number)
  subCategorytId: number;

  @Type(() => Number)
  expenseId: number;

  @Type(() => Number)
  incomeId: number;
}
