import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Character, Like } from '@prisma/client';
import { CharactersService } from './characters/characters.service';
import { LikesService } from './likes/likes.service';
import { OpenAIService } from './openai/openai.service';
import { ApiKeyGuard } from './guards/api-key.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly characters: CharactersService,
    private readonly likes: LikesService,
    private readonly openai: OpenAIService,
    private readonly users: UsersService,
  ) {}

  @Get('characters')
  @UseGuards(ApiKeyGuard)
  listCharacters(): Promise<Character[]> {
    return this.characters.list();
  }

  @Post('characters/:id/like')
  @UseGuards(ApiKeyGuard)
  likeCharacter(@Param('id') id: string): Promise<Like> {
    return this.likes.create(parseInt(id), 1);
  }

  @Get('characters/:id/likes')
  @UseGuards(ApiKeyGuard)
  listLikes(@Param('id') id: string): Promise<Like[]> {
    return this.likes.list(parseInt(id), 1);
  }

  @Get('characters/:id/likes/count')
  @UseGuards(ApiKeyGuard)
  countLikes(@Param('id') id: string): Promise<number> {
    return this.likes.count(parseInt(id), 1);
  }

  @Get('users/:id/likes')
  @UseGuards(ApiKeyGuard)
  listUserLikes(
    @Param('id') id: string,
  ): Promise<(Like & { character: Character })[]> {
    return this.users.listLikes(parseInt(id));
  }

  @Post('search')
  @UseGuards(ApiKeyGuard)
  async search(@Body('prompt') prompt: string): Promise<{ content: string }> {
    const response = await this.openai.process(prompt);
    return { content: response };
  }
}
