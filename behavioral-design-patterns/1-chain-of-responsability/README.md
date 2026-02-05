# Chain of Responsibility Pattern

> The Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon
> receiving a request, each handler decides either to process the request or to pass it to the next handler in the
> chain.

## The pattern exists to:

- **Decouple senders from receivers:** The component initiating the request shouldn't care who handles it or how it is
  handled.
- **Allow dynamic processing:** It enables you to decide at runtime which object (or sequence of objects) should handle
  a specific request.

## Where And When To Use it?

- **When multiple objects can handle a request:** And the specific handler isn't known beforehand (e.g., a "Save" button
  click could be handled by the button, the form, or the window).
- **When you want to issue a request to one of several objects:** Without specifying the receiver explicitly.
- **When the set of objects handling a request changes dynamically:** You can add, remove, or reorder handlers at
  runtime (e.g., enabling/disabling logging or validation layers).
- **Middleware pipelines:** Common in web frameworks (like Express.js) where a request passes through authentication,
  validation, and logging before reaching the controller.

## Pros

- **Single Responsibility Principle:** You can decouple classes that invoke operations from classes that perform
  operations.
- **Open/Closed Principle:** You can introduce new handlers into the app without breaking the existing client code.
- **Flexibility:** You can control the order of request handling and change it dynamically at runtime.

## Cons

- **No guarantee of handling:** A request might reach the end of the chain without being processed (if no "catch-all"
  handler exists).
- **Performance overhead:** Long chains can introduce latency, especially if many handlers inspect the request but don't
  handle it.
- **Harder debugging:** The flow of execution isn't visible in a single method; stack traces can become deep and
  confusing, making it hard to see where the logic actually stopped.

## Common Mistakes

- **Broken Chains:** Forgetting to call super.handle(request) or this.next.handle(request) in the base class, causing
  the request to die silently in the middle of the chain.
- **Circular Chains:** Accidentally setting handlers that point back to previous handlers, causing an infinite loop (
  Stack Overflow).
- **Confusing with Decorator:** While they look similar structurally, Decorator adds behavior and usually passes the
  request down every time. Chain of Responsibility can break the flow (stop passing the request) at any point.