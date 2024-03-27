import cors from 'cors';
import { json } from 'body-parser';
import morgan from 'morgan';

export async function load(app: any) {
  app.use(cors());
  app.use(json());
  app.use(morgan('tiny'));
}
