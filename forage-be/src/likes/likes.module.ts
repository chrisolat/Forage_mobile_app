import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [LikesController],
  providers: [LikesService]
})
export class LikesModule { }
// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
