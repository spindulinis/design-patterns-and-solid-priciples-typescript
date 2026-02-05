# Iterator Pattern

> The Iterator pattern is a design pattern that allows sequential access to elements in a collection, without exposing
> its underlying representation. It provides a way to access the elements of an aggregate object sequentially without
> exposing the underlying details.

## The pattern exists to:

- **Decouple traversal algorithms from data storage:** It moves the responsibility of how to iterate (depth-first,
  breadth-first, random access) out of the collection and into a separate iterator object.
- **Provide a uniform interface:** It allows client code to traverse different types of collections (arrays, linked
  lists,
  trees) using the same standard interface (e.g., .next(), .hasNext()).

## Where And When To Use it?

- **When your collection has a complex underlying structure:** Such as a Tree or Graph, and you want to hide the
  complexity of traversing it from the client (e.g., "just give me the next node").
- **When you want multiple traversal methods for the same collection:** For example, iterating over a list of employees
  by "Seniority," "Department," or "Alphabetical" without bloating the EmployeeList class.
- **When you want to be able to swap collections without breaking client code:** If your client uses an Iterator
  interface, you can switch from an Array to a LinkedList internally, and the client loop code remains identical.

## Pros

- **Single Responsibility Principle:** You can clean up the collection code by extracting bulky traversal algorithms
  into separate classes.
- **Open/Closed Principle:** You can implement new types of collections and iterators and pass them to existing code
  without breaking anything.
- **Parallel Iteration:** You can iterate over the same collection in parallel because each iterator object tracks its
  own iteration state.

## Cons

- **Overkill for simple collections:** If you are just dealing with a simple array or list, using an iterator object is
  less efficient and more verbose than a simple for loop.
- **Performance:** In some low-level scenarios, accessing elements via an iterator is slightly slower than direct index
  access due to the overhead of method calls.
- **Complexity:** Introducing a new class for every traversal strategy increases the number of classes in the
  application.

## Common Mistakes

- **Modifying the collection while iterating:** Adding or removing items from the collection while an iterator is active
  often leads to errors or unexpected behavior (ConcurrentModificationException in some languages).
- **Reinventing the wheel:** Most modern languages (Java, C#, Python, TypeScript) have powerful built-in iterators (like
  for...of, IEnumerable, Iterator). Implementing a custom one from scratch is often unnecessary unless the logic is very
  specific.
- **Ignoring the "Reset" capability:** Forgetting that iterators are stateful one-way streets. Once you reach the end,
  you usually need to create a new iterator to start over, you cannot just "rewind" easily in all implementations.