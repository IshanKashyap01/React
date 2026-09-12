# Deleting Data from Firebase

```js
await deleteDoc(doc(db, "blogs", blog.id))
```

- `deleteDoc()` deletes the specified document

- If the specified document, does not exist, it resolves successfully and does
nothing
