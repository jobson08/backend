/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from 'src/transections/expense/dto/create-expense.dto';
import { UpdateExpenseDto } from 'src/transections/expense/dto/update-expense.dto';
import { ExpenseRepository } from 'src/transections/expense/repository/expense.repository';

@Injectable()
export class expenseService {
  constructor(private readonly repository: ExpenseRepository) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const { results, totalItems } = await this.repository.paginate(
      page,
      size,
      sort,
      order,
      search,
    );
    const totalPages = Math.ceil(totalItems / size) - 1;
    const currentPage = Number(page);

    return {
      results,
      pagination: {
        length: totalItems,
        size: size,
        lastPage: totalPages,
        page: currentPage,
        startIndex: currentPage * size,
        endIndex: currentPage * size + (size - 1),
      },
    };
  }

  async findById(id: bigint) {
    return await this.repository.findById(id);
  }

  async create(createExpenseDTO: CreateExpenseDto) {
    return await this.repository.create(createExpenseDTO);
  }
  async update(id: bigint, UpdateMovementDTO: UpdateExpenseDto) {
    return await this.repository.update(id, UpdateMovementDTO);
  }

  async remove(id: bigint) {
    return await this.repository.remove(id);
  }
}
