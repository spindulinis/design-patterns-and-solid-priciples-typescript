# Abstract Factory Pattern

> Abstract Factory is a creational design pattern that provides an interface for creating families of related or
> dependent objects without specifying their concrete classes.

## Why does this pattern exist?

The Abstract Factory pattern exists to:

- Create groups of related objects together
- Ensure compatibility between created objects
- Avoid mixing incompatible implementations

It is especially useful when objects must work together as a set.

## When To Use it?

- **Interrelated Dependencies**: If you have a family of related products, and you need to ensure that a client always
  uses objects that belong together
- **Switching Product Families**: If you need to provide a way to swap out entire "families" of objects
- **Encapsulating Complex Creation Logic**: If creating an object involves a complex process that has dependencies on
  other objects or on some configuration
- **Isolating Concrete Classes**: If you want to isolate the concrete classes used in your application from the code
  that constructs the objects
- **Consistent Object Creation**: If your code has dependencies on specific types of objects that need to be created
  together, and you want to enforce consistency
- **Supporting Multiple Architectures**: If your software needs to run in different environments that require different
  implementations of a set of related objects,

## Where To Use it?

- GUI Libraries - Support for different look-and-feels or windowing systems
- UI themes (Light / Dark)
- Platform-specific components (Web / Mobile)
- Databases - Handle creation of connections and queries for different types of databases
- Cross-Platform Development (Win/Mac/Web) - Allows different sets of objects depending on the running platform

## Pros

- Consistency Among Products - Products of the same family are always compatible
- Avoiding Concrete Product Classes - Client code interacts only with abstract product interfaces
- Code Reusability & Swapping Product Families - Product families can be swapped easily without changing client code
- Single Responsibility Principle - Each factory is responsible for creating products of a single variant
- Open/Closed Principle - Easy to introduce new factories and product families without changing existing client code

## Cons

- Increased Complexity - Involves additional abstraction and more classes
- Modifying Product Families (Interface Stability) - Changes to the factory interface affects all factory
  implementations

If you decide that your UIFactory now needs to create a Slider, you must go back and update the code for
DarkModeFactory, LightModeFactory, and every other factory you've already built. This is why Abstract Factories
require more "upfront design."

- Code Maintenance - Maintenance can become cumbersome as the number of products increases
- Dependency - Client code becomes dependent on the factory interface
- Difficulty of Unit Testing - Coupling of multiple products makes individual product testing harder