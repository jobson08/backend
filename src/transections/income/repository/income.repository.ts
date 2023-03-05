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
    return await this.prisma.income.create({
      select: { id: true },
      data: {
        title: createIncomeDTO.title,
        value: createIncomeDTO.value,
        icomeDate: createIncomeDTO.icomeDate,
      },
    });
  }

  async update(id: bigint, UpdateIncomeDTO: UpdateIncomeDto) {
    return await this.prisma.movement.update({
      select: { id: true },
      where: { id },
      data: UpdateIncomeDTO,
    });
  }

  async remove(id: bigint) {
    return await this.prisma.movement.delete({
      select: { id: true },
      where: { id },
    });
  }
}
