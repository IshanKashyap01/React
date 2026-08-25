# Using React

## Setup

- As is with most JS libraries, you can either install them on your system or
use their CDN

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- The above versions are only meant for development and not suitable for
production

- Following are the CDNs to use for production:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

## Example Usage

```js
const image = React.createElement
(
    "img",
    {
        className: "image",
        src: "https://files.codingninjas.in/coding-ninjas-24647.png"
    }
)
ReactDOM.createRoot(document.getElementById("root")).render(image)
```
