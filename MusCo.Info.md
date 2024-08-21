# AUTH

## Installation

### Client

`npm init vite`
`npm install bootstrap axios react-router-dom`
`Delete -- App.css | index.css`
`App.jsx >> import 'bootstrap/dist/css/bootstrap.min.css'`

### Server

`npm init -y`
`npm install express mongoose cors nodemon`
`package.json >> scripts >> start": "nodemon index.js"`

Checking the endpoint:
`curl -X POST http://localhost:8002/api/users/register -H "Content-Type: application/json" -d '{"username":"John Doe","email":"john@example.com","password":"password123"}'`
