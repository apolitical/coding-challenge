import { Injectable, NotImplementedException } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class OpenAIService {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  process(prompt: string): Promise<string> {
    throw new NotImplementedException('Method not implemented');
  }
}
