import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { MovementModule } from './transections/movement/movement.module';

@Module({
  imports: [UserModule, MovementModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
