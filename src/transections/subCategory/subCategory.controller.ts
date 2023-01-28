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
import { CreateSubCategoryDto } from './dto/create-subCategory.dto';
import { UpdateSubCategoryDto } from './dto/update-subCategory.dto';
import { SubCategoryService } from './subCategory.service';

@Controller('subCategory')
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}
  @Get('pages?')
  async pagination(@Request() request) {
    return await this.subCategoryService.paginate(
      request.query.hasOwnProperty('page') ? request.query.page : 0,
      request.query.hasOwnProperty('size') ? request.query.size : 10,
      request.query.hasOwnProperty('sort') ? request.query.sort : 'name',
      request.query.hasOwnProperty('order') ? request.query.order : 'asc',
      request.query.hasOwnProperty('seach') ? request.query.seach : '',
    );
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.subCategoryService.findById(BigInt(id));
  }

  @Post()
  async create(@Body() createSubCategoryDTO: CreateSubCategoryDto) {
    return await this.subCategoryService.create(createSubCategoryDTO);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSubCategoryDto: UpdateSubCategoryDto,
  ) {
    return await this.subCategoryService.update(
      BigInt(id),
      updateSubCategoryDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.subCategoryService.remove(BigInt(id));
  }
}
