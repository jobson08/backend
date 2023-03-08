import { Injectable } from '@nestjs/common';
import { SubCategoryRepository } from 'src/transections/subCategory/repository/subCategory.repository';

@Injectable()
export class SubCategoryService {
  constructor(private readonly repository: SubCategoryRepository) {}

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

  /*async create(createSubCategoryDTO: CreateSubCategoryDto) {
    return await this.repository.create(createSubCategoryDTO);
  }

  async update(id: bigint, UpdateSubCategoryDTO: UpdateSubCategoryDto) {
    return await this.repository.update(id, UpdateSubCategoryDTO);
  }*/

  async remove(id: bigint) {
    return await this.repository.remove(id);
  }
}
