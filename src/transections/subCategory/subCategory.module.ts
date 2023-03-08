import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubCategoryRepository } from 'src/transections/subCategory/repository/subCategory.repository';
import { SubCategoryController } from 'src/transections/subCategory/subCategory.controller';
import { SubCategoryService } from 'src/transections/subCategory/subCategoryservice';

@Module({
  controllers: [SubCategoryController],
  providers: [PrismaService, SubCategoryService, SubCategoryRepository],
})
export class SubCategoryModule {}
