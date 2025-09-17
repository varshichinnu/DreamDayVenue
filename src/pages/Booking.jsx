// Booking.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

// images
import privateTheatre1 from "../assets/private-theatre1.jpg";
import privateTheatre2 from "../assets/private-theatre2.webp";
import suprise1 from "../assets/suprise1.webp";
import suprise2 from "../assets/suprise2.jpeg";
import suprise3 from "../assets/suprise3.jpeg";

const Booking = () => {
  const navigate = useNavigate();

  const handleBookNow = (roomType) => {
    if (roomType === "luxe") {
      navigate("/luxe-room");
    } else if (roomType === "grand") {
      navigate("/grand-room");
    }
  };

  // --- Cards Section Styles ---
  const pageContainer = {
    minHeight: "100vh", // ✅ full screen height
    width: "100vw", // ✅ full width
    backgroundColor: "#f9f9f9",
    paddingTop: "100px", // nav bar space
    boxSizing: "border-box",
  };

  const cardsContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
  };

  const cardsHeadingStyle = {
    textAlign: "center",
    fontSize: "42px",
    fontWeight: "900",
    color: "#2b0000",
    marginBottom: "50px",
  };

  const cardsRow = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
  };

  const cardStyle = {
    backgroundColor: "white",
    width: "320px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    overflow: "hidden",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s",
  };

  const cardImageStyle = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  };

  const cardTextStyle = {
    color: "black",
    padding: "10px",
  };

  const cardButtonStyle = {
    backgroundColor: "#2b0000",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
    marginBottom: "15px",
    transition: "background 0.3s",
  };

  const cardHover = (e) =>
    (e.currentTarget.style.transform = "translateY(-5px)");
  const cardLeave = (e) =>
    (e.currentTarget.style.transform = "translateY(0)");
  const handleCardButtonHover = (e) =>
    (e.target.style.backgroundColor = "#2b0000");
  const handleCardButtonLeave = (e) =>
    (e.target.style.backgroundColor = "#2b0000");

  return (
    <div style={pageContainer}>
      {/* Birthday Rooms Section */}
      <section style={cardsContainer}>
        <h2 style={cardsHeadingStyle}>Birthday Rooms</h2>
        <div style={cardsRow}>
          {/* Luxe Room */}
          <div
            style={cardStyle}
            onMouseEnter={cardHover}
            onMouseLeave={cardLeave}
          >
            <img
              src={privateTheatre1}
              alt="The Luxe Room"
              style={cardImageStyle}
            />
            <h2 style={cardTextStyle}>The Luxe Room</h2>
            <p style={cardTextStyle}>
              Cozy and intimate private theatre for small celebrations...
            </p>
            <button
              style={cardButtonStyle}
              onMouseEnter={handleCardButtonHover}
              onMouseLeave={handleCardButtonLeave}
              onClick={() => handleBookNow("luxe")}
            >
              Book Now
            </button>
          </div>

          {/* Grand Room */}
          <div
            style={cardStyle}
            onMouseEnter={cardHover}
            onMouseLeave={cardLeave}
          >
            <img
              src={privateTheatre2}
              alt="The Grand Room"
              style={cardImageStyle}
            />
            <h2 style={cardTextStyle}>The Grand Room</h2>
            <p style={cardTextStyle}>
              Larger private theatre with modern amenities for grand parties...
            </p>
            <button
              style={cardButtonStyle}
              onMouseEnter={handleCardButtonHover}
              onMouseLeave={handleCardButtonLeave}
              onClick={() => handleBookNow("grand")}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Sudden Surprise Section */}
      <section style={cardsContainer}>
        <h2 style={cardsHeadingStyle}>Sudden Surprise</h2>
        <div style={cardsRow}>
          {[
            { img: suprise1, title: "Chocolate Gift Hamper" },
            { img: suprise2, title: "Blooming Joy Hamper" },
            { img: suprise3, title: "Elegant Surprise" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={cardStyle}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <img src={item.img} alt={item.title} style={cardImageStyle} />
              <h2 style={cardTextStyle}>{item.title}</h2>
              <button
                style={cardButtonStyle}
                onMouseEnter={handleCardButtonHover}
                onMouseLeave={handleCardButtonLeave}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Booking;
