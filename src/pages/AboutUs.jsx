import React from "react";
import Navbar from "../components/Navbar";
import aboutImage from "../assets/aboutus.jpg";

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* Heading */}
      <section
        style={{
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#000000",
          fontSize: "48px",
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        About Us
      </section>

      {/* Image + Text Divisions */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          margin: "0 auto",
          backgroundColor: "white",
          paddingBottom: "100px",
        }}
      >
        {/* Image Division */}
        <div style={{
          flex: "1 1 50%", // half width on large screens
          width: "100%",   // responsive
          boxSizing: "border-box",
        }}>
     <img
  src={aboutImage}
  alt="About Us"
  style={{
    width: "95%",          // konchem penchindi
    maxWidth: "500px",     // max width slightly penchindi
    maxHeight: "350px",    // height kuda konchem penchindi
    objectFit: "cover",    
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    borderRadius: "10px",
    margin: "0 auto",
    display: "block"
  }}
/>

        </div>

        {/* Text Division */}
        <div style={{
          flex: "1 1 50%", // other half
          width: "100%",
          padding: "50px 40px",
          color: "#000000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxSizing: "border-box",
        }}>
          <p>
            At Dream Day Venue, we specialize in creating unforgettable memories for birthdays,
            small events, and exclusive shows.
          </p>
          <p>
            Established with a mission to provide personalized event spaces, we offer modern
            amenities, exceptional service, and a welcoming environment.
          </p>
          <p>
            Our team customizes each event to fit your vision, handling every detail with care and
            professionalism.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
