import { MySqlDatabase } from "./mysql-database";
import { MongoDbDatabase } from "./mongodb-database";
import { StorageManager } from "./storage-manager";

const mysql: MySqlDatabase = new MySqlDatabase();
const userWriter: StorageManager = new StorageManager(mysql);
userWriter.execute("John");

const mongo: MongoDbDatabase = new MongoDbDatabase();
const postWriter: StorageManager = new StorageManager(mongo);
postWriter.execute("New Post");