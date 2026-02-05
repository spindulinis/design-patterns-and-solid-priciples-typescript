# Dependency Inversion Principle

> "High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should
> not depend on details. Details should depend on abstractions." - Robert C. Martin

## Why does this principle exist?

The Dependency Inversion Principle exists to:

- Reduce tight coupling between classes
- Make systems easier to extend and test
- Allow changing implementations without modifying business logic

## When should I use it?

Use Dependency Inversion Principle when:

- A class depends on concrete implementations (Email, SMS, Push, etc.)
- You want to swap implementations without changing business logic
- You want easier unit testing (mock dependencies)

## Pros

- **Decoupling of Code** - Reduces the interlinking of modules in a system
- **Ease of Modification and Extension** - Allows easy introduction of new functionality
- **Improved Testability** - Can provide mock implementations during testing
- **Code Reusability** - Easier to reuse modules across different parts of an application
- **System Scalability** - Easier to scale up the system in the future
- **More Understandable and Maintainable Code** - Reduces dependencies, making code easier to understand and maintain

## Cons

- More abstractions and interfaces
- Slightly more complex setup
- Overuse can make simple systems harder to read