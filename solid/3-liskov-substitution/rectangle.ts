import { Shape } from "./shape.abstract";

export class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  public calculateArea(): number {
    return this.width * this.height;
  }
}