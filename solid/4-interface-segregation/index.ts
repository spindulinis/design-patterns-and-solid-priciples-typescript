import { MultiFunctionPrinter } from "./multi-function-printer";
import { SimplePrinter } from "./simple-printer";

const simplePrinter = new SimplePrinter();
simplePrinter.print();

const multiFunctionPrinter = new MultiFunctionPrinter();
multiFunctionPrinter.print();
multiFunctionPrinter.scan();
multiFunctionPrinter.fax();