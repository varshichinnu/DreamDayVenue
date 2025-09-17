import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  transition: "color 0.3s ease", // smooth hover effect
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2b0000",
        color: "#fff",
        padding: "5px 15px 15px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "55px",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Dream Day Venue
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "90px",
            marginBottom: "40px",
          }}
        >
          <div>
            <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>Quick Links</h4>
            <p><Link to="/" style={linkStyle} className="footer-link">Home</Link></p>
            <p><Link to="/about" style={linkStyle} className="footer-link">About Us</Link></p>
            <p><Link to="/booking" style={linkStyle} className="footer-link">My Bookings</Link></p>
            <p><Link to="/theatres" style={linkStyle} className="footer-link">Private Theatres</Link></p>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>Support</h4>
            <p>Refund Policy</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>Contact</h4>
            <p>📞 +91 9xxxx xxxxx</p>
            <p>📧 info@dreamdayvenue.com</p>
            <p>Bhimavaram</p>
          </div>
        </div>

        <p style={{ fontSize: "14px", color: "#ccc" }}>
          © 2025 Dream Day Venue. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
