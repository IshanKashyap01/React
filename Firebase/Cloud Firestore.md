# Cloud Firestore

- When your code makes a request, Firebase SDK establishes a persistent
connection between the client and Firestore

- The client will contain a *listener* in the form of a callback function

- Whereas on the cloud, a process observes changes to the database and notifies
relevant listeners

- When a change is made in the client, it is first stored in the local cache

- This will activate the Firebase SDK to send the new data to the cloud

- Firebase will make changes, if applicable, then notify all users
