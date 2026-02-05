export abstract class Product {
  constructor(public title: string, public price: number) {
  }

  abstract calculatePrice(): number;
}