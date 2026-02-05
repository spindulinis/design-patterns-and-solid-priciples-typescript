import { BaseHandler } from "./base-handler.abstract";

export class MonkeyHandler extends BaseHandler {
  public handle(request: string): string | null {
    if (request === "Banana") {
      return `Monkey: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}