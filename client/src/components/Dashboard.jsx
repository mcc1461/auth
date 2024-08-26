import React, { useEffect, useState } from "react";
import axios from "axios";
import MusCo from "../assets/MusCo.png";

const Dashboard = ({ welcomeMessage }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user")); // Retrieve the user info

    if (!token || !storedUser) {
      setError("No token found, please log in.");
      return;
    }

    setUser(storedUser); // Set the user from localStorage

    // Optionally, you can re-validate the token by making an API request to verify the user
    axios
      .get("http://127.0.0.1:8002/api/users/me", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request header
        },
        withCredentials: true,
      })
      .then((response) => {
        setUser(response.data); // Update the user state with the verified user data
      })
      .catch((error) => {
        setError("There was an error verifying the user data.");
        console.error("Error verifying user data:", error);
      });
  }, []);

  return (
    <div className="container mt-3 bg-info py-1 mb-3 rounded-4">
      <div className="mt-3 text-center">
        <img
          src={MusCo}
          alt="MusCo Logo"
          className="img-fluid rounded-4"
          style={{ maxWidth: "50%", height: "auto", marginTop: "10%" }}
        />
      </div>
      <h1
        className="m-5 pt-5 fw-bolder text-dark text-center"
        style={{ fontSize: "4rem" }} // Increased font size
      >
        DASHBOARD
      </h1>
      <h1
        className="h3 mb-3 fw-bold text-primary text-center"
        style={{ fontSize: "3rem" }} // Increased font size
      >
        MusCo
      </h1>
      <br />
      <br />
      <h2 className="text-center">Welcome!</h2>
      <br />
      <br />
      {welcomeMessage && (
        <div
          className="alert alert-success text-center fw-bold h3"
          role="alert"
        >
          {welcomeMessage}
        </div>
      )}
      {error && (
        <div className="alert alert-danger text-center fw-bold h3" role="alert">
          {error}
        </div>
      )}
      {user && (
        <div className="text-center">
          <p className="h3">Hello, {user.username}!</p>
          <p className="h4">Email: {user.email}</p>
        </div>
      )}
      <p
        className="bg-success text-center mb-5 p-3 text-light fw-bold h3 rounded-1"
        style={{ fontSize: "1.25rem", marginBottom: "2rem" }}
      >
        This is your dashboard. Navigate using the links above.
      </p>
    </div>
  );
};

export default Dashboard;
