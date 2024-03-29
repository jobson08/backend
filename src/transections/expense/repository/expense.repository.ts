import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExpenseDto } from 'src/transections/expense/dto/create-expense.dto';
import { UpdateExpenseDto } from 'src/transections/expense/dto/update-expense.dto';

@Injectable()
export class ExpenseRepository {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const results = await this.prisma.expense.findMany({
      skip: page * size,
      take: Number(size),
      where: { title: { contains: search, mode: 'insensitive' } },
      orderBy: { [sort]: order },
      include: { category: true, subCategory: true, account: true },
    });
    const totalItems = await this.prisma.expense.count({
      where: { title: { contains: search, mode: 'insensitive' } },
    });
    return { results, totalItems };
  }

  async findById(id: bigint) {
    return await this.prisma.expense.findFirstOrThrow({
      where: { id },
    });
  }

  async create(createExpenseDTO: CreateExpenseDto) {
    return await this.prisma.expense.create({
      select: { id: true },
      data: {
        title: createExpenseDTO.title,
        value: createExpenseDTO.value,
        expenseDate: createExpenseDTO.expenseDate,
        description: createExpenseDTO.description,
        categoryId: createExpenseDTO.categoryId, //na catgoria adicionar a subCategoria
        subCategoryId: createExpenseDTO.subCategoryId,
        accountId: createExpenseDTO.accountId, //conta verifiva se existe a conta (ID) remover value e atualiza  o value do (icome) no (balance) da conta
        userId: createExpenseDTO.userId,
      },
    });
  }

  async update(id: bigint, UpdateExpenseDTO: UpdateExpenseDto) {
    return await this.prisma.movement.update({
      select: { id: true },
      where: { id },
      data: UpdateExpenseDTO,
    });
  }

  async remove(id: bigint) {
    return await this.prisma.movement.delete({
      select: { id: true },
      where: { id },
    });
  }
}
