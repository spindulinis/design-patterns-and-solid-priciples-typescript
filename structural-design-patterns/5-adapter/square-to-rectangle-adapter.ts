import { Square } from "./square";
import { Rectangle } from "./rectangle.interface";

export class SquareToRectangleAdapter implements Rectangle {
  constructor(private square: Square) {
  }

  public getWidth(): number {
    return this.square.getSide();
  }

  public getHeight(): number {
    return this.square.getSide();
  }

  public area(): number {
    return this.square.area();
  }
}