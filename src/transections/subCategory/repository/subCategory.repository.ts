import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubCategoryDto } from 'src/transections/subCategory/dto/create-subCategory.dto';
import { UpdateSubCategoryDto } from 'src/transections/subCategory/dto/update-subCategorydto';

@Injectable()
export class SubCategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const results = await this.prisma.subCategory.findMany({
      skip: page * size,
      take: Number(size),
      where: { name: { contains: search, mode: 'insensitive' } },
      orderBy: { [sort]: order },
      include: { category: true },
    });
    const totalItems = await this.prisma.subCategory.count({
      where: { name: { contains: search, mode: 'insensitive' } },
    });
    return { results, totalItems };
  }

  async findById(id: bigint) {
    return await this.prisma.subCategory.findFirstOrThrow({
      where: { id },
    });
  }

  async create(createSubCategoryDTO: CreateSubCategoryDto) {
    return await this.prisma.subCategory.create({
      select: { id: true },
      data: {
        name: createSubCategoryDTO.name,
        categoryId: createSubCategoryDTO.categoryId,
        userId: createSubCategoryDTO.userId,
      },
    });
  }

  async update(id: bigint, UpdateSubCategoryDTO: UpdateSubCategoryDto) {
    return await this.prisma.subCategory.update({
      select: { id: true },
      where: { id },
      data: UpdateSubCategoryDTO,
    });
  }

  async remove(id: bigint) {
    return await this.prisma.subCategory.delete({
      select: { id: true },
      where: { id },
    });
  }
}
