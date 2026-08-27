# Synthetic Events

- React's event system gives your events a *synthetic event* instead of the
browser's native event object

- It is a cross-browser wrapper that provides a consistent event API across
different browsers

- When a native event is triggered, react finds which React event handlers
should run and gives them the corresponding *synthetic event*

- React stores its handlers as part of its internal representation and doesn't
insert event handlers to the HTML itself
