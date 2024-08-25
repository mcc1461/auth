import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };

    try {
      await axios.post("http://127.0.0.1:8002/api/users/login", user, {
        withCredentials: true, // Ensures cookies and authentication headers are sent
      });
      handleLogin();
      setEmail("");
      setPassword("");
      setError("");
      navigate("/dashboard");
    } catch (error) {
      console.error("There was an error logging in!", error);
      setError(
        error.response?.data?.message || "Error logging in. Please try again."
      );
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
