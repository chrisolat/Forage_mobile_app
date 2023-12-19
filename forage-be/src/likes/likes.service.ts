import { Injectable } from '@nestjs/common';
import { Like, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) { }

  async create(data: Prisma.LikeCreateInput) {
    return this.prisma.like.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LikeWhereUniqueInput;
    where?: Prisma.LikeWhereInput;
    orderBy?: Prisma.LikeOrderByWithRelationInput;
  }): Promise<Like[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.like.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(
    LikeWhereUniqueInput: Prisma.LikeWhereUniqueInput
  ): Promise<Like> {
    return this.prisma.like.findUnique({
      where: LikeWhereUniqueInput,
    });
  }

  async update(params: {
    where: Prisma.LikeWhereUniqueInput;
    data: Prisma.LikeUpdateInput;
  }): Promise<Like> {
    const { where, data } = params;
    return this.prisma.like.update({
      data,
      where
    })
  }

  async remove(
    where: Prisma.LikeWhereUniqueInput
  ): Promise<Like> {
    return this.prisma.like.delete({
      where,
    });
  }
}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
