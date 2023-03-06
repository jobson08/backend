/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from 'src/transections/accounts/dto/create-account.dto';
import { UpdateAccountDto } from 'src/transections/accounts/dto/update-account.dto';
import { AccountRepository } from 'src/transections/accounts/repository/account.repository';

@Injectable()
export class accountService {
  constructor(private readonly repository: AccountRepository) {}

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

  async create(createAccountDTO: CreateAccountDto) {
    return await this.repository.create(createAccountDTO);
  }
  async update(id: bigint, UpdateMovementDTO: UpdateAccountDto) {
    return await this.repository.update(id, UpdateMovementDTO);
  }

  async remove(id: bigint) {
    return await this.repository.remove(id);
  }
}
