import { Database } from "./database.interface";

export class StorageManager {
  constructor(private database: Database) {
  }

  execute(data: string) {
    this.database.save(data);
  }
}