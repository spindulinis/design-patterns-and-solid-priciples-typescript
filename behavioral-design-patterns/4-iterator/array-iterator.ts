export class ArrayIterator<T> {
  private position: number = 0;

  constructor(private collection: T[]) {
  }

  public next(): T {
    // Get the next element in the collection
    let result: T = this.collection[this.position];
    this.position += 1;
    return result;
  }

  public hasNext(): boolean {
    return this.position < this.collection.length;
  }
}