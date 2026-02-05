# Strategy Pattern

> The Strategy pattern is a behavioral design pattern that lets you define a family of algorithms, put each of them into
> separate classes, and make their objects interchangeable. In other words, it's a way to change the behavior of an
> object
> at runtime without changing its implementation.

## The pattern exists to:

- **Separate the "what" from the "how":** It allows the Context class to know what needs to be done (e.g., "Sort this
  list")
  without caring how it is done (e.g., Bubble Sort vs. Quick Sort).
- **Make algorithms interchangeable:** It enables swapping out the logic used by an object at runtime (e.g., switching
  from "Credit Card" payment to "PayPal" payment).

## Where And When To Use it?

- **When you have multiple ways to do a specific task:** Such as saving a file (PDF, JPG, PNG), sorting data, or
  calculating
  routes (Walking, Driving, Cycling).
- **When a class has a massive conditional statement:** If your method has a huge switch or if/else block that selects
  an
  algorithm based on a variable, move each branch into its own Strategy class.
- **When you want to isolate business logic:** To keep the implementation details of complex algorithms out of the main
  business logic code.

## Pros

- **Open/Closed Principle:** You can introduce new strategies (algorithms) without changing the Context or existing
  strategies.
- **Runtime Switching:** You can switch algorithms inside an object at runtime (e.g., an AI enemy switching from "Attack
  Strategy" to "Retreat Strategy" when health is low).
- **Isolation:** Implementation details of an algorithm are completely isolated from the code that uses it.

## Cons

- **Client Awareness:** The client (the code using the strategy) often needs to know the difference between the
  strategies
  to choose the right one.
- **Class Explosion:** If you only have a few simple algorithms that rarely change, creating a separate class and
  interface
  for each one adds unnecessary bloat.
- **Communication Overhead:** If the strategy needs data from the Context, you might end up passing complex parameters
  or
  tight coupling, which defeats the purpose of isolation.

## Common Mistakes

- **Confusing with State Pattern:** In State, the internal state drives the change and the transitions are often
  automatic.
  In Strategy, the client explicitly chooses the strategy and usually drives the change.
- **Using it for simple logic:** Creating a Strategy pattern for a simple x > 5 check is over-engineering. Just use a
  lambda
  or function pointer if your language supports it.
- **Forgetting a "Default" Strategy:** Failing to provide a default strategy in the Context, leading to null pointer
  exceptions if the client forgets to set one.