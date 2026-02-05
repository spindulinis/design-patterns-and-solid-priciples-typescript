import { Database } from "./database.interface";

export class MySqlDatabase implements Database {
  save(data: string): void {
    console.log(`${data} is being saved to MySQL`);
  }
}