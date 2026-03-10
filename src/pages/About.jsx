import React from "react";

const About = () => {
  return (
    <main className="about-page">
      <div className="about-container-main">
        <header className="about-header">
          <h1 className="page-title">What we do.</h1>
        </header>

        <section className="about-content">
          <p>
            VeriShop is an online shopping platform designed to make online
            purchasing more trustworthy and transparent. Instead of listing
            products from anyone on the internet, we only feature products from
            verified website owners who have gone through an interview process
            and background checks before being accepted onto the platform.
          </p>

          <p>
            Our goal is to bring together reliable online stores in one place,
            making it easier for shoppers to discover products from sources they
            can trust. Each product listing clearly shows the website it comes
            from so users always know exactly where the item originates.
          </p>

          <p>
            To further increase transparency, users can read and leave reviews
            about the websites behind the products. This allows shoppers to
            learn from other customers’ experiences while helping trustworthy
            businesses stand out in the marketplace.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
