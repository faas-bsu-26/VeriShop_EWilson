import { Link } from "react-router-dom";

const GorillaCouch = () => {
  return (
    <div className="product-detail-page">
      <main className="detail-container">
        <div className="content-wrapper-grid">
          <div className="product-visual">
            <div className="image-card-wrapper">
              <img
                src="https://lvfurniturecollection.com/cdn/shop/files/Remove_background_project-57_1646x.png?v=1765156333"
                alt="Gorilla Couch"
                className="main-product-img"
              />
            </div>
          </div>
          <div className="product-text-details">
            <h2 className="detail-title">Gorilla Couch</h2>
            <p className="detail-price">$300.00</p>
            <p className="detail-copy">
              This is a gorilla couch. It is a couch that looks like a gorilla.
            </p>
            <a
              href="https://lvfurniturecollection.com"
              target="_blank"
              rel="noreferrer"
              className="cta-visit-btn link"
            >
              Visit: lvfurniturecollection.com
            </a>
          </div>
          <aside className="owner-profile-card">
            <h3 className="sidebar-label">MEET</h3>
            <div className="owner-avatar-container">
              <img
                src="https://pbs.twimg.com/media/DYjW87OV4AAimPf.jpg"
                alt="John Doe Avatar"
              />
            </div>
            <div className="owner-info-text">
              <p className="owner-full-name">John Doe</p>
              <p>Phone: (765) 123-4567</p>
              <p>Email: gorillachair@gmail.com</p>
              <p>Experience: 23 years</p>
            </div>
            <h2 className="status-badge">VERIFIED</h2>
          </aside>
          <Link to="/furniture/c1/reviews" className="link verification-card trust-score-section">
            <h3 className="card-header">TRUST SCORE</h3>
            <div className="score-circle-display">
              <span>99</span>
            </div>
            <button className="action-footer-btn">See Reviews</button>
          </Link>
          <div className="verification-card site-details-section">
            <h3 className="card-header">SITE DETAILS</h3>
            <div className="details-content-body">
              <p>
                <strong>Created:</strong> 03/11/2012
              </p>
              <p>
                <strong>Payment Method:</strong> Stripe
              </p>
              <p>
                <strong>Policies:</strong>
              </p>
              <p className="policy-block">
                Returns can be made only after 30 days of purchase. Returns can
                not be damaged.
              </p>
              <p>
                <strong>Is Encrypted?</strong> True
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GorillaCouch;
