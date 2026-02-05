# State Pattern

> State Design Pattern is a behavioral design pattern that allows an object to change its behavior when its internal
> state changes.

## The pattern exists to:

- **Eliminate massive conditional statements:** It removes complex if/else or switch statements that control behavior
  based on the object's current state fields.
- **Encapsulate state-specific logic:** It moves behavior related to a specific state into its own class, keeping the
  main object (Context) clean.

## Where And When To Use it?

- **When an object behaves differently depending on its current state:** For example, a "Document" behaves differently
  when it is in Draft, Moderation, or Published states.
- **When you have a Finite State Machine (FSM):** Use it for concepts that have clear phases and transitions, like an
  Order (Pending -> Paid -> Shipped -> Delivered) or a Media Player (Playing -> Paused -> Locked).
- **When your code is polluted with state conditionals:** If you find duplicate if (state === 'ACTIVE') checks scattered
  across many methods in a single class.

## Pros

- **Single Responsibility Principle:** Code related to a specific state is organized into a separate class.
- **Open/Closed Principle:** You can introduce new states without changing existing state classes or the context.
- **Simplification:** It removes the need for bulky state machine conditionals in the main object.
- **Explicit Transitions:** State transitions become explicit method calls rather than silent variable updates (e.g.,
  this.state = new PaidState()).

## Cons

- **Class Explosion:** It can lead to a large number of small classes, which might be overkill if the state machine only
  has a few simple states.
- **Overhead:** If the state logic is simple (e.g., a boolean toggle), applying the pattern introduces unnecessary
  complexity.
- **Coupling:** Depending on implementation, State classes might need to know about each other to handle transitions,
  creating tight coupling between concrete states.

## Common Mistakes

- **Applying it to simple problems:** Using the pattern for a simple 2-state system (e.g., just "On" and "Off") is
  usually over-engineering.
- **Confusing with Strategy Pattern:** While they look identical (Composition), the intent differs. In Strategy, the
  client chooses the "algorithm" and it rarely changes. In State, the "state" changes frequently and often autonomously
  during the lifecycle of the object.
- **Undefined ownership of transitions:** Failing to decide who is responsible for switching the state (the Context or
  the concrete State classes), leading to spaghetti logic where both try to control the flow.