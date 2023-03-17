/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { accountService } from 'src/transections/accounts/account.service';
import { CreateAccountDto } from 'src/transections/accounts/dto/create-account.dto';
import { UpdateAccountDto } from 'src/transections/accounts/dto/update-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: accountService) {}
  @Get('pages?')
  @UseGuards(JwtAuthGuard)
  async pagination(@Request() request) {
    return await this.accountService.paginate(
      request.query.hasOwnProperty('page') ? request.query.page : 0,
      request.query.hasOwnProperty('size') ? request.query.size : 10,
      request.query.hasOwnProperty('sort') ? request.query.sort : 'name',
      request.query.hasOwnProperty('order') ? request.query.order : 'asc',
      request.query.hasOwnProperty('seach') ? request.query.seach : '',
    );
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.accountService.findById(BigInt(id));
  }

  @Post()
  async create(@Body() createAccounttDTO: CreateAccountDto) {
    return await this.accountService.create(createAccounttDTO);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAccounttDto: UpdateAccountDto,
  ) {
    return await this.accountService.update(BigInt(id), updateAccounttDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.accountService.remove(BigInt(id));
  }
}
