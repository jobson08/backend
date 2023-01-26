import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovementDto } from '../dto/create-movement.dto';
import { UpdateMovementDto } from '../dto/update-movement.dto';

@Injectable()
export class MovementRepository {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const results = await this.prisma.movement.findMany({
      skip: page * size,
      take: Number(size),
      where: { name: { contains: search, mode: 'insensitive' } },
      orderBy: { [sort]: order },
    });
    const totalItems = await this.prisma.movement.count({
      where: { name: { contains: search, mode: 'insensitive' } },
    });
    return { results, totalItems };
  }

  async findById(id: bigint) {
    return await this.prisma.movement.findFirstOrThrow({
      where: { id },
    });
  }

  async create(createMovementDTO: CreateMovementDto) {
    return await this.prisma.movement.create({
      select: { id: true },
      data: {
        name: createMovementDTO.name,
        value: createMovementDTO.value,
      },
    });
  }

  async update(id: bigint, UpdateMovementDTO: UpdateMovementDto) {
    return await this.prisma.movement.update({
      where: { id },
      data: UpdateMovementDTO,
    });
  }

  async remove(id: bigint) {
    return await this.prisma.movement.delete({
      where: { id },
    });
  }
}
