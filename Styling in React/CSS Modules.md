# CSS Modules

- It is a feature provided by build tools that allow locally scoped CSS

- To create a CSS module, simply name the file as `filename.module.css` and
import it in your component

- They implicitly export an object using default exports

```jsx
import styles from 'styles.modules.css'

export default function Parent()
{
    return <Child className = {styles.child}/>
}
```

- Internally, the build tool adds a unique suffix to your CSS selectors to
prevent clashes
