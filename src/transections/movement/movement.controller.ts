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
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { MovementService } from './movement.service';

@Controller('movement')
export class MovementController {
  constructor(private readonly movimentService: MovementService) {}
  @Get('pages?')
  async pagination(@Request() request) {
    return await this.movimentService.paginate(
      request.query.hasOwnProperty('page') ? request.query.page : 0,
      request.query.hasOwnProperty('size') ? request.query.size : 10,
      request.query.hasOwnProperty('sort') ? request.query.sort : 'name',
      request.query.hasOwnProperty('order') ? request.query.order : 'asc',
      request.query.hasOwnProperty('seach') ? request.query.seach : '',
    );
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.movimentService.findById(BigInt(id));
  }

  @Post()
  async create(@Body() createMovementDTO: CreateMovementDto) {
    return await this.movimentService.create(createMovementDTO);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMovementDto: UpdateMovementDto,
  ) {
    return await this.movimentService.update(BigInt(id), updateMovementDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.movimentService.remove(BigInt(id));
  }
}
