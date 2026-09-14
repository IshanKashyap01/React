# Updating Data in Firebase

## `setDoc(reference, data)`

```js
const reference = doc(db, 'blogs', blog.id)
setDoc(reference, blog)
```

- It writes to the document referred by the `reference`, and creates it if it
doesn't exist

- If the document exists, then provide its id as `pathSegments` to get a
reference to it

- `doc()` works the same as `collection()` but returns a reference to a
document instead of a collection

- However, it *overwrites the whole nested object* instead of making only the
necessary changes

## `updateDoc(reference, data)`

```js
await updateDoc(doc(db, "expenses", expense.id), expense)
```

- `updateDoc()` updates the specified document if it exists, otherwise fails

- It only need the fields to be updated, instead of the whole object
