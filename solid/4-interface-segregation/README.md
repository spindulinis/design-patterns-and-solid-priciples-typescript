# Interface Segregation Principle

> "No client should be forced to depend on interfaces they do not use." - Robert C. Martin

This principle is all about reducing the side effects and frequency of required changes by splitting large, complex
interfaces into smaller, more specific ones. If an interface is broken down into specific sets of methods, it will allow
the client to only know about the methods that are of interest to them.

> In layman's terms, don't add additional functionality to an existing interface by adding new methods. Instead, create
> a new interface.

## Why does this principle exist?

The Interface Segregation Principle exists to:

- Prevent classes from implementing methods they do not use
- Reduce unnecessary dependencies
- Improve flexibility and maintainability

## When should I use it?

Use Interface Segregation Principle when:

- An interface becomes too large
- Different implementations only need parts of the behavior
- Classes are forced to implement empty or meaningless methods

## Pros

- **Improved Maintainability** - Promotes smaller, easier to understand interfaces
- **Reduced Impact of Changes** - Changes in one interface don't affect unrelated classes
- **Increased Flexibility and Reusability** - Specific roles can be combined in different ways
- **Stronger Encapsulation** - Limits the exposure of classes to just needed methods
- **Better Testing** - Easier to mock for unit tests
- **Better Compliance with Other Principles** - Leads to better compliance with other design principles

## Cons

- More interfaces to manage
- Slightly more complex architecture
- Over-segmentation can reduce readability