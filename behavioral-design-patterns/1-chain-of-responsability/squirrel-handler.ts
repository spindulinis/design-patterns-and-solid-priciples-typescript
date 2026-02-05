import { BaseHandler } from "./base-handler.abstract";

export class SquirrelHandler extends BaseHandler {
  public handle(request: string): string | null {
    if (request === "Nut") {
      return `Squirrel: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}