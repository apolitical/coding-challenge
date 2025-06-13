import { DatabaseService } from '../database/database.service';
import { Like } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LikesService {
  constructor(private readonly database: DatabaseService) {}

  create(characterId: number, authorId: number): Promise<Like> {
    return this.database.like.create({
      data: {
        characterId,
        authorId,
      },
    });
  }

  list(characterId: number, authorId: number): Promise<Like[]> {
    return this.database.like.findMany({
      include: {
        character: true,
        author: true,
      },
      where: {
        characterId,
        authorId,
      },
    });
  }

  count(characterId: number, authorId: number): Promise<number> {
    return this.database.like.count({
      where: {
        characterId,
        authorId,
      },
    });
  }
}
