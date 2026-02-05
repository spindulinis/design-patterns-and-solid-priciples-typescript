import { Printer } from "./printer.interface";
import { Scanner } from "./scanner.interface";
import { FaxMachine } from "./fax-machine.interface";

export class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
  print(): void {
    console.log("The Machine is printing");
  }

  scan(): void {
    console.log("The Machine is scanning");
  }

  fax(): void {
    console.log("The Machine is sending a fax");
  }
}