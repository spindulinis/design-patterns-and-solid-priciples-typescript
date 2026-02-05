# Composite Pattern

> The Composite pattern is a structural design pattern that lets you compose objects into tree-like structures and then
> work with these structures as if they were individual objects.

## The pattern exists to:

- Represent part-whole hierarchies of objects
- Allow clients to treat individual objects and compositions of objects uniformly
- Simplify client code by removing the need to distinguish between leaf nodes and branches

## Where And When To Use it?

- **Tree Structures** - When you need to represent a recursive tree structure (e.g., a file system with files and
  folders).
- **Uniform Treatment** - When you want client code to ignore the difference between compositions of objects and
  individual objects.
- **GUI Components** - Managing complex UI elements where a "Panel" can contain "Buttons" or other "Panels."
- **Organization Charts** - representing a company structure where a Manager leads a team, and that team consists of
  Employees or other Managers.

## Pros

- **Simplicity for Clients** - Client code interacts with all elements through a common interface, eliminating complex
  conditional logic (e.g., if (node is Folder) ... else ...).
- **Open/Closed Principle** - You can introduce new element types into the application without breaking the existing
  code.
- **Recursion Made Easy** - The pattern naturally uses recursion to traverse the complex tree structure.

## Cons

- **Over-Generalization** - It might be difficult to provide a common interface for classes that differ too much in
  functionality. You might end up with an interface where some methods don't make sense for leaf nodes (e.g., addChild()
  on a File).
- **Type Safety** - Since the interface is shared, you cannot rely on the type system to catch mismatched calls at
  compile time (e.g., trying to add a child to a Leaf).
- **Harder to Restrict** - It is difficult to restrict the components of a composite to only certain types of objects.

## Common Mistakes

- **Violating Interface Segregation** - Bloating the component interface with methods that only make sense for the
  container (Composite) and not the simple items (Leaves).

```TypeScript

// Bad: 'File' shouldn't have to implement 'add'
interface FileSystemComponent {
  add(component: FileSystemComponent): void; // Files can't add children!
  getSize(): number;
}
```

- **Assuming "Is-A" Relationships Incorrectly** - Forcing objects into a tree structure that doesn't logically fit, just
  to
  use the pattern.
- **Confusing with Decorator** - While both patterns rely on recursive composition, Decorator adds behavior, whereas
  Composite
  is about aggregation and structure.