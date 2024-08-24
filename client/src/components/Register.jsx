import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // New state for success message

  const onSubmit = async (e) => {
    e.preventDefault();

    const newUser = { username, email, password };

    if (!username || !email || !password) {
      setError("Please fill in all fields");
      setSuccess(""); // Clear success message on error
      return;
    }
    if (username.length < 3 || username.length > 20) {
      setError("Username must be between 3 and 20 characters long");
      setSuccess(""); // Clear success message on error
      return;
    }
    if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      setError("Please enter a valid email address.");
      setSuccess(""); // Clear success message on error
      return;
    }
    if (
      password.length < 6 ||
      password.length > 20 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*]/.test(password)
    ) {
      setError(
        `Password must be at least 6 characters long and must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*).`
      );
      setSuccess(""); // Clear success message on error
      return;
    }

    try {
      setError(""); // Clear any previous errors
      await axios.post("http://127.0.0.1:8002/api/users/register", newUser);

      setSuccess(`"${username}" registered successfully!`); // Set success message
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Error registering user. Please try again."
      );
      setSuccess(""); // Clear success message on error
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
            <h1 className="h3 mb-3 fw-bold text-primary text-center">
              Register
            </h1>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && (
              <div className="alert alert-success">{success}</div>
            )}{" "}
            {/* Success message */}
            <div className="form-group mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setName(e.target.value)}
                id="username"
              />
            </div>
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
              Register!
            </button>
            <p className="forgot-password text-center mt-3">
              Already registered? <Link to="/login">Login now!</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
