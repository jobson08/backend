import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNumber({}, { message: 'O id não pode ser vazio.' })
  @Type(() => Number)
  readonly id: bigint;

  avata: string;

  @IsNotEmpty({ message: 'ativo não pode ser vazio' })
  @IsBoolean({ message: 'ativo não pode ser vazio' })
  status: boolean;
}
