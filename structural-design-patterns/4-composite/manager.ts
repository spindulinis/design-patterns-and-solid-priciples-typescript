import { CompositeEmployee } from "./composite-employee.interface";
import { Employee } from "./employee.interface";

export class Manager implements CompositeEmployee {
  private employees: Employee[] = [];

  constructor(private name: string, private salary: number) {
  }

  public getname(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getRole(): string {
    return "Manager";
  }

  public addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  public removeEmployee(employee: Employee): void {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  public getEmployees(): Employee[] {
    return this.employees;
  }
}