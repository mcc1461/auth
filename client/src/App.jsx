import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");

  // Check local storage to maintain the login state
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus) {
      setIsLoggedIn(true);
      setWelcomeMessage("Hello! You are still logged in.");
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setWelcomeMessage("Hello! You have successfully logged in.");
    localStorage.setItem("isLoggedIn", "true"); // Persist the login state
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setWelcomeMessage("");
    localStorage.removeItem("isLoggedIn"); // Remove the login state
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard welcomeMessage={welcomeMessage} />
            ) : (
              <Home isLoggedIn={isLoggedIn} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
