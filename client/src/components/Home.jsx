import React from "react";

const Home = ({ isLoggedIn }) => {
  return (
    <div className="container mt-5 bg-info rounded-4">
      <div className="text-center">
        <h1
          className="m-5 pt-5 fw-bolder text-dark text-center"
          style={{ fontSize: "4rem" }}
        >
          HOME PAGE
        </h1>{" "}
        <h1
          className="h3 mb-3 fw-bold text-primary text-center"
          style={{ fontSize: "3rem" }}
        >
          MusCo
        </h1>
        <br />
        <br />
        <h2>Welcome to MusCo - Mustering Code</h2>
        <h3>
          with <span className="fw-bold text-primary">Mus</span>tafa{" "}
          <span className="fw-bold text-primary">Co</span>skuncelebi
        </h3>
        {!isLoggedIn ? (
          <p className="lead mt-5 pb-4 fw-bold h3 fst-italic">
            Please use the navigation links to{" "}
            <span className="text-success fw-bold">login</span>
            <span> </span>
            <span>or</span>
            <span> </span>
            <span className="text-success fw-bold">register</span>.
          </p>
        ) : (
          <p className="lead mt-5 pb-4 fw-bold h3 fst-italic">
            You are already logged in. Navigate to the dashboard.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
