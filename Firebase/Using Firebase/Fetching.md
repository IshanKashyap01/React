# Fetching Data from Firebase

## Fetch Everything

```js
useEffect(() => {
    getAllBlogs()
}, [])

async function getAllBlogs()
{
    const snapshot = await getDocs(collection(db, "blogs"))
    setBlogs(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })))
}
```

- `getDocs()` executes a query and returns the result as a `QuerySnapshot`

- The above code will fetch all documents from the `blogs` collection

## Fetch Realtime Updates

```js
useEffect(() => {
    const unsub = onSnapshot(collection(db, "blogs"), snapshot => {
        setBlogs(snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })))
    })
    return () => unsub()
}, [])
```

- The above code
