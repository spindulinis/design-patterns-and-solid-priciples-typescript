# Command Pattern

> The Command design pattern is a behavioral design pattern that turns a request into a standalone object that contains
> all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a
> request's execution, and support undoable operations.

## The pattern exists to:

- **Decouple Sender and Receiver:** It separates the object that invokes the operation (the Invoker) from the object
  that
  knows how to perform it (the Receiver). The invoker just calls execute() and doesn't care who does the work.
- **Objectify Requests:** It turns a method call into an object. This means the request can be stored, passed around,
  serialized, or logged, just like any other variable.
- **Enable History and Undo/Redo:** Since operations are objects, you can keep a stack of executed commands. To "undo,"
  you
  simply pop the last command and call its undo() method.

## Where And When To Use it?

- **GUI Buttons and Menus:** When you have a toolkit (like a "Save" button) that needs to trigger an action, but the
  toolkit
  shouldn't know the specifics of how saving works in your particular app.
- **Job Queues & Scheduling:** When tasks need to be executed asynchronously, scheduled for later, or processed by a
  background worker thread.
- **Transactional Behavior:** When you need "all-or-nothing" execution (e.g., database transactions) where a sequence of
  commands is executed, and if one fails, the previous ones can be rolled back.
- **Macro Recording:** When you want to record a sequence of user actions to replay them later (a "macro").

## Pros

- **Single Responsibility Principle:** You decouple classes that invoke operations from classes that perform these
  operations.
- **Open/Closed Principle:** You can introduce new commands into the app without breaking existing client code.
- **Composition:** You can assemble simple commands into a complex one (Composite Command or Macro).
- **Undo/Redo Support:** It provides a natural architectural mechanism for implementing infinite undo/redo
  functionality.

## Cons

- **Code Complexity:** It introduces a lot of new classes. For every specific action in your application (Copy, Paste,
  Save,
  Delete), you need a concrete Command class.
- **Overkill for Simple logic:** If you just need to call a function, wrapping it in a command object is unnecessary
  boilerplate.

## Common Mistakes

- **Putting Logic in the Command:** A standard Command should usually just call the Receiver. A common mistake is
  implementing the business logic inside the execute() method rather than delegating it to the Receiver.
- **Ignoring the Receiver:** Sometimes developers skip the Receiver entirely and make the Command do everything (Smart
  Command). While valid in simple cases, this increases coupling and reduces reusability.
- Confusing with Strategy Pattern:
    - Command is about converting an action into an object to defer or log it (What needs to be done).
    - Strategy is about choosing an algorithm at runtime (How it should be done).