import { ArrayIterator } from "./array-iterator";

const array: number[] = [1, 2, 3, 4, 5, 6];
const iterator = new ArrayIterator<number>(array);
console.log(iterator.hasNext());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.hasNext());

const arrayString = ["Hello", "World"];
const stringIterator = new ArrayIterator<string>(arrayString);
console.log(stringIterator.hasNext());
console.log(stringIterator.next());
console.log(stringIterator.next());