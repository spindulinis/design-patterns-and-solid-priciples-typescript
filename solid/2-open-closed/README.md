# Open-Closed Principle

> "The Open-Closed Principle states that "software entities (classes, modules, functions, etc.) should be open for
> extension, but closed for modification." -- Robert C. Martin

This principle dictates that software entities (classes, modules, functions, etc.) should be open for extension but
closed for modification. This means that you should be able to add new features or functionality to a system without
altering its existing code. You can extend the behavior of the object, but you should not modify its source code.

## Why does this principle exist?

The Open-Closed Principle exists to:

- Reduce the risk of breaking existing code
- Make systems easier to extend
- Support scalable and maintainable design

## When should I use it?

Use Open-Closed Principle when:

- You expect new variations of behavior
- Logic might grow over time
- You want to avoid modifying stable, tested code

## Pros

- **Reduced Risk of Bugs** - Existing code isn't modified, so new features don't introduce bugs to existing
  functionality
- **Increased Code Reusability** - Components can be reused independently, encouraging modular design
- **Simplified Versioning and Patching** - New features are isolated to new components, simplifying version control and
  patching
- **Improved Maintainability** - New features are added as extensions, making the codebase easier to maintain
- **Easier Testing** - Changes are isolated to new components, so existing tests remain valid
- **Enhanced Productivity** - New features are easier and faster to develop since they don't require changing existing
  code
- **Code Organization** - Encourages well-structured and organized code, with a clear separation of concerns

## Cons

- More classes and interfaces
- Slightly more initial design effort
- Can feel complex for very small applications

## What are common mistakes?

- Using if / else or switch for customer types
- Modifying existing classes instead of extending behavior
- Hard-coding business rules