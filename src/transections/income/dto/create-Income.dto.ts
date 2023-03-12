/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateIncomeDto {

@IsNotEmpty({ message: 'O nome não pode ser vazio.' })
@IsString({ message: 'O nome não pode ser vazio.' })
title: string;

@IsNumber({},{ message: 'O Valor não pode ser vazio.' })
 @Type(() =>Number)
 value: number;

 @IsDate({message: 'A data não pode ser vazio'})
 icomeDate: Date;

@IsNotEmpty({ message: 'O descrição não pode ser vazio.' })
@IsString({ message: 'O descrição não pode ser vazio.' })
description: string;

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
id           BigInt   @id @default(autoincrement())
  title         String   @unique @db.Citext
  value         Decimal  @db.Money
  icomeDate     DateTime

  createdAt     DateTime    @default(now())
  updatedAt     DateTime    @updatedAt

  category  Category @relation(fields: [categoryId], references: [id])
  categoryId BigInt  

  account  Account @relation(fields: [accountId], references: [id])
  accountId BigInt 
 
  user  User @relation(fields: [userId], references: [id])
  userId BigInt 
*/