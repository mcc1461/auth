import React from "react";
import MusCo from "../assets/MusCo.png";

const Dashboard = ({ welcomeMessage }) => {
  return (
    <div className="container mt-3 bg-info py-1 mb-3 rounded-4 ">
      <div className="mt-3 text-center">
        <img
          src={MusCo}
          alt="MusCo Logo"
          className="img-fluid rounded-4"
          style={{ maxWidth: "80%", height: "auto", marginTop: "10%" }}
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
