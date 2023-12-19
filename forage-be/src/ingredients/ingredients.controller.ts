import { Controller, Post, Body } from '@nestjs/common';
import { Ingredient as IngredientModel } from '@prisma/client';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) { }


  @Post('create')
  async create(
    @Body() ingredientData: {
      name: string;
      apiId: string;
    }): Promise<IngredientModel> {
    const { name, apiId } = ingredientData;
    return await this.ingredientsService.create({
      name,
      apiId,
    });
  }

  @Post('delete')
  async delete(
    @Body() ingredientData: {
      id: string;
    }): Promise<IngredientModel> {
    const { id } = ingredientData;
    return await this.ingredientsService.remove({
      id
    });
  }
}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
