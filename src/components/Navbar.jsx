import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png"; // 👈 mee logo file path correct ga petti

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateView = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1px 2px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    zIndex: 100,
    fontFamily: "'Roboto', sans-serif",
  };

  const logoStyle = {
    height: "100px", // 👈 small logo height
    width: "auto",
    cursor: "pointer",
  };

  const ulStyle = {
    listStyle: "none",
    display: isMobile ? (menuOpen ? "block" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",
    margin: 0,
    padding: isMobile ? "10px 20px" : "0 50px",
    backgroundColor: isMobile ? "rgba(0, 0, 0, 0.9)" : "transparent",
    position: isMobile ? "absolute" : "static",
    top: isMobile ? "60px" : "auto",
    left: isMobile ? "0" : "auto",
    width: isMobile ? "100%" : "auto",
    justifyContent: isMobile ? "flex-start" : "flex-end",
  };

  const liStyle = {
    cursor: "pointer",
    padding: isMobile ? "15px 20px" : "0 20px",
    textAlign: isMobile ? "left" : "center",
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={navStyle}>
      {/* Hamburger button for mobile */}
      {isMobile && (
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "28px",
            cursor: "pointer",
            marginRight: "auto",
          }}
          onClick={toggleMenu}
        >
          ☰
        </button>
      )}

      {/* ✅ Logo as Image */}
      <Link to="/">
        <img src={logo} alt="Dream Day Venue" style={logoStyle} />
      </Link>

      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>
            About Us
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/refund-policy"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Refund Policy
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>
            Contact Us
          </Link>
        </li>
        <li style={liStyle}>
  <Link to="/booking" style={{ color: "inherit", textDecoration: "none" }}>
    Book Now
  </Link>
</li>

      </ul>
    </nav>
  );
};

export default Navbar;
