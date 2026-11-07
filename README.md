# API Checkpoint — User List

React application built with **Create React App** that consumes the
[JSONPlaceholder](https://jsonplaceholder.typicode.com/users) API to display a
list of users.

## Checkpoint requirements

- [x] Project created with `create-react-app`
- [x] `src/UserList.js` file created in the `src` folder
- [x] `axios` installed and used to get the data
- [x] Data fetched from `https://jsonplaceholder.typicode.com/users`
- [x] `useEffect` hook used to call the API
- [x] `useState` hook used to store the data in the `listOfUser` state
- [x] `listOfUser` mapped to display the list of users on the screen
- [x] Application styled

## How it works

1. `UserList` declares the `listOfUser` state with `useState([])`.
2. `useEffect` runs once after the first render and calls the API with
   `axios.get`.
3. The response is stored with `setListOfUser(response.data)`.
4. `listOfUser.map(...)` renders one card per user (name, email, phone,
   website, company and city).

## Run the project

```bash
npm install
npm start
```

The application is available at [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

## Project structure

```
public/
  index.html
src/
  App.js
  App.css
  index.js
  index.css
  UserList.js
  UserList.css
package.json
```
