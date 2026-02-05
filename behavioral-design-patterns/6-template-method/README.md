# Template Method Pattern

> The Template Method is a behavioral design pattern that defines the skeleton of an algorithm in a base class but lets
> subclasses override specific steps of the algorithm without changing its structure. This pattern allows you to make
> parts of an algorithm optional, mandatory, or customizable by the subclasses.

## The pattern exists to:

- **Enforce the "Hollywood Principle":** "Don't call us, we'll call you." The parent class controls the execution flow
  and
  calls the subclass methods only when needed.
- **Eliminate Code Duplication:** It pulls common behavior up into a superclass, ensuring that invariant steps (the code
  that stays the same) are implemented once, while variant steps (the code that changes) are delegated to subclasses.
- **Control Extension Points:** It allows the base class to force specific constraints on the algorithm's lifecycle
  while
  giving flexibility on how specific steps are executed.

## Where And When To Use it?

- **Standardized Workflows:** When you have two or more algorithms that follow the exact same steps (e.g., Data Mining:
  Open
  File -> Extract Data -> Parse Data -> Close File), but the implementation of those steps differs based on the
  context (e.g., PDF vs. CSV).
- **Framework Development:** When building libraries or frameworks where you want to provide users with a simple way to
  extend functionality without breaking the core architecture (e.g., standard setUp() and tearDown() methods in unit
  testing frameworks).
- **Refactoring:** When you notice several classes with slightly different implementations of the same logical sequence.

## Pros

- **Don't Repeat Yourself (DRY):** You can move the duplicate code into a superclass.
- **Security & Reliability:** By declaring the template method itself as final, you guarantee the algorithm structure
  cannot
  be altered by clients or subclasses, preserving the integrity of the workflow.
- **Easy Maintenance:** Updates to the core algorithm (the "skeleton") only need to happen in one place (the base class)
  and
  automatically propagate to all subclasses.

## Cons

- **Rigidity:** Some clients may feel limited by the provided skeleton. You cannot change the order of steps in the
  subclass, only the implementation of the steps.
- **Liskov Substitution Principle (LSP) Risks:** It is easy for a subclass to suppress a default step implementation in
  a
  way that violates the behavioral contract of the base class.
- **Maintenance Complexity:** As the number of steps increases, maintaining the template can become difficult. If the
  base
  class changes, it may break existing subclasses that relied on the old structure.

## Common Mistakes

- Confusing with Strategy Pattern:
    - Template Method uses inheritance to vary parts of an algorithm (static/compile-time).
    - Strategy uses composition to replace the entire algorithm (dynamic/runtime).
- **Overusing Hooks:** Creating a template with too many abstract methods or "hooks" makes the pattern burdensome to
  implement for the subclass.
- **Forgetting final:** Failing to make the main template method final allows subclasses to override the structure of
  the
  algorithm, which defeats the purpose of the pattern.