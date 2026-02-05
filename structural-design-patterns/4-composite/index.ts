import { Developer } from "./developer";
import { Designer } from "./designer";
import { Manager } from "./manager";

let developer1 = new Developer("John Doe", 12000);
let developer2 = new Developer("Jane Doe", 15000);
let designer = new Designer("Mark", 10000);

let manager = new Manager("Michael", 25000);
manager.addEmployee(developer1);
manager.addEmployee(developer2);
manager.addEmployee(designer);

console.log(manager);
console.log(manager.getRole());
console.log(manager.getSalary());
console.log(manager.getEmployees()[1].getname());
console.log(manager.getEmployees()[1].getSalary());