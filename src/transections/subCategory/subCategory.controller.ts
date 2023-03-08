import { Controller, Delete, Get, Param, Request } from '@nestjs/common';
import { SubCategoryService } from 'src/transections/subCategory/subCategoryservice';

@Controller('subcategory')
export class SubCategoryController {
  constructor(private readonly subcategoryService: SubCategoryService) {}
  @Get('pages?')
  async pagination(@Request() request) {
    return await this.subcategoryService.paginate(
      request.query.hasOwnProperty('page') ? request.query.page : 0,
      request.query.hasOwnProperty('size') ? request.query.size : 10,
      request.query.hasOwnProperty('sort') ? request.query.sort : 'name',
      request.query.hasOwnProperty('order') ? request.query.order : 'asc',
      request.query.hasOwnProperty('seach') ? request.query.seach : '',
    );
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.subcategoryService.findById(BigInt(id));
  }

  /* @Post()
  async create(@Body() createSubCategoryDTO: CreateSubCategoryDto) {
    return await this.subcategoryService.create(createSubCategoryDTO);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSubCategoryDto: UpdateSubCategoryDto,
  ) {
    return await this.subcategoryService.update(BigInt(id), updateSubCategoryDto);
  }*/

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.subcategoryService.remove(BigInt(id));
  }
}
