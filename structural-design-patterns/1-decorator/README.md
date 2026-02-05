# Decorator Pattern

> The Decorator design pattern is a structural design pattern that allows you to dynamically add or override behaviour
> in an existing object without changing its implementation. This pattern is particularly useful when you want to modify
> the behavior of an object without affecting other objects of the same class.

## The pattern exists to:

- Extend functionality without using inheritance
- Apply responsibilities dynamically at runtime
- Adhere to the Open/Closed Principle

## Where And When To Use it?

- **Dynamic Expansion** - You need to add responsibilities to individual objects dynamically and transparently
- **Withdrawable Responsibilities** - You need to add responsibilities to an object that can be withdrawn later
- **Selective Extension** - You want to add a few additional properties to some objects, but not all
- **Sealed or Legacy Code** - Extending class functionality is not a viable option
- **Future Extensibility** - You want to ensure that the system can be easily extended in the future

## Pros

- **High Flexibility** - Combines multiple decorators to create complex behaviors
- **Single Responsibility** - Divides a monolithic class that implements many variants of behavior into several smaller
  classes.
- **Dynamic Composition** - Allows changing an object’s behavior at runtime by adding or removing wrappers.
- **Scalability** - Avoids creating a new subclass for every possible combination of features

## Cons

- **Code Verbosity** - Initializing objects can become ugly (e.g., `new Compression(new Encryption(new FileStream())))`.
- **Identity Issues** - A decorated object is a wrapper; therefore, `originalInstance === decoratedInstance` will return
  false.
- **Debugging Complexity** - It can be difficult to trace through the "onion layers" of decorators to find where a bug
  originates.
- **Order Dependency** - The final result often depends on the order in which decorators are applied (e.g., Encrypting
  then Compressing is different from Compressing then Encrypting).

## Common Mistakes

- **Class Explosion of Decorators** - Creating a decorator for simple state changes that could have been handled with a
  few properties or a strategy pattern.
- **Violating the Interface** - Adding new public methods to the decorator that aren't in the base interface. This
  prevents the decorator from being used interchangeably with the original object.

```TypeScript
// ❌ Bad: Client code expecting 'Coffee' won't know about 'getMilkTemp'
class MilkDecorator extends Coffee {
  getMilkTemp() {
    return 70;
  }
}
```

- **Heavy Logic in Decorators** - Putting complex business logic inside the wrapper rather than keeping it focused on "
  decorating" the existing call.