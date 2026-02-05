import { Employee } from "./employee.interface";

export class Developer implements Employee {
  constructor(private name: string, private salary: number) {
  }

  public getname(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getRole(): string {
    return "Developer";
  }
}