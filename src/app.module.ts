import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { MovementModule } from './transections/movement/movement.module';
import { CategoryModule } from './transections/category/category.module';
import { SubCategoryModule } from './transections/subCategory/subCategory.module';

@Module({
  imports: [UserModule, MovementModule, CategoryModule, SubCategoryModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
