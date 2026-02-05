import { Printer } from "./printer.interface";

export class SimplePrinter implements Printer {
  print(): void {
    console.log("The Machine is printing");
  }
}