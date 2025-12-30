# PulseBoard – React State Batching Lab

A modern, interactive React dashboard that **visually demonstrates how React state updates, event handlers, and automatic batching work under the hood**.

This project is intentionally built to *prove* understanding of React internals — not just to look good.

---

## Why This Project Exists

Many React apps *use* state, but very few **demonstrate how React actually processes it**.

PulseBoard was built to answer questions like:

* Why doesn’t state update immediately after calling a setter?
* What does “batched updates” really mean in React 18?
* Why do functional state updates matter?
* How many times does a component really re-render?

Instead of explaining these ideas with text alone, **this app shows them in action**.

---

## Core Concepts Demonstrated

### 1. Automatic State Batching (React 18)

The app triggers multiple `setState` calls inside:

* event handlers
* async callbacks (`setTimeout`, Promises)

You can clearly see:

* multiple state updates
* **only one render** occurring

This proves React’s automatic batching behavior introduced in React 18.

---

### 2. Event Handler Execution Model

PulseBoard shows that:

* event handlers run synchronously
* state updates are **queued**, not applied immediately
* renders happen *after* the handler finishes

The state timeline makes this visible step-by-step.

---

### 3. Direct vs Functional State Updates

Side-by-side controls demonstrate:

**Direct updates** (stale state issue)

```js
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

Functional updates (correct behavior)

```js
setCount(c => c + 1);
setCount(c => c + 1);
setCount(c => c + 1);
```

The UI clearly shows the difference in final state and reliability.

---

### 4. Render Logic vs Event Logic

The project is structured to respect React’s rules:

* render logic stays pure
* event handlers handle interactions
* side effects live in effects

A live **render counter** makes re-renders obvious and measurable.

---

Features

* Interactive control panel for triggering state scenarios
* Real-time state update timeline
* Render count tracker
* Clear visual separation of handlers, state updates, and renders
* Clean, modern UI with subtle animations

---

What This Project Proves

* Deep understanding of React state behavior
* Clear mental model of batching and renders
* Ability to translate theory into observable UI behavior
* Clean component architecture and readable code

