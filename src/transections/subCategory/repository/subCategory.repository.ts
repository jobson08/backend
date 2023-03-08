import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
    const results = await this.prisma.subcategory.findMany({
      skip: page * size,
      take: Number(size),
      where: { name: { contains: search, mode: 'insensitive' } },
      orderBy: { [sort]: order },
    });
    const totalItems = await this.prisma.subcategory.count({
      where: { name: { contains: search, mode: 'insensitive' } },
    });
    return { results, totalItems };
  }

  async findById(id: bigint) {
    return await this.prisma.subcategory.findFirstOrThrow({
      where: { id },
    });
  }

  /*async create(createSubCategoryDTO: CreateSubCategoryDto) {
    return await this.prisma.subcategory.create({
      select: { id: true },
      data: {
        name: createSubCategoryDTO.name,
      },
    });
  }

  async update(id: bigint, UpdateSubCategoryDTO: UpdateSubCategoryDto) {
    return await this.prisma.subcategory.update({
      select: { id: true },
      where: { id },
      data: UpdateSubCategoryDTO,
    });
  }*/

  async remove(id: bigint) {
    return await this.prisma.subcategory.delete({
      select: { id: true },
      where: { id },
    });
  }
}
