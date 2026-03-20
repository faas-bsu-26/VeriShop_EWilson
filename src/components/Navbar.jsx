import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarMenu from "./Menu";
import CloseIcon from "./Close";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const location = useLocation();

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Verify", path: "/verify" },
  ];

  useEffect(() => {
    if (isToggled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isToggled]);

  return (
    <header className="main-header">
      <div className="header-container">
        <Link className="link" to="/">
          <h1 className="logo">VeriShop</h1>
        </Link>
        <nav className="mobile">
          <button
            onClick={() => setIsToggled(true)}
            className="navbar-menu-btn"
            aria-label="Open Menu"
          >
            <NavbarMenu />
          </button>
          <div
            className={`nav-overlay ${isToggled ? "active" : ""}`}
            onClick={() => setIsToggled(false)}
          ></div>
          <aside className={`nav-aside ${isToggled ? "open" : ""}`}>
            <div className="aside-top">
              <Link className="link" to="/">
                <h1 className="logo">VeriShop</h1>
              </Link>
              <button
                onClick={() => setIsToggled(false)}
                className="close-btn"
                aria-label="Close Menu"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="navbar-links-mobile">
              {links.map((link) => (
                <Link
                  key={link.path}
                  className={`link ${location.pathname === link.path ? "active" : ""}`}
                  to={link.path}
                  onClick={() => setIsToggled(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </aside>
        </nav>
        <nav className="laptop">
          <div className="laptop-links">
            {links.map((link) => (
              <Link
                key={link.path}
                className={`link ${location.pathname === link.path ? "active" : ""}`}
                to={link.path}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
