# Inline Styles in React

```jsx
<img style = {{color: "white", padding: "2rem"}}>
<p style = {styles.p}>
```

- React takes inline styles as a map of property-values

- Therefore, you can either define the styles in the tag itself, or create an
object and pass it to the attribute

- The names of property values are defined in *camel-case* instead of the
*kebab-case* style of CSS

- Inline styles get converted into *inline CSS* after the build process
