# Setting Up a Project

- With CRA deprecated, *Vite* is now the de facto build tool for client-side
React applications

```bash
npm create vite@latest my-v19-app --template React
```

- Run the above command to setup a new project with its own Vite

- If you don't pick a template, it will ask you for one from a list

- Locally installing vite makes the build process more portable

- After the project is created, run the following command:

```bash
npm install
```

- Vite has *hot module replacement* (HMR) that loads only the changed modules
when refreshing your browser

- This makes the updates as you develop much faster
