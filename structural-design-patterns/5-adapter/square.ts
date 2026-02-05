export class Square {
  constructor(private side: number) {
  }

  public getSide(): number {
    return this.side;
  }

  public area(): number {
    return this.side * this.side;
  }
}