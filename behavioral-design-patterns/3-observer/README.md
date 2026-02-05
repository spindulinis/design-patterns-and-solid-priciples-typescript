# Observer Pattern

> The Observer design pattern is a behavioral design pattern that allows you to define or create a subscription
> mechanism to send notifications to multiple objects about any new events that happen to the object they're observing.
> The object that is being watched is often called the subject. The objects that are watching the state changes are
> called
> observers or listeners.

## The pattern exists to:

- **Establish a one-to-many dependency:** It ensures that when one object changes state, an unlimited number of
  dependent objects are notified and updated automatically.
- **Decouple the Subject from the Observers:** The subject (publisher) doesn't need to know the concrete class of the
  observers, only that they implement a specific update interface.

## Where And When To Use it?

- **When a change to one object requires changing others:** And you don't know beforehand how many objects need to be
  changed or who they are (e.g., a "Save" button updates the database and the UI and the log).
- **When one object needs to observe another for a limited time:** You need the ability to subscribe and unsubscribe
  dynamically at runtime.
- **GUI Event Handling:** This is the foundation of almost all UI frameworks (listeners, event handlers, bindings).

## Pros

- **Open/Closed Principle:** You can introduce new subscriber classes without having to change the publisher's code (and
  vice versa if there’s a publisher interface).
- **Runtime Relations:** You can establish relations between objects at runtime rather than at compile-time.
- **Loose Coupling:** The subject knows nothing about the observers other than the fact that they implement a standard
  interface.

## Cons

- **Memory Leaks (The "Lapsed Listener" Problem):** If observers are not explicitly deregistered, the subject holds a
  reference to them, preventing them from being garbage collected.
- **Random Notification Order:** You usually cannot rely on the order in which observers are notified.
- **Performance:** If a subject has a massive list of observers, notifying them all can take a significant amount of
  time, potentially blocking the main thread.

## Common Mistakes

- **Forgetting to Unsubscribe:** Leaving "zombie" observers attached to a long-lived subject, which causes memory leaks
  and unexpected behavior (e.g., a closed UI window still reacting to data updates).
- **Cascading Updates:** An observer modifying the state of the subject inside its update method, triggering another
  round of notifications, potentially leading to an infinite loop or stack overflow.
- **Passing Too Much Data:** Sending the entire state of the subject to the observer when only a tiny fraction changed (
  or conversely, sending nothing and forcing the observer to query the subject back, creating chatter).