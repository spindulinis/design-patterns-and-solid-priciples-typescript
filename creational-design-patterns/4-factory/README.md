# Factory Pattern

> The Factory Design Pattern is a type of creational design pattern that provides an interface for creating objects in a
> superclass, but allows subclasses to alter the type of objects that will be created.

## Why does this pattern exist?

The Factory pattern exists to:

- Centralize object creation
- Remove new logic from client code
- Reduce coupling to concrete implementations

It makes the code easier to extend and safer to modify.

## When To Use it?

- **Uncertain Object Types**: If your software is supposed to create different types of objects, and you don't know what
  these
  objects will be until runtime
- **Similar Classes**: If you're dealing with a large number of classes that share a common superclass, and you often
  need
  to
  instantiate one of these classes, but you don't know ahead of time which one you'll need to instantiate,
- **Pluggability and Flexibility**: If you are developing a library and want to provide a way for users to extend your
  library with their own classes
- **Replacing Direct Object Construction**: If you see code that's directly constructing instances of a class.Directly
  constructing objects can make code more brittle, harder to test, and less flexible.
- **Complexity Hiding**: When object creation is complex or involves a lot of logic (for example, setting up and
  connecting several different objects)
- **Conditional Object Creation**: If your code involves conditional creation of objects based on certain parameters or
  environmental conditions

## Where To Use it?

- **Database Connections** - Supports multiple types of databases
- **UI Widget Creation** - Different widgets like buttons, text fields, drop-downs, etc
- **Logging** - Supports different types of logging
- **Payment Processing** - Supports different types of payment methods

## Pros

- Decoupling - The client code does not need to know anything about the concrete classes, which leads to less coupling
  between different parts of an application
- Flexibility - when adding new types of objects
- Encapsulation - encapsulates the details of object creation

## Cons

- Increased Complexity - Involves additional abstraction and more classes
- Refactoring Challenge - Difficult to introduce in a large existing codebase
- Hidden Types - Actual object type can be obscured
- Increased Number of Classes - More classes can complicate code management
- Testing - Complexity in testing due to factory setup

## Common Mistakes

**Switch Statement Overgrowth**: As factory grows to 20+ types, the switch can become a maintenance nightmare. At
that point, developers often use a **Map/Registry** to map types to classes.

**Violating OCP**: Every time you add a product, you do have to modify the Factory. While this centralizes the change,
it still technically modifies a class. (This is usually an acceptable trade-off).