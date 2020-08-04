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
- Pagination could be improved. Backend could return a number of total results and the frontend should build up the pagination using that count. Search pagination is broken
- There are no field validations on the user edit form on the frontend nor on backend
- There could be a real database used
- Login, logout have not been implemented.
- Since there are non unique usernames the update queries may or may not update the object we're trying to update
- There is no confirmation on user deletion


### Assumptions
- Few data fields are editable
- Instead of one GET query for each user we are able to update/delete each user in the users list.
- There was no login or logout needed
- All transactions are performed using the username field (even though the data provided does not have unique usernames)

### Future enhancements

Apart from fixing the gaps and getting rid of any assumptions (after getting a clear understanding of the requirements) we can:

- Adding a authorisation flow to add a layer of security to the CRUD operations
- The frontend could save its state to prevent data loss in case of browser crash/accidental window closure etc
- Add caching on the frontend to prevent fetching the same data again and again from the backend, thereby limiting the load on backend servers
- Fetching the user data from a real database and then using the search queries on the database to fetch the relevant data
- We can also implement a better search functionality by using elasticsearch etc
- Can implement login functionality by using libraries such as bcrypt to compare and store password hashes