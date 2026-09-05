# Introduction to Component Lifecycle

A component's lifecycle begins when it is *mounted* (added to the DOM) and ends
when it is *unmounted* (removed from the DOM)

## Phases of Component Lifecycle

1. **Mounting** when an instance of a component is created and inserted into
the DOM

2. **Updating** when a state change results in its re-render

3. **Unmounting** when it is removed from the DOM

---

*NOTE*:

- **Side effects** are *unpredictable actions* performed with the outside world

- For ex. interaction with the browser's API, an external resource or service,
or native DOM manipulations
