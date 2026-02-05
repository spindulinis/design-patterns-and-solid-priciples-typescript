# Singleton Pattern

> The Singleton pattern is a creational design pattern that lets you ensure that a class has only one instance, while
> providing a global access point to this instance.

## Why does this pattern exist?

The Singleton pattern exists to:

- Guarantee a single shared instance
- Coordinate shared state across the application
- Avoid creating multiple conflicting instances

## Where And When To Use it?

- **Caching** - Prevents data duplication in cache.
- **Service Proxies** - Manages efficient server communication.
- **Shared Resources** - Ensures single access point to a shared resource.
- **Configuration Data** - Centralizes access to config.
- **Logger** - Ensures consistent logging

Avoid Singleton for business entities (Product, User, Order)

## How is it implemented here?

`new Logger()` not allowed (constructor is `private`)

`getInstance()` always returns the same object

Both `logger1` and `logger2` reference the same instance

## Pros

- Ensures a single instance
- Controlled access to shared resources
- Saves memory and resources

## Cons

- **Global State** - Leads to shared state and increased coupling
- **Testing Difficulty** - Preserved state between tests can cause unexpected results
- **Concurrency Issues** - Need to ensure thread-safety in multi-threaded environments
- **Subclassing** - Difficult to subclass due to static methods and semantics of inheritance
- **Overuse and Misuse** - Can lead to problems with tight coupling and difficulties in testing
- **Memory Management** - Singleton instance remains in memory until application is shut down

## Common Mistakes

1. Public constructor (breaks Singleton)

   ```new Logger(); // ❌ multiple instances possible```

2. Using Singleton for domain objects

   ```// ❌ Bad use case SingletonProduct```

3. Storing mutable global state

   ``` // ❌ leads to unpredictable behavior```





