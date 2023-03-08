import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubCategoryDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsString({ message: 'O nome não pode ser vazio.' })
  name: string;

  @IsNotEmpty({ message: 'O usuario id não pode ser vazio.' })
  @IsNumber({}, { message: 'O usuario id não pode ser vazio.' })
  typeService: number;

  @IsNumber({}, { message: 'O usuario id não pode ser vazio.' })
  @Type(() => Number)
  userId: number;
}
