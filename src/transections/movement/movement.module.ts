import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovementRepository } from './repository/movement.repository';
import { MovementController } from './movement.controller';
import { MovementService } from './movement.service';

@Module({
  controllers: [MovementController],
  providers: [PrismaService, MovementService, MovementRepository],
})
export class MovementModule {}
