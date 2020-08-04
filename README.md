# CRUD Thy Users

## Infrastructure

### Frontend

- Created via [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)

### Backend

- Created using Express JS

## How to run

### Backend

- Run `npm run webpack` in a new terminal (only if you want hot module replacement)
- Run `npm start` in a new terminal
- Run `npm t` to run tests

### Frontend

- Run `npm start` in a new terminal
- Run `npm t` to run tests


### Gaps
- Pagination could be improved. Backend could return a number of total results and the frontend should build up the pagination using that count. Pagination on search results is broken
- There are no field validations on the user edit form on the frontend nor on the backend
- Could have used a real database
- Login, logout have not been implemented.
- Since there are non unique usernames the update queries may or may not update the object we're trying to action upon
- There is no confirmation on user deletion
- A lot of test cases are missing


### Assumptions
- Only few data fields are editable
- Instead of one GET query for each user we are able to update/delete each user in the users list.
- There was no global login or logout 
- All transactions are performed using the username field (even though the data provided does not have unique usernames)
- Only a pre-MVP version was to be created. Enough for a POC.

### Future enhancements

Apart from fixing the gaps and getting rid of any assumptions (after getting a clear understanding of the requirements) we can:

- Adding an authorisation flow to add a layer of security to the CRUD operations
- The frontend could save its state to prevent data loss in case of browser crash/accidental window closure etc. State management would be useful.
- Adding caching on the frontend to prevent fetching the same data again and again from the backend, thereby limiting the load on backend servers. 
- Can use libraries like graphql to prevent creating multiple different endpoints on the backend and rather let frontend decide the api and data structure.
- Fetching the user data from a real database and then using the search queries on the database to fetch the relevant data
- We can also implement a better search functionality by using elasticsearch etc
- Can implement login functionality by using libraries such as bcrypt to compare and store password hashes