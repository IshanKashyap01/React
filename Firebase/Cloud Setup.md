# Firebase Setup

- First login to your google account and go to <https://firebase.google.com>

- Go to console, create a new project by giving it a suitable name

- Add an app by choosing `web` and register it with a nickname

```bash
npm install firebase
```

- Add the firebase dependency to your project and the initialization code shown

- You can access this information anytime under `Project Overview`

- Go to Cloud Firestore and create a database, set the database location and
start in test mode

| MySQL Concept | Firestore Equivalent | Example (in a Resume Builder App)  |
|---------------|----------------------|------------------------------------|
| Database      | Firestore Instance   | `(default)`                        |
| Table         | Collection           | `users`, `resumes`                 |
| Row           | Document             | Individual user profile or resume  |
| Column        | Field                | `title`, `skills`, `projects`      |

- Now you can create a collection, add a document to it, and add
sub-collections
