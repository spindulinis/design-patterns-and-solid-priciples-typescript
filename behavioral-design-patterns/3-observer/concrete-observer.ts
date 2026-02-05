import { Observer } from "./observer.interface";
import { Subject } from "./subject.interface";

export class ConcreteObserver implements Observer {
  constructor(private id: number) {
  }

  public update(subject: Subject): void {
    console.log(
      `Observer ${this.id} updated, new state: ${subject.getState()}`
    );
  }
}