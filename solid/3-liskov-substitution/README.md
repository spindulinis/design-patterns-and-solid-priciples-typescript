# Liskov Substitution Principle

> "If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering
> any of the desirable properties of that program."

Derived classes must be substitutable for their base classes. That is, a program that uses a base
class must be able to substitute a subclass without affecting the correctness of the program.

## Why does this principle exist?

The Liskov Substitution Principle exists to:

- Guarantee correctness when using inheritance
- Ensure safe polymorphism
- Prevent unexpected runtime behavior

## When should I use it?

Apply Liskov Substitution Principle when:

- You are using inheritance or abstract classes
- Subclasses override base class behavior
- Client code relies on base class contracts

## Pros

- **Code Reusability and Reduced Duplication** - LSP encourages using superclass objects and substituting them with
  subclasses, enhancing reusability
- **Enhanced Flexibility** - LSP allows introduction of new subclasses without breaking existing functionality
- **Lower Maintenance Cost** - LSP compliant codebases are easier to maintain due to the consistency in behavior
- **Improved Robustness** - LSP helps avoid design anomalies, leading to less prone to errors and unexpected behavior
- **Increased Understanding and Ease of Use** - Substitutability ensures developers can confidently use subclasses in
  place of their base class
- **Modularity** - LSP encourages creating substitutable parts for complex systems, enhancing modularity

## Cons

- Requires careful contract design
- Can limit subclass freedom
- Violations are often subtle and hard to detect

## Tip: Design by Contract

To follow LSP, think of your base class as a Contract.

**Pre-conditions**: The subclass cannot be more demanding than the parent (e.g., if the parent accepts any number, the
subclass shouldn't only accept positive numbers).

**Post-conditions**: The subclass must provide at least what the parent provided (e.g., if the parent returns a List,
the
subclass shouldn't return null).