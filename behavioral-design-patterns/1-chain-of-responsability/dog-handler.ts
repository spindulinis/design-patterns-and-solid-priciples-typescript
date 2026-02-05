import { BaseHandler } from "./base-handler.abstract";

export class DogHandler extends BaseHandler {
  public handle(request: string): string | null {
    if (request === "MeatBall") {
      return `Dog: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}