# SOLID design principles

The SOLID principles are five design guidelines in object-oriented software development that help engineers create code
that is more maintainable, flexible, and easy to understand. They were popularized by Robert C. Martin (Uncle Bob).

Here is a breakdown of each principle:

### 1. Single Responsibility Principle (SRP)

> "A class should have one, and only one, reason to change."

> Every class or module should focus on a single piece of functionality. If a class handles both database logic and
> logging, it has two reasons to change. Splitting these ensures that updates to one part of the system don't
> accidentally
> break unrelated parts.

### 2. Open-Closed Principle (OCP)

> "Software entities should be open for extension, but closed for modification."

> You should be able to add new functionality to a system without changing existing code. This is usually achieved using
> interfaces or abstract classes. Instead of editing a core class to add a new feature, you extend it or implement an
> interface.

### 3. Liskov Substitution Principle (LSP)

> "Objects of a superclass should be replaceable with objects of its subclasses without breaking the application."

> If you have a parent class and a child class, you should be able to swap the parent for the child anywhere in your
> code
> without causing errors or unexpected behavior. This ensures that inheritance is used correctly and that subclasses
> honor
> the "contract" of the parent.

### 4. Interface Segregation Principle (ISP)

> "No client should be forced to depend on methods it does not use."

> It is better to have many small, specific interfaces than one large, "fat" interface. When an interface is too broad,
> classes implementing it are often forced to write "dummy" code for methods they don't actually need.

### 5. Dependency Inversion Principle (DIP)

> "Depend upon abstractions, [not] concretions."

> High-level modules (the "policy" or "logic" layers) should not depend on low-level modules (the "utility" or "
> database"
> layers). Both should depend on abstractions (interfaces). This decouples the core logic of your app from the specific
> tools or frameworks you are using.