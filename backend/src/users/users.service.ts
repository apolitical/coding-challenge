import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Character, Like } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly database: DatabaseService) {}

  async listLikes(
    authorId: number,
  ): Promise<(Like & { character: Character })[]> {
    return this.database.like.findMany({
      where: {
        authorId,
      },
      include: {
        character: true,
      },
    });
  }
}
