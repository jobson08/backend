import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubCategoryRepository } from './repository/subCategory.repository';
import { SubCategoryController } from './subCategory.controller';
import { SubCategoryService } from './subCategory.service';

@Module({
  controllers: [SubCategoryController],
  providers: [PrismaService, SubCategoryService, SubCategoryRepository],
})
export class SubCategoryModule {}
