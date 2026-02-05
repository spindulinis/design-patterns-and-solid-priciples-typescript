# Adapter Pattern

> The Adapter Design Pattern is a software design pattern that allows the interface of an existing class to be used from
> another interface. It's often used to make existing classes work with others without modifying their source code. The
> Adapter Pattern is especially useful when the classes that need to communicate with each other do not have compatible
> interfaces.

## The pattern exists to:

- Allow incompatible interfaces to work together
- Reuse existing classes without modifying their source code
- Decouple the client from the implementation details of the wrapped class

## Where And When To Use it?

- **Integrating Legacy Code** - When you need to integrate a new system with an old component that has an incompatible
  interface.
- **Third-Party Libraries** - When you want to use a third-party library, but its interface doesn't match the one your
  application expects.
- **Data Conversion** - When data formats between two systems differ (e.g., XML to JSON) and need a translation layer.
- **Interface Standardization** - When you have several classes with similar functionality but different method names,
  and you want to put them behind a common interface.

## Pros

- **Single Responsibility Principle** - Separates the data conversion or interface translation code from the primary
  business logic.
- **Open/Closed Principle** - You can introduce new adapters without breaking the existing client code.
- **Reusability** - Allows you to reuse existing legacy or third-party classes that would otherwise be incompatible.

## Cons

- **Overall Complexity** - Increases the complexity of the code by introducing a set of new interfaces and classes.
  Sometimes a simpler change to the service class is better.
- **Performance Overhead** - Adding an extra layer of abstraction can introduce slight runtime overhead, though usually
  negligible.
- **Indirectness** - It can be harder to debug because the code execution jumps through the adapter before reaching the
  actual logic.

## Common Mistakes

- **Trying to Adapt Too Much** - Creating a "God Adapter" that tries to fix incompatible behavior, data formats, and
  complex logic all at once. An adapter should primarily handle interface translation.
- Confusing with Bridge or Decorator
    - Adapter makes things work after they're designed (retroactive).
    - Bridge makes them work before they're designed (upfront).
    - Decorator adds behavior without changing the interface.
- **Ignoring the "Target" Interface** - Implementing an adapter without adhering strictly to the interface the client
  expects. If the client expects methodA(), your adapter must provide exactly that, not methodA_adapted().