import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseService } from './database/database.service';
import { CharactersService } from './characters/characters.service';
import { LikesService } from './likes/likes.service';
import { OpenAIService } from './openai/openai.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    DatabaseService,
    CharactersService,
    LikesService,
    OpenAIService,
    UsersService,
  ],
})
export class AppModule {}
