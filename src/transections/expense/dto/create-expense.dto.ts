/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExpenseDto {

@IsNotEmpty({ message: 'O nome não pode ser vazio.' })
@IsString({ message: 'O nome não pode ser vazio.' })
title: string;

@IsNumber({},{ message: 'O Valor não pode ser vazio.' })
 @Type(() =>Number)
 value: number;

 @IsDate({message: 'A data não pode ser vazio'})
 expenseDate: Date;

 @IsNumber({}, { message: 'O usuario id não pode ser vazio.' })
    @Type(() => Number)
    categoryId: number;

@IsNumber({}, { message: 'O usuario id não pode ser vazio.' })
    @Type(() => Number)
    accountId: number;

 @IsNumber({}, { message: 'O usuario id não pode ser vazio.' })
    @Type(() => Number)
    userId: number;
}

/*
  title         String   @unique @db.Citext
  value         Decimal  @db.Money
  expenseDate   DateTime

  createdAt     DateTime    @default(now())

  category  Category @relation(fields: [categoryId], references: [id])
  categoryId BigInt     @map("category_id")

  account  Account @relation(fields: [accountId], references: [id])
  accountId BigInt     @map("account_id")
 
  user  User @relation(fields: [userId], references: [id])
  userId BigInt     @map("user_id")
*/