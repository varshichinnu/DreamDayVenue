import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    option: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  // Inline style objects
  const styles = {
    page: {
      minHeight: "100vh",
      fontFamily: "Arial, Helvetica, sans-serif",
      background: "#ffffff",
      color: "#222",
      margin: 0,
    },
    container: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "50px",
      padding: "60px",
      boxSizing: "border-box",
      flexWrap: "wrap",
    },
    card: {
      flex: "1 1 48%",
      minWidth: 280,
      background: "#fff",
      borderRadius: 15,
      padding: 25,
      boxSizing: "border-box",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },
    heading: { fontSize: 18, fontWeight: 600, marginBottom: 12 },
    row: { display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 },
    icon: { fontSize: 18, lineHeight: "18px" },
    inputGrid: { display: "flex", gap: 12, flexWrap: "wrap" },
    input: {
      flex: "1 1 48%",
      minWidth: 120,
      padding: "10px 12px",
      border: "1px solid #ddd",
      borderRadius: 6,
      boxSizing: "border-box",
      backgroundColor: "white",
      color: "black",
    },
    select: {
      flex: "1 1 48%",
      minWidth: 120,
      padding: "10px 12px",
      border: "1px solid #ddd",
      borderRadius: 6,
      boxSizing: "border-box",
      backgroundColor: "white",
      color: "black",
    },
    textarea: {
      width: "100%",
      minHeight: 110,
      padding: "10px 12px",
      border: "1px solid #ddd",
      borderRadius: 6,
      boxSizing: "border-box",
      resize: "vertical",
      backgroundColor: "white",
      color: "black",
    },
    submitBtn: {
      background: "#f5c518",
      color: "#000",
      border: "none",
      padding: "10px 18px",
      borderRadius: 9999,
      fontWeight: 700,
      cursor: "pointer",
    },
    success: { color: "#15803d", fontWeight: 700 },
    smallText: { margin: 0 },
  };

  return (
    <div style={styles.page}>
      {/* Placeholder and select option styling */}
      <style>
        {`
          input::placeholder, textarea::placeholder {
            color: black; /* placeholder white */
          }
          select option {
            color: black; /* dropdown options black */
          }
        `}
      </style>

      <main style={styles.container}>
        {/* Left Card */}
        <section style={styles.card}>
          <h2 style={styles.heading}>We are here to help you</h2>

          <div style={styles.row}>
            <div style={styles.icon}>📍</div>
            <p style={styles.smallText}>
              Chinimaram, Juvvalapalem Road, near Sagi Rama Krishnam Raju
              Engineering College, near Event Hall, West Godavari District,
              Andhra Pradesh
            </p>
          </div>

          <div style={styles.row}>
            <div style={styles.icon}>✉</div>
            <p style={styles.smallText}>contact@dreamdayvenue.com</p>
          </div>

          <div style={styles.row}>
            <div style={styles.icon}>📞</div>
            <p style={styles.smallText}>+91 8179xxxxxx</p>
          </div>
        </section>

        {/* Right Card - Form */}
        <section style={styles.card}>
          {submitted ? (
            <div style={styles.success}>
              ✅ Thank you! Your response has been submitted.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={styles.inputGrid}>
                <input
                  style={styles.input}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name*"
                  required
                />

                <input
                  style={styles.input}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your e-mail*"
                  required
                />
              </div>

              <div style={{ ...styles.inputGrid, marginTop: 12 }}>
                <select
                  style={styles.select}
                  name="option"
                  value={formData.option}
                  onChange={handleChange}
                >
                  <option value="">— Please choose an option —</option>
                  <option value="General Inquiry">sudden surprise</option>
                  <option value="Booking">Birthday event</option>
                  <option value="Support">any event</option>
                </select>

                <input
                  style={styles.input}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
              </div>

              <div style={{ marginTop: 12 }}>
                <textarea
                  style={styles.textarea}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                />
              </div>

              <div style={{ marginTop: 14 }}>
                <button type="submit" style={styles.submitBtn}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
