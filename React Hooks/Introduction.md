# Introduction to Hooks

## Limitations of Class Based Components

- Lifting state up the component tree is difficult when using class components

- Lifecycle methods separate the creation and destruction of side-effects such
as subscriptions, intervals, etc.

- The `this` keyword in JS works differently than other languages which created
confusion

- Meanwhile, functional components were limited to being stateless components
for small, repetitive HTML/JSX

## The Solution

- *Hooks* are functions that let you *hook React states and lifecycle features*
to functional components

- Thus replacing and turning class components into a legacy feature in React

- They cannot be used with class components as they already have those features
