import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post('signup')
  async signup(
    @Body() userData: {
      email: string,
      username: string,
      password: string,
    },
  ): Promise<UserModel> {
    const { email, username, password } = userData;
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    return this.usersService.createUser({
      email: email,
      username: username,
      password: passwordHash,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  async logout(
    @Body() userData: {
      username: string,
    },
  ): Promise<any> {
    const { username } = userData;
    const user = await this.usersService.user({ username: username })
    return {
      id: user.id,
      email: user.email
    };
  }
}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
