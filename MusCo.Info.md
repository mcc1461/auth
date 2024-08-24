# AUTH Project Overview

## Introduction

MusCo (Mustering Code) is a MERN (MongoDB, Express, React, Node.js) stack authentication system that showcases the integration of frontend and backend technologies to create a fully functional and secure authentication system. This project is designed to teach beginners how to build a MERN stack application, focusing on user registration, login, and session management.

## Key Features

    -**User Registration and Authentication:** Secure user registration and login using MongoDB and Express, with password hashing for security.
    -**Persistent User Sessions:** Leveraging localStorage in React to maintain user sessions across page reloads.
    -**Responsive UI:** A responsive and visually appealing user interface built using React and Bootstrap.
    -**RESTful API Design:** A clean and modular backend API using Express, following REST principles.

## Installation

### Client Setup

    1. **Initialize Vite:**
    `npm init vite`
    Vite is a frontend build tool that is extremely fast and provides a great development experience.
    2. **Install Required Packages:**
    `npm install bootstrap axios react-router-dom`
        -   **Bootstrap:** For responsive design and prebuilt UI components.
        -   **Axios:** For making HTTP requests from the frontend to the backend.
        -   **React Router DOM:** For managing navigation and routes in the React application.
    3. **Clean Up:**
        -   Delete the default `App.css` and `index.css` files as they are not needed.
    4. **Add Bootstrap to App:**
        -   In `App.jsx`, add:
        `import 'bootstrap/dist/css/bootstrap.min.css';`
        -   This ensures that Bootstrap styles are available throughout the application.

### Server Setup

    1.  **Initialize Node.js Project:**
    `npm init -y`
    This command creates a basic `package.json` file.

    2.  **Install Required Packages:**
    `npm install express mongoose cors nodemon`

    -   **Express:** For building the backend API.
    -   **Mongoose:** For connecting to and interacting with MongoDB.
    -   **CORS:** Middleware to handle Cross-Origin Resource Sharing, enabling the frontend to communicate with the backend.
    -   **Nodemon:** A development tool that automatically restarts the server when file changes are detected.

    3.  **Update `package.json`:**
    -   Add a start script in the `scripts` section:

        json

        Kodu kopyala

        `"start": "nodemon index.js"`

    -   This script allows you to start the server with `npm start`, using Nodemon to monitor file changes.

### Testing the Backend API

To ensure that the registration endpoint is working correctly, you can use the following `curl` command:

`curl -X POST http://localhost:8002/api/users/register -H "Content-Type: application/json" -d '{"username":"John Doe","email":"john@example.com","password":"password123"}'`

This command sends a POST request to the `/register` endpoint with a JSON payload containing the user's information.

### Important Points in the Project

    1. **Database Connection (`dbConnection.js`):**
        -   Establishes a connection to MongoDB using Mongoose. Proper error handling ensures the server doesn't crash on database connection failures.
    2. **User Model (`userModel.js`):**
    -   Defines the schema for storing user information. The schema includes validation rules for email format and password strength.
    3. **User Authentication Logic (`userController.js`):**
        -   Handles user registration, login, and session management. Passwords are hashed using `bcrypt` before being stored in the database.
    4. **Frontend State Management (`App.jsx`):**
        -   React state and `localStorage` are used to manage user sessions, ensuring that the user remains logged in even after a page refresh.
    5. **Responsive UI (`Navbar.jsx`, `Dashboard.jsx`):**
        -   The user interface is built using Bootstrap for responsiveness, ensuring a consistent experience across different screen sizes.

### Additional Notes

    -  The project is modular, with separate files for different functionalities, making it easy to maintain and extend.
    -  The entire codebase is available on [GitHub](https://github.com/yourusername/musco-auth).
