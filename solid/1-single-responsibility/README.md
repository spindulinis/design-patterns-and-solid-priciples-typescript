# Single Responsibility Principle

> "A class should have only one reason to change." -- Robert C. Martin

This means that a class should only have one responsibility or job.

## Why does this principle exist?

- Reduce reasons for a class to change
- Improve maintainability
- Make code easier to understand and test

## When should I use it?

Use Single Responsibility Principle when:

- A class starts doing multiple unrelated tasks
- Changes in one area force changes in another
- You want clear separation of concerns

## Pros

- **Easier Maintenance** - A class with a single responsibility is simpler to maintain and update.
- **Improved Understandability** - The purpose of a class with a single responsibility is clear to developers.
- **Easier Testing** - Focused tests can be written for a class with a single responsibility.
- **Reduced Coupling** - By minimizing the impact of changes, the SRP reduces the risk of creating bugs.
- **Increased Reusability** - Classes following SRP can be reusable in different contexts, increasing efficiency.

## Cons

- More classes and files
- Slightly more upfront design effort
- Can feel excessive for very small scripts


