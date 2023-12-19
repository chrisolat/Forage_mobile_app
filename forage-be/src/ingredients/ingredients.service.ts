import { Injectable } from '@nestjs/common';
import { Ingredient, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) { }

  async create(data: Prisma.IngredientCreateInput) {
    return this.prisma.ingredient.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.IngredientWhereUniqueInput;
    where?: Prisma.IngredientWhereInput;
    orderBy?: Prisma.IngredientOrderByWithRelationInput;
  }): Promise<Ingredient[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.ingredient.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(ingredientWhereUniqueInput: Prisma.IngredientWhereUniqueInput): Promise<Ingredient> {
    return this.prisma.ingredient.findUnique({
      where: ingredientWhereUniqueInput,
    });
  }

  async update(params: {
    where: Prisma.IngredientWhereUniqueInput;
    data: Prisma.IngredientUpdateInput;
  }): Promise<Ingredient> {
    const { where, data } = params;
    return this.prisma.ingredient.update({
      data,
      where
    })
  }

  async remove(where: Prisma.IngredientWhereUniqueInput): Promise<Ingredient> {
    return this.prisma.ingredient.delete({
      where,
    })
  }
}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
