import { Rectangle } from "./rectangle";
import { Square } from "./square";
import { Shape } from "./shape.abstract";

function area(shape: Shape) {
  return shape.calculateArea();
}

const rectangle = new Rectangle(10, 12);
const rectangleArea = area(rectangle);
console.log(`Rectangle area: ${rectangleArea}`);

const square = new Square(8);
const squareArea = area(square);
console.log(`Square area: ${squareArea}`);