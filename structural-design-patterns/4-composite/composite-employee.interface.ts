import { Employee } from "./employee.interface";

export interface CompositeEmployee extends Employee {
  addEmployee(employee: Employee): void;

  removeEmployee(employee: Employee): void;

  getEmployees(): Employee[];
}