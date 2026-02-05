import { Database } from "./database.interface";

export class MongoDbDatabase implements Database {
  save(data: string): void {
    console.log(`${data} is being saved to MongoDB`);
  }
}