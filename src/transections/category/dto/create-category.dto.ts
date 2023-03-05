import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsString({ message: 'O nome não pode ser vazio.' })
  name: string;

  @IsBoolean({ message: 'Inform se é despesas ou entrada.' })
  typeService: boolean;
}
