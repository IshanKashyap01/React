# Adding Data to Firebase

```js
await addDoc(collection(db, 'blogs'), blog)
```

- `addDoc()` adds a new document to the given collection and automatically
assigns it an ID

- It takes the following two parameters:

    1. `reference` reference to the collection to add the document to

    2. `data` object containing data for the new document

## `collection(firestore, path, pathSegments)`

- `collection` gets a reference to the collection at the specified absolute
path

- It accepts the following three parameters:

    1. `firestore` reference to the root Firestore database instance

    2. `path` a slash separated path to a collection

    3. `pathSegments` (optional) additional path segments to apply relative to
    the first argument
