import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Like as LikeModel } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

@Controller('likes')
export class LikesController {
  constructor(
    private readonly likesService: LikesService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  async likes(@Req() req): Promise<LikeModel[]> {
    return await this.likesService.findAll({
      where: {
        userId: req.user.id
      }
    })
  }

  @UseGuards(JwtAuthGuard)
  @Post('like')
  async like(
    @Req() req,
    @Body() likeData: {
      apiId: string;
    }
  ): Promise<LikeModel | null> {
    const { apiId } = likeData;
    return await this.likesService.create({
      apiId,
      user: {
        connect: {
          id: req.user.id,
        }
      }
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('unlike')
  async unlike(
    @Req() req,
    @Body() unlikeData: {
      apiId: string;
    }
  ): Promise<LikeModel> {
    const { apiId } = unlikeData;
    return await this.likesService.remove({
      userId_apiId: {
        userId: req.user.id,
        apiId
      }
    })
  }
}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
