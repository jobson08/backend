/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAccountDto {

    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    @IsString({ message: 'O nome não pode ser vazio.' })
    name: string;

    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    @IsString({ message: 'O nome não pode ser vazio.' })
    typeAccount: string;


    @IsNotEmpty({ message: 'O usuario id não pode ser vazio.' })
    @IsNumber({}, { message: 'O usuario id não pode ser vazio.' })
    userId: number
    
}

/*id             BigInt     @id @default(autoincrement())
name           String    @unique @db.Citext
balance        Decimal?  @db.Money
typeAccount    String //(card, credi, Cash )
status         Boolean  //(ativado, desativado)
createdAt     DateTime    @default(now())
*/