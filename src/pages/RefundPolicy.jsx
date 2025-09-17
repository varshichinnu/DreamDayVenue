// src/pages/RefundPolicy.jsx
import React from "react";

export default function RefundPolicy() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f9f9ff",
        width: "100vw",
        height: "100vh", // full screen height
        margin: 0,
        padding: "20px",
        boxSizing: "border-box",
        overflowX: "hidden",

        // 👇 Centering trick
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Content Card */}
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#2d3436",
            fontSize: "28px",
            marginBottom: "20px",
          }}
        >
          Refund Policy 🎓
        </h2>

        <ul
          style={{
            lineHeight: "1.8",
            fontSize: "18px",
            color: "#444",
            textAlign: "left",
            margin: "0 auto",
            maxWidth: "700px",
          }}
        >
          <li>
            We collect a small advance amount of <b>₹300</b> for students to
            confirm your booking.
          </li>
          <li>
            If you cancel your slot <b>1 day (24 hours) before</b> your event,{" "}
            <b>₹200</b> will be refunded back to you.
          </li>
          <li>
            After 24 hours, we cannot offer refunds for cancellations,
            no-shows, or late arrivals.
          </li>
          <li>
            If you need to cancel, please reach us via{" "}
            <a
              href="https://wa.me/919704718953"
              style={{
                color: "#6c5ce7",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              WhatsApp
            </a>{" "}
            so we can process your refund within <b>5 working days</b>.
          </li>
          <li>
            We keep prices student-friendly, so refunds are limited. Please plan
            your booking carefully! 😊
          </li>
        </ul>

        <p
          style={{
            marginTop: "30px",
            color: "#2d3436",
            fontSize: "16px",
          }}
        >
          For doubts or clarifications, contact us at{" "}
          <b>contact@dreamdayvenue.com</b>. <br />
          We’re here to help you celebrate your college moments stress-free! 🎉
        </p>
      </div>
    </div>
  );
}
