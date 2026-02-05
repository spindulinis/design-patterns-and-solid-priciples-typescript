# Builder Pattern

> The Builder pattern is a creational design pattern that lets you construct complex objects step by step.

## Why does this pattern exist?

The Builder pattern exists to:

- Handle objects with many optional parameters
- Avoid large, unreadable constructors
- Make object creation more clear and expressive

It improves readability, maintainability, and flexibility.

## When To Use it?

**Complex Object Creation**: If your software needs to create complex objects that have many attributes, some of which
are optional and some are mandatory

**Step-by-step Object Creation**: If an object must be created in multiple steps, especially if these steps need to be
executed in a specific order

**Constructors with Many Parameters**: If you have a class with a constructor that requires a large number of parameters

**Nested Objects**: If the object being constructed contains nested objects which themselves contain multiple parameters

**Immutable Objects**: If you want to construct an immutable object with many attributes

**Code Clarity**: If you have a constructor with many parameters, and it's not clear what each parameter is for (because
they have the same type or aren't self-explanatory)

## Where To Use it?

- **Meal Ordering System** - Manages complex meal configurations
- **Construction Industry** - Encapsulates building processes
- **Game Development** - Builds diverse characters
- **Document Creation** - Generates various document formats
- **E-commerce System** - Constructs products with various attributes

## Pros

- **Fluent Interface** - Makes client code more readable
- **Separation of Logic** - Construction logic separate from business logic
- **Multiple Representations** - Same construction process, different results
- **Object Integrity** - Ensures validity of object construction
- **Reduced Parameter Complexity** - Manages many parameters effectively
- **Immutability** - Often returns immutable objects
- **Easier to Extend** - Adding new features becomes easier

## Cons

- **Increased Complexity** - Involves additional abstraction layer and more classes
- **Additional Code** - Can result in significant code addition
- **Runtime Errors** - Lack of built-in compile-time checks. For example, if you forget to set a required field in the
  builder, TypeScript won't notify you of this at compile-time.
    - Mandatory Constructor: Passing the `title` and `price` directly into the `ProductBuilder` constructor.
    - Validation in `build()`: Throwing an error inside the `build()` method if required fields are missing.
- **Mutability Concerns** - Issues handling mutable objects
- **Refactoring Difficulties** - Requires updating builder on class changes
- **Performance** - More steps, more computational resources
- **Documentation** - Extra complexity mandates good documentation