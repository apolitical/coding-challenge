import { Injectable, NotImplementedException } from '@nestjs/common';
import { ChatOpenAI } from '@langchain/openai';
import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';
import { Pinecone } from '@pinecone-database/pinecone';

@Injectable()
export class OpenAIService {
  private embeddings: OpenAIEmbeddings;
  private llm: ChatOpenAI;
  private pinecone: Pinecone;
  private pineconeStore: PineconeStore;

  constructor() {
    this.embeddings = new OpenAIEmbeddings({
      apiKey: process.env.OPENAI_API_KEY || '',
      model: 'text-embedding-3-small',
      dimensions: 512,
    });

    this.llm = new ChatOpenAI({
      model: 'gpt-4o-mini',
      apiKey: process.env.OPENAI_API_KEY || '',
    });

    this.pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY || '',
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  process(prompt: string): Promise<string> {
    throw new NotImplementedException('Method not implemented');
  }
}
