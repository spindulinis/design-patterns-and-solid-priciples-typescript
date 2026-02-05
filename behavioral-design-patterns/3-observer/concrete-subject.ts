import { Subject } from "./subject.interface";
import { Observer } from "./observer.interface";

export class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  public addObserver(observerToAdd: Observer): void {
    const isExists = this.observers.some(observer => observer === observerToAdd);
    if (isExists) {
      return console.log("Observer already exists");
    }

    this.observers.push(observerToAdd);
    console.log("Observer Added Successfully");
  }

  public removeObserver(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Observer Does not Exist");
    }
    this.observers.splice(observerIndex, 1);
    console.log("Observer was successfully removed");
  }

  public notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  public getState(): number {
    return this.state;
  }

  public setState(state: number): void {
    this.state = state;
    console.log("Setting State ....");
    this.notifyObservers();
  }
}