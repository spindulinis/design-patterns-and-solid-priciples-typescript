export class Product {
  constructor(
    public title: string,
    public price: number,
    public description?: string,
    public discountRate?: number,
    public category?: string
  ) {
  }
}