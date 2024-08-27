import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

console.log("API_URL:", API_URL);
console.log("Environment Variables:", import.meta.env);

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };

    try {
      // Ensure the URL is correctly formed without double slashes
      const response = await axios.post(`${API_URL}/api/users/login`, user, {
        withCredentials: true, // Ensures cookies and authentication headers are sent
      });

      const { token, user: loggedInUser } = response.data;

      if (token) {
        localStorage.setItem("token", token); // Store the token in localStorage
        localStorage.setItem("user", JSON.stringify(loggedInUser)); // Store the user object in localStorage
        handleLogin();
        setEmail("");
        setPassword("");
        setError("");
        navigate("/dashboard");
      } else {
        setError("Login failed. No token provided.");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error(
          "Response error:",
          error.response.status,
          error.response.data
        );
        setError(
          error.response.data.message || "Error logging in. Please try again."
        );
      } else if (error.request) {
        // Request was made but no response was received
        console.error("Request error:", error.request);
        setError(
          "No response from server. Please check your network connection."
        );
      } else {
        // Something else caused the error
        console.error("Error:", error.message);
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form
            noValidate
            onSubmit={onSubmit}
            className="p-4 border rounded bg-light"
          >
            <h1 className="h3 mb-3 fw-bold text-primary text-center">Login</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
              />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Login
            </button>
            <p className="forgot-password text-center mt-3">
              Not registered before? <Link to="/register">Register now!</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
