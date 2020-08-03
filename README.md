# CRUD Thy Users

## Infrastructure

### Frontend

- Created via [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)

### Backend

- Created using Express JS

## How to run

### Backend

- Run `npm run webpack` in a new terminal
- Run `npm start` in a new terminal

### Frontend

- Run `npm start` in a new terminal

### Gaps
- Pagination could be improved. Backend could return a number of total results and the frontend should build up the pagination using that count.
- Search pagination is broken
- There are no field validations on the user edit form
- The user data is not updated on the backend in the json or any database/cache

### Assumptions
- Few data fields are editable
- 

### Future enhancements

Apart from fixing the gaps and getting rid of any assumptions (after getting a clear understanding of the requirements) we can:

- Adding a authorisation flow to add a layer of security to the CRUD operations
- The frontend could save its state to prevent data loss in case of browser crash/accidental window closure etc
- Add caching on the frontend to prevent fetching the same data again and again from the backend, thereby limiting the load on backend servers
- Fetching the user data from a real database and then using the search queries on the database to fetch the relevant data
- We can also implement a better search functionality by using elasticsearch etc
- 
