/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateIncomeDto } from 'src/transections/income/dto/create-Income.dto';
import { UpdateIncomeDto } from 'src/transections/income/dto/update-Income.dto';
import { IncomeRepository } from 'src/transections/income/repository/income.repository';
@Injectable()
export class incomeService {
  constructor(private readonly repository: IncomeRepository) {}

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

  async create(createIncomeDTO: CreateIncomeDto) {
    return await this.repository.create(createIncomeDTO);
  }
  async update(id: bigint, UpdateMovementDTO: UpdateIncomeDto) {
    return await this.repository.update(id, UpdateMovementDTO);
  }

  async remove(id: bigint) {
    return await this.repository.remove(id);
  }
}
