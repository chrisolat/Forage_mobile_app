import { Module } from '@nestjs/common';
import { PantryService } from './pantry.service';
import { PantryController } from './pantry.controller';

@Module({
  controllers: [PantryController],
  providers: [PantryService]
})
export class PantryModule {}
