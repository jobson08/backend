import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIncomeDto } from 'src/transections/income/dto/create-Income.dto';
import { UpdateIncomeDto } from 'src/transections/income/dto/update-Income.dto';

@Injectable()
export class IncomeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const results = await this.prisma.income.findMany({
      skip: page * size,
      take: Number(size),
      where: { title: { contains: search, mode: 'insensitive' } },
      orderBy: { [sort]: order },
      include: { category: true, subCategory: true, account: true },
    });
    const totalItems = await this.prisma.income.count({
      where: { title: { contains: search, mode: 'insensitive' } },
    });
    return { results, totalItems };
  }

  async findById(id: bigint) {
    return await this.prisma.income.findFirstOrThrow({
      where: { id },
    });
  }

  async create(createIncomeDTO: CreateIncomeDto) {
    //const parsedDate: Date = new Date(icomeDate);
    return await this.prisma.income.create({
      select: { id: true },
      data: {
        title: createIncomeDTO.title,
        value: createIncomeDTO.value,
        icomeDate: createIncomeDTO.icomeDate,
        description: createIncomeDTO.description,
        categoryId: createIncomeDTO.categoryId,
        subCategoryId: createIncomeDTO.subCategoryId,
        accountId: createIncomeDTO.accountId,
        userId: createIncomeDTO.userId,
      },
    });
  }

  async update(id: bigint, UpdateIncomeDTO: UpdateIncomeDto) {
    return await this.prisma.income.update({
      select: { id: true },
      where: { id },
      data: UpdateIncomeDTO,
    });
  }

  async remove(id: bigint) {
    return await this.prisma.income.delete({
      select: { id: true },
      where: { id },
    });
  }
}
