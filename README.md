# MusCo - Auth

---

## Overview

**MusCo - Auth** is a MERN (MongoDB, Express, React, Node.js) stack authentication system that provides a secure and responsive user authentication experience. This project serves as a practical example of how to build a full-stack web application with a focus on user authentication.

## Features

- User Registration and Login
- Password Hashing with bcrypt
- Persistent User Sessions using localStorage
- Responsive UI with Bootstrap
- RESTful API Design

## Technologies Used

- **Frontend:** React, Bootstrap, Axios, React Router DOM
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB
- **Tools:** Nodemon, CORS, Vite

## Installation

### Client

1. npm init vite
2. npm install bootstrap axios react-router-dom
3. import 'bootstrap/dist/css/bootstrap.min.css';

### Server

1. npm init -y
2. npm install express mongoose cors nodemon
3. "start": "nodemon index.js"

### Running the Project

1. npm start
2. npm run dev

### Testing the API

Use the following curl command to test the registration endpoint:

`curl -X POST http://localhost:8002/api/users/register -H "Content-Type: application/json" -d '{"username":"John Doe","email":"john@example.com","password":"password123"}'
`

### Project Structure

    *   **Backend:**

    *   dbConnection.js: Manages the connection to MongoDB.

    *   userModel.js: Defines the schema and validation for user data.

    *   userController.js: Handles the business logic for user registration and login.

    *   userRoutes.js: Defines the API routes related to user operations.

    *   **Frontend:**

    *   App.jsx: Main application component that manages routes and session state.

    *   Navbar.jsx: Responsive navigation bar that changes based on the user's authentication status.

    *   Login.jsx: Form for user login, including error handling.

    *   Register.jsx: Form for user registration, including client-side validation.

    *   Dashboard.jsx: Protected dashboard page, accessible only to logged-in users.

    *   Home.jsx: Landing page with links to login and registration.

### References

For more detailed information on the technologies used in this project, check out the following resources:

    1.  [MongoDB Documentation](https://docs.mongodb.com/)
    2.  [Express.js Documentation](https://expressjs.com/)
    3.  React.js Documentation
    4.  Node.js Documentation
    5.  Bootstrap Documentation
    6.  Axios Documentation

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Author

Developed by MusCo (Mustafa Coskuncelebi).
The complete codebase is available on [GitHub](https://github.com/mcc1461/auth).
