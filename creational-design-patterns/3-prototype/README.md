# Prototype Pattern

> The prototype pattern is a creational design pattern that allows cloning objects, even complex ones, without coupling
> to their specific classes. All prototype classes have a common interface that makes it possible to copy objects even
> if
> their concrete classes are unknown. Prototype objects can produce full copies since objects of the same class can
> access
> each other's private fields.

The Prototype Pattern allows you to create new objects by cloning existing ones instead of creating them from scratch.

## Why does this pattern exist?

The Prototype pattern exists to:

- Avoid expensive object creation
- Simplify creation of complex objects
- Create new instances without knowing their concrete class

Instead of calling `new`, objects are **copied**.

## Where To Use it?

- **Graphics Editors** - Clone identical copies of complex objects
- **Game Development** - Spawn similar units or entities efficiently
- **Distributed Systems and Databases** - Spawn similar units or entities efficiently
- **Data Processing Pipelines** - Use template objects for operations
- **UI Development** - Clone similar elements across different screens

## When To Use it?

**Complex Object Creation:** If you have a system where object creation is complex (due to complex initialization, large
numbers of attributes, or other factors) and you find that many similar objects need to be created

**High Cost of Object Creation:** If you have a situation where creating each object from scratch is expensive in terms
of memory or CPU (for example, if creating an object involves a database query)

**Similar Object Instances:** If you need multiple objects that are similar ( but not identical) to an existing instance

**Dynamic Typing or Run-time Configuration:** If the exact type or state of objects your system needs can only be
determined at runtime

**Preserving Historical States:** If you are creating an application where you need to save the state of an object and
be able to go back to it later ( for example, for an undo feature in a text editor or for a save/load game feature)

**Large Object Graphs:** If your application works with large object graphs ( for example, complex data structures), and
if a user's action might result in a small change to the graph

## How is it implemented here?

`clone()` creates a new object

The cloned object starts with the same state

Modifying the clone does not affect the original

## Pros

- Avoids complex constructors
- Faster object creation
- Supports runtime object duplication
- Decouples creation from concrete classes

_Prototype is ideal when object creation is expensive
and duplication is frequent._

## Cons

- Shallow vs Deep Copying
- Resource-intensive operations
- Complexity with custom clone methods - situations where the cloning operation might not be as straightforward as
  duplicating all properties of an object.

## Common Mistakes

1. Shallow copy when deep copy is needed

   ``` 
   let original = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York",
        },
    };
   
   let shallowCopy = { ...original };
   shallowCopy.address.city = "Los Angeles";
   console.log(original.address.city);    // Outputs 'Los Angeles'❌
   ```

    ```
    let deepCopy = JSON.parse(JSON.stringify(original));
    deepCopy.address.city = "San Francisco";
    console.log(original.address.city);   // Outputs 'Los Angeles' ✅ The original object remains unchanged
    ```
   or
    ```
   let deepCopy = structuredClone(original);

    deepCopy.address.city = "Los Angeles";
    console.log(original.address.city);     // Outputs 'New York'
    console.log(deepCopy.address.city);     // Outputs 'Los Angeles'
    ```

2. Overusing Prototype for simple objects

   ```// ❌ unnecessary complexity```


3. Forgetting to copy all fields

    ``` 
   clone() {
    return new Product(this.title, this.price); // ❌ missing fields
   }```