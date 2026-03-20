import React, { useState } from "react";
import { Link } from "react-router-dom";

const Verify = () => {
  const [formData, setFormData] = useState({
    url: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="verify-page">
      <div className="verify-container">
        <section className="verify-form-section">
          <h1 className="page-title">Verify Your Site</h1>

          <form className="verify-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="url"
              placeholder="Website URL"
              value={formData.url}
              onChange={handleChange}
              className="verify-input"
            />

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="verify-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="verify-input"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="verify-input"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="verify-textarea"
            />

            <Link to="/return" className="verify-submit link">
              Submit
            </Link>
          </form>
        </section>

        <section className="verify-info-section">
          <h2 className="verify-title">How it works</h2>

          <p>
            VeriShop verifies online stores to create a more trustworthy
            shopping experience. When a website owner submits their store for
            verification, our team begins a detailed review process designed to
            ensure that the business is legitimate, transparent, and safe for
            customers. The goal of this process is to reduce the uncertainty
            that often comes with online shopping by only allowing reliable
            websites to appear on the platform.
          </p>

          <p>
            The verification process begins with an application submitted by the
            website owner. This application includes basic information about the
            business, such as the website URL, contact details, and information
            about the products being sold. Our team then performs an initial
            review of the website itself, checking factors such as site
            functionality, product listings, business transparency, and the
            presence of clear policies for shipping, returns, and customer
            support.
          </p>

          <p>
            After the initial review, the business owner participates in a short
            interview or follow-up communication with our team. This step allows
            us to confirm important details about the business, learn more about
            how it operates, and verify that the owner is directly responsible
            for the website being submitted. During this stage, we may also
            request additional information about the company, including proof of
            business registration, identity verification, or documentation that
            confirms the legitimacy of the operation.
          </p>

          <p>
            A background review is also conducted as part of the process. This
            includes researching the business’s online presence, reviewing any
            existing customer feedback, and checking for indicators that the
            website operates responsibly and ethically. The goal is not only to
            confirm that the business exists, but also to ensure that it
            demonstrates a consistent track record of reliability and good
            customer practices.
          </p>
          <p>
            Once a website successfully completes these steps, it becomes a
            verified seller on VeriShop. Products from that website can then
            appear on the platform, making it easier for shoppers to discover
            them while knowing the source has already been reviewed. Every
            product listing clearly identifies the website it originates from so
            users always know exactly where the item is being sold.
          </p>
          <p>
            To further support transparency, users are also able to view and
            leave reviews about the websites behind the products. These reviews
            help create a community-driven layer of accountability where
            businesses that provide good service can build a strong reputation
            over time. By combining manual verification with community feedback,
            VeriShop aims to create a shopping environment where trustworthy
            businesses are easier to find and shoppers can make informed
            purchasing decisions with greater confidence.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Verify;
