// PaymentMethods.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentMethods = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const total = state?.total || 0;

  const handlePaymentMethod = async (method) => {
    if (method === "Direct Cash") {
      // 1️⃣ Prepare booking data
      const bookingData = {
        room: state?.room || "Grand Room",
        date: state?.date,
        slot: state?.slot,
        whatsapp: state?.whatsapp,
        addons: state?.cart || [],
        total,
        paymentMethod: method,
      };

      try {
        // 2️⃣ Call backend API to save booking & send messages
        const response = await fetch("http://localhost:5000/direct-cash", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        });

        const result = await response.json();

        if (result.success) {
          alert("✅ Room booked successfully! WhatsApp & Admin notified.");
          // 3️⃣ Redirect to booking success page
          navigate("/booking-success", { state: { bookingData } });
        } else {
          alert("❌ Booking failed, please try again.");
        }
      } catch (err) {
        console.error(err);
        alert("❌ Error occurred.");
      }
    } else {
      alert(`You selected ${method} to pay ₹${total}`);
      // Add actual online payment flow here
    }
  };

  const paymentButtons = [
    { method: "UPI", bg: "linear-gradient(45deg, #6a11cb, #2575fc)" },
    { method: "Credit / Debit Card", bg: "linear-gradient(45deg, #ff416c, #ff4b2b)" },
    { method: "Net Banking", bg: "linear-gradient(45deg, #f7971e, #ffd200)" },
    { method: "Direct Cash", bg: "linear-gradient(45deg, #56ab2f, #a8e063)" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "10px", color: "#000" }}>Choose Payment Method</h3>
        <p style={{ fontSize: "16px", fontWeight: "500", color: "#000" }}>
          Total Amount: ₹{total}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "20px",
          }}
        >
          {paymentButtons.map((btn, idx) => (
            <button
              key={idx}
              onClick={() => handlePaymentMethod(btn.method)}
              style={{
                padding: "14px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                background: btn.bg,
                color: "#fff",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {btn.method}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
