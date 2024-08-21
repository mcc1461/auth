import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username, // Use 'username' to match the backend schema
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8002/api/users/register",
        newUser
      );
      console.log(response.data);
      alert("User registered successfully!");

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("There was an error registering the user!", error);
      alert("Error registering user. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={onSubmit}>
            <h1 className="h3 mb-3 fw-bold text-primary">Register</h1>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-md btn-primary btn-block mt-2"
            >
              Register!
            </button>
            <p className="forgot-password text-right">
              Already registered then <Link to="/login">login now!</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
