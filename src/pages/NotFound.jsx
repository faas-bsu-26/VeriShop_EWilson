import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="return-section">
      <div className="return-content">
        <h1>Page not found.</h1>
        <Link className="link return-button" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
