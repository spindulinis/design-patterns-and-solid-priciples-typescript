import { Logger } from "./logger";

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log('First log message');
logger2.log('Second log message');

console.log(logger1 === logger2);