import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'O email não pode ser vazio.' })
  @IsEmail({}, { message: 'O email não pode ser vazio.' })
  email: string;

  @IsNotEmpty({ message: 'A senha não pode ser vazio.' })
  @IsString({ message: 'A senha não pode ser vazio.' })
  @MinLength(8, { message: 'A senha deve ter 8 caracteres no minimo ' })
  password: string;
}
