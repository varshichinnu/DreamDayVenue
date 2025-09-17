import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"; 

// Background slides
import bg0 from "../assets/background.jpg";
import bg1 from "../assets/background1.jpg";
import bg2 from "../assets/background2.jpg";
import bg3 from "../assets/background3.jpg";
import bg4 from "../assets/background4.jpg";

// Theatre images
import privateTheatre1 from "../assets/private-theatre1.jpg";
import privateTheatre2 from "../assets/private-theatre2.webp";

// Surprise images
import suprise1 from "../assets/suprise1.webp";
import suprise2 from "../assets/suprise2.jpeg";
import suprise3 from "../assets/suprise3.jpeg";

// About Us Image
import aboutImage from "../assets/aboutus.jpg";

// Things-to-Note images
import foodImg from "../assets/food.jpg";
import screeningImg from "../assets/screening.webp";
import cakeImg from "../assets/cake.avif";
import bouquetImg from "../assets/bouquet.webp";

import bookingImg from "../assets/booking.png";



const slides = [bg0, bg1, bg2, bg3, bg4];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ✅ FIX: Book Now navigation function
  const handleBookNow = (roomId) => {
    if (roomId === "luxe") {
      navigate("/luxe-room");  // LuxeRoom page ki vellali
    } 
    else if (roomId === "grand") {
      navigate("/grand-room"); // later grand-room route create cheyyochu
    }
  };
 
 
  
  // --- Hero Section ---
  const heroStyle = {
    position: "relative",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${slides[currentSlide]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    transition: "background-image 1s ease-in-out",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    padding: "0 20px",
    width: "100%",
    maxWidth: "1200px",
  };

  const h1Style = { fontSize: "48px", marginBottom: "20px", lineHeight: 1.2 };
  const pStyle = { fontSize: "22px", marginBottom: "30px" };
  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
    padding: "14px 32px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "background 0.3s",
  };
  const handleButtonHover = (e) =>
    (e.target.style.backgroundColor = "green");
  const handleButtonLeave = (e) =>
    (e.target.style.backgroundColor = "#2b0000");

  // --- Cards Section ---
  const cardsContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
    backgroundColor: "#f9f9f9",
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

  // --- About Us Section ---
  const aboutSection = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 20px",
    backgroundColor: "#f3e8ff",
    gap: "40px",
    flexWrap: "wrap",
  };

  const aboutImageStyle = {
    width: "450px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  };

  const aboutText = {
    flex: 1,
    maxWidth: "500px",
    color: "#333",
  };

  const aboutHeading = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#2b0000",
  };

  const aboutPara = {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  const aboutBtn = {
    backgroundColor: "#2b0000",
    color: "white",
    padding: "12px 28px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background 0.3s",
  };

  const noteCardImageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "15px",
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
          <h1 style={h1Style}>Celebrate Your Events at Dream Day Venue</h1>
          <p style={pStyle}>
            Private theatres for birthdays, small events & exclusive shows
          </p>
      <button
  style={buttonStyle}
  onMouseEnter={handleButtonHover}
  onMouseLeave={handleButtonLeave}
  onClick={() => navigate("/booking")} // inline call
>
  Book Now
</button>


        </div>
      </section>

      {/* Birthday Rooms Section */}

    <section style={cardsContainer}>
      <h2 style={cardsHeadingStyle}>Birthday Rooms</h2>
      <div style={cardsRow}>
        
     {/* Luxe Room */}
<div style={cardStyle}>
  <img src={privateTheatre1} alt="The Luxe Room" style={cardImageStyle} />
  <h2 style={cardTextStyle}>The Luxe Room</h2>
  <p style={cardTextStyle}>Cozy and intimate private theatre...</p>
  <button 
    style={cardButtonStyle} 
    onClick={() => handleBookNow("luxe")}
  >
    Book Now
  </button>
</div>

        {/* Grand Room */}
        <div style={cardStyle}>
          <img src={privateTheatre2} alt="The Grand Room" style={cardImageStyle} />
          <h2 style={cardTextStyle}>The Grand Room</h2>
          <p style={cardTextStyle}>Larger private theatre with modern amenities...</p>
         <button
  style={cardButtonStyle}
  onClick={() => navigate("/grand-room")}
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
          {[{ img: suprise1, title: "Chocolate Gift Hamper" },
            { img: suprise2, title: "Blooming Joy Hamper" },
            { img: suprise3, title: "Elegant Surprise" }].map((item, idx) => (
            <div key={idx} style={cardStyle} onMouseEnter={cardHover} onMouseLeave={cardLeave}>
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

      {/* About Us Section */}
      <section style={aboutSection}>
        <img src={aboutImage} alt="About Us" style={aboutImageStyle} />
        <div style={aboutText}>
          <h2 style={aboutHeading}>Celebrate Together</h2>
          <p style={aboutPara}>
            Experience private theatres designed for your happiest moments – birthdays, surprises, and get-togethers with loved ones.
          </p>
          <button style={aboutBtn} onClick={() => navigate("/about")}>
            Learn More →
          </button>
        </div>
      </section>

      {/* Booking Process Section */}

<section style={{ 
  position: "relative",
  padding: "50px 20px", 
  textAlign: "center", 
  color: "#fff",
  backgroundImage: `url(${bookingImg})`,  // ✅ using imported image
  backgroundSize: "cover",
  backgroundPosition: "center",
}}>
  {/* Black Overlay */}
  <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)", // black overlay
    zIndex: 1
  }}></div>

  {/* Content */}
  <div style={{ position: "relative", zIndex: 2 }}>
    <h3 style={{ fontSize: "20px", letterSpacing: "2px", color: "#ddd", marginBottom: "10px" }}>
      BOOKING PROCESS
    </h3>
    <h2 style={{ fontSize: "32px", color: "#fff", marginBottom: "30px" }}>
      What's the process for booking a slot?
    </h2>
    <p style={{ 
      fontSize: "18px", 
      maxWidth: "800px", 
      margin: "0 auto 60px", 
      color: "#ccc"
    }}>
      Booking is a breeze! Click “Book Now,” choose your theatre, event, decor, add-ons, 
      photography, food, and pay easily online.
    </p>

    <div style={{ 
      display: "flex", 
      flexWrap: "wrap", 
      justifyContent: "center", 
      gap: "30px" 
    }}>
      {/* Step 1 */}
      <div style={{ 
        backgroundColor: "rgba(18, 18, 18, 0.05)", 
        padding: "30px", 
        borderRadius: "7px", 
        maxWidth: "250px", 
        textAlign: "center",
        border: "1px solid rgba(255,255,255,0.2)"
      }}>
        <h3 style={{ fontSize: "15px", color: "#fff", marginBottom: "10px" }}>Select Your Experience</h3>
        <p style={{ fontSize: "12px", color: "#ccc" }}>
          Begin by picking your preferred theatre type and selecting the event you're celebrating.
        </p>
      </div>

      {/* Step 2 */}
      <div style={{ 
        backgroundColor: "rgba(18, 18, 18, 0.05)", 
        padding: "30px", 
        borderRadius: "7px", 
        maxWidth: "250px", 
        textAlign: "center",
        border: "1px solid rgba(255,255,255,0.2)"
      }}>
        <h3 style={{ fontSize: "15px", color: "#fff", marginBottom: "10px" }}>Customize Your Celebration</h3>
        <p style={{ fontSize: "12px", color: "#ccc" }}>
          Personalize your experience with decor, add-ons, photography, and food options to suit your occasion.
        </p>
      </div>

      {/* Step 3 */}
      <div style={{ 
        backgroundColor: "rgba(18,18,18,0.05)", 
        padding: "30px", 
        borderRadius: "7px", 
        maxWidth: "250px", 
        textAlign: "center",
        border: "1px solid rgba(255,255,255,0.2)"
      }}>
        <h3 style={{ fontSize: "15px", color: "#fff", marginBottom: "10px" }}>Confirm and Pay</h3>
        <p style={{ fontSize: "12px", color: "#ccc" }}>
          Review your choices, make a secure online payment, and get ready for an unforgettable celebration.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Things-to-Note Section */}
      <section style={{ padding: "80px 20px", backgroundColor: "#ffffff", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px", color: "#2b0000", marginBottom: "50px" }}>Things to Note</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "90px" }}>
          {[ 
            { img: foodImg, title: "Food & Beverages", desc: "Enjoy delicious in-theatre dining options at affordable prices!" },
            { img: screeningImg, title: "Screening", desc: "Bring your own OTT accounts and relive the theatre magic!" },
            { img: cakeImg, title: "Cakes", desc: "Choose the perfect cake for your celebration from our selection." },
            { img: bouquetImg, title: "Bouquets", desc: "Add a beautiful rose bouquet to enhance your celebration." }
          ].map((item, index) => (
            <div key={index} style={{ maxWidth: "220px" }}>
              <img src={item.img} alt={item.title} style={noteCardImageStyle} />
              <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "black" }}>{item.title}</h3>
              <p style={{ fontSize: "16px", marginBottom: "5px", color: "black" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1024px) {
          h1 { font-size: 32px !important; }
          p { font-size: 18px !important; }
          .card { width: 100% !important; max-width: 400px !important; }
          section { padding: 60px 20px !important; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 26px !important; }
          p { font-size: 16px !important; }
          .card { width: 90% !important; }
          section { padding: 40px 10px !important; }
          section[style*="f3e8ff"] { flex-direction: column !important; text-align: center; }
          section[style*="f3e8ff"] img { width: 80% !important; margin-bottom: 20px; }
          section[style*="f3e8ff"] div { max-width: 90% !important; }
        }
      `}</style>
    </div>
  );
};

export default Home;
