import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), 
    AuthModule,
    UsersModule,
    PrismaModule,
    JwtModule,
    IngredientsModule,
    LikesModule,
  ],
  controllers: [],
})
export class AppModule {}

//vim: ft=typescript ts=2 sw=2 sts=-1 sta et
