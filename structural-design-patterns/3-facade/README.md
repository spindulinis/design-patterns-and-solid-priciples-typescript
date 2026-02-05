# Facade Pattern

> The Facade design pattern is a structural design pattern that provides a simplified interface to a complex system. It
> involves creating a wrapper interface over a complex system to hide its complexities. This pattern involves a single
> class that provides simplified methods required by the client and delegates calls to methods of existing system
> classes.

## The pattern exists to:

- Provide a simple interface to a complex subsystem
- Decouple the client code from the detailed subsystem classes
- Layer the system to create a clean entry point for each level

## Where And When To Use it?

- **Complex Subsystems** - When you need to simplify interaction with a complex library or framework (e.g., a complex
  video conversion library)
- **Legacy Code Migration** - When you want to wrap a messy, legacy system with a clean, modern interface for new code
  to use
- **Layered Architecture** - When you want to define an entry point to each layer of a subsystem to avoid tight coupling
  between layers
- **Dependency Reduction** - When you want to reduce the number of dependencies the client code has on the inner
  workings of
  a system

## Pros

- **Simplified Interface** - Makes a software library easier to use, understand, and test
- **Decoupling** - Promotes weak coupling between the subsystem and its clients (the "Law of Demeter")
- **Encapsulation** - Hides the implementation details and complexity of the subsystem from the client
- **Centralized Control** - Provides a single location to update interactions with the subsystem if the subsystem
  changes

## Cons

- **Over-abstraction** - Facades can sometimes lead to an unnecessary level of abstraction. If the underlying subsystem
  is relatively simple and doesn't require a simplified interface, introducing a facade might add complexity rather than
  reducing it.
- **Limited Flexibility** - By using a Facade, you're limiting your access to the full functionality and flexibility of
  the subsystem. If clients need to perform more complex operations not covered by the facade, they will have to bypass
  the facade, which can lead to a mix of high-level and low-level calls in the client code.
- **Hiding Useful Information** - While encapsulating the details of complex subsystems is often useful, in some cases,
  it might hide information that could be beneficial for the client code. Developers using the facade may be unaware of
  the specifics of subsystem behavior which might be important in certain scenarios.

## Common Mistakes

- **Adding Business Logic** - Putting complex logic inside the Facade class itself. The Facade should only delegate
  calls to the subsystems, not perform the work itself.

```TypeScript

// Bad: Facade doing the work
class OrderFacade {
  placeOrder() {
// Calculation logic here... (Wrong place!)
  }
}

// Good: Facade delegating
class OrderFacade {
  placeOrder() {
    this.paymentService.process();
    this.inventoryService.reserve();
  }
}
```

- **Forcing the Facade** - Preventing advanced clients from accessing the underlying subsystem classes directly when
  necessary. The Facade is meant to be a "convenience," not a strict jail.
- **Confusing with Proxy** - Thinking Facade and Proxy are the same. Facade simplifies an interface; Proxy keeps the
  same
  interface but adds control (like access rights or lazy loading).