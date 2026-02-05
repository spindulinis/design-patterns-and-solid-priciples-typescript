import { Observer } from "./observer.interface";

export interface Subject {
  addObserver(observer: Observer): void;

  removeObserver(observer: Observer): void;

  notifyObservers(): void;

  getState(): number;

  setState(state: number): void;
}