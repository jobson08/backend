import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const results = await this.prisma.user.findMany({
      skip: page * size,
      take: Number(size),
      where: { name: { contains: search, mode: 'insensitive' } },
      orderBy: { [sort]: order },
    });
    const totalItems = await this.prisma.user.count({
      where: { name: { contains: search, mode: 'insensitive' } },
    });
    return { results, totalItems };
  }

  async findById(id: bigint) {
    return await this.prisma.user.findFirstOrThrow({
      where: { id },
    });
  }

  /*async create(createUserDTO: CreateUserDto) {
    return await this.prisma.user.create({
      select: { id: true },
      data: {
        name: createUserDTO.name,
        email: createUserDTO.email,
        password: createUserDTO.password,
        status: true,
      },
    });
  }*/

  async update(id: bigint, UpdateUserDTO: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: UpdateUserDTO,
    });
  }
}
