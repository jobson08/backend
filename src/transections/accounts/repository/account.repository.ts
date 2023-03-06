import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccountDto } from 'src/transections/accounts/dto/create-account.dto';
import { UpdateAccountDto } from 'src/transections/accounts/dto/update-account.dto';

@Injectable()
export class AccountRepository {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const results = await this.prisma.account.findMany({
      skip: page * size,
      take: Number(size),
      where: { name: { contains: search, mode: 'insensitive' } },
      orderBy: { [sort]: order },
    });
    const totalItems = await this.prisma.account.count({
      where: { name: { contains: search, mode: 'insensitive' } },
    });
    return { results, totalItems };
  }

  async findById(id: bigint) {
    return await this.prisma.account.findFirstOrThrow({
      where: { id },
    });
  }

  async create(createAccountDTO: CreateAccountDto) {
    return await this.prisma.account.create({
      select: { id: true },
      data: {
        name: createAccountDTO.name,
        typeAccount: createAccountDTO.typeAccount,
        userId: createAccountDTO.userId,
        status: true,
      },
    });
  }

  async update(id: bigint, UpdateAccountDTO: UpdateAccountDto) {
    return await this.prisma.movement.update({
      select: { id: true },
      where: { id },
      data: UpdateAccountDTO,
    });
  }

  async remove(id: bigint) {
    return await this.prisma.movement.delete({
      select: { id: true },
      where: { id },
    });
  }
}
