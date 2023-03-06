import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { incomeService } from 'src/transections/income/Income.service';
import { CreateIncomeDto } from 'src/transections/income/dto/create-Income.dto';
import { UpdateIncomeDto } from 'src/transections/income/dto/update-Income.dto';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: incomeService) {}
  @Get('pages?')
  async pagination(@Request() request) {
    return await this.incomeService.paginate(
      request.query.hasOwnProperty('page') ? request.query.page : 0,
      request.query.hasOwnProperty('size') ? request.query.size : 10,
      request.query.hasOwnProperty('sort') ? request.query.sort : 'name',
      request.query.hasOwnProperty('order') ? request.query.order : 'asc',
      request.query.hasOwnProperty('seach') ? request.query.seach : '',
    );
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.incomeService.findById(BigInt(id));
  }

  /* @Post()
  async create(@Body() createIncometDTO: CreateIncomeDto) {
    return await this.incomeService.create(createIncometDTO);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateIncometDto: UpdateIncomeDto,
  ) {
    return await this.incomeService.update(BigInt(id), updateIncometDto);
  }*/

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.incomeService.remove(BigInt(id));
  }
}
