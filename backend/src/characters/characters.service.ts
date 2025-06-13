import { Character } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CharactersService {
  constructor(private readonly database: DatabaseService) {}

  list(): Promise<Character[]> {
    return this.database.character.findMany();
  }
}
