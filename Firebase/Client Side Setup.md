# Client Side Setup

- Add the code below to the same file you pasted your initialization code in:

```js
import {getFirestore} from 'firebase/firestore'
// initialization code here...
const db = getFireStore(app)
export {db}
```

- `getFirestore()` establishes a connection to your firestore database and
returns a reference to it
