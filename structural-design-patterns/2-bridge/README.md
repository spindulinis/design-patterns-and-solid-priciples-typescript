# Bridge Pattern

> The Bridge pattern is a structural design pattern that lets you split a large class or a set of closely related
> classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each
> other.

## The pattern exists to:

- Decouple an abstraction from its implementation so the two can vary independently
- Avoid "Class Explosion" (the Cartesian product problem) when extending a class in multiple orthogonal dimensions
- Share an implementation among multiple objects

## Where And When To Use it?

- **Implementation Hiding** - When you want to hide implementation details from the client
- **Platform Independence** - When you want to have implementation-specific behavior
- **Runtime Switching** - When you want to switch implementations at runtime
- **Static vs. Dynamic** - When your code structure is static, but the behavior needs to be dynamic
- **Avoiding Monoliths** - When you want to prevent monolithic designs

## Pros

- **Decoupling** - The client code works with high-level abstractions and doesn't need to know about platform details.
- **Open/Closed Principle** - You can introduce new abstractions and implementations independently without breaking
  existing code.
- **Single Responsibility Principle** - You can focus on high-level logic in the abstraction and platform details in the
  implementation.
- **Extensibility** - You can extend the Abstraction and Implementation hierarchies independently.

## Cons

- **Increased Complexity** - It introduces new interfaces and classes, which might complicate the code structure for
  simple applications.
- **Context Switching** - Developers must understand the distinction between "Abstraction" (Business Logic) and "
  Implementation" (Platform Logic), which can be conceptually confusing.
- **Over-Engineering** - If you only have one implementation, applying this pattern is unnecessary overhead.

## Common Mistakes

- **Confusing with Adapter** - Using Bridge to fix incompatible interfaces after the code is written. Adapter is for
  retroactive fixes; Bridge is for upfront design.
- **Cartesian Product via Inheritance** - Trying to solve the "Shape x Color" problem using inheritance instead of
  composition, leading to a massive number of classes.

```TypeScript

// Bad: Creating a new class for every combination
class RedCircle {
}

class BlueCircle {
}

class RedSquare {
}

class BlueSquare {
}

// Good: Bridge separates Shape (Abstraction) and Color (Implementation)
class Circle {
  constructor(protected color: Color) {
  }
}

class Red implements Color { /* ... */
}
```

- **Leaky Abstractions** - Exposing implementation details in the high-level abstraction interface, defeating the
  purpose of decoupling.