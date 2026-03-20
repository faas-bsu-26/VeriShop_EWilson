import React from "react";
import { Link } from "react-router-dom";

const ReturnHome = () => {
  return (
    <section className="return-section">
      <div className="return-content">
        <h1>Verifcation Request Submitted</h1>
        <Link className="link return-button" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ReturnHome;
