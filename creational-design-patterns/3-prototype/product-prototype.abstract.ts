export abstract class ProductPrototype {
  constructor(public title: string, public price: number) {
  }

  abstract clone(): ProductPrototype;
}