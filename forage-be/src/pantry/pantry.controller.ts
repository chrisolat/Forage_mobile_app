import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PantryService } from './pantry.service';

@Controller('pantry')
export class PantryController {
  constructor(private readonly pantryService: PantryService) {}

  /*
  @Post()
  create(@Body() createPantryDto: CreatePantryDto) {
    return this.pantryService.create(createPantryDto);
  }

  @Get()
  findAll() {
    return this.pantryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pantryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePantryDto: UpdatePantryDto) {
    return this.pantryService.update(+id, updatePantryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pantryService.remove(+id);
  }
  */
}
