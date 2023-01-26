import { Injectable } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { MovementRepository } from './repository/movement.repository';

@Injectable()
export class MovementService {
  constructor(private readonly repository: MovementRepository) {}

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

  async create(createMovementDTO: CreateMovementDto) {
    return await this.repository.create(createMovementDTO);
  }

  async update(id: bigint, UpdateMovementDTO: UpdateMovementDto) {
    return await this.repository.update(id, UpdateMovementDTO);
  }

  async remove(id: bigint) {
    return await this.repository.remove(id);
  }
}
