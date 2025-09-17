import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, roomPrice, addonsTotal, date, slot, whatsapp } = location.state || {
    cart: [],
    roomPrice: 0,
    addonsTotal: 0,
    date: null,
    slot: null,
    whatsapp: null,
  };

  const total = roomPrice + addonsTotal;
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleBack = () => {
    window.history.back();
  };

  const handlePayNow = () => {
    const orderData = {
      date,
      slot,
      whatsapp,
      addons: cart.map((item) => item.name),
      total,
      status: "Confirmed",
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(orders));

    setOrderConfirmed(true);
  };

  const handleProceed = () => {
    alert("Order successfully placed!");
    navigate("/"); // Redirect to homepage or orders page
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // <-- ensures vertical centering
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          width: "100%",
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button
          onClick={handleBack}
          style={{
            background: "transparent",
            border: "none",
            color: "red",
            fontSize: "1.2rem",
            cursor: "pointer",
            marginBottom: "15px",
            alignSelf: "flex-start",
          }}
        >
          ← Back
        </button>

        {!orderConfirmed ? (
          <>
            <div style={{ marginBottom: "15px", fontSize: "15px", color: "#333" }}>
              <h3 style={{ marginBottom: "10px" }}>Room Details</h3>
              <p>
                <strong>Date:</strong>{" "}
                <span style={{ float: "right" }}>
                  {date ? new Date(date).toLocaleDateString() : "N/A"}
                </span>
              </p>
              <p>
                <strong>Time Slot:</strong>{" "}
                <span style={{ float: "right" }}>{slot || "N/A"}</span>
              </p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <span style={{ float: "right" }}>{whatsapp || "N/A"}</span>
              </p>
              <p>
                <strong>Room Price:</strong> <span style={{ float: "right" }}>₹{roomPrice}</span>
              </p>
            </div>

            {cart.length > 0 && (
              <div style={{ marginBottom: "15px",color: "#000" }}>
                 <hr />
                <h4 style={{ marginBottom: "10px",color: "#000" }}>Selected Add-ons:</h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "8px",
                        padding: "6px 10px",
                        background: "#f9f9f9",
                        borderRadius: "6px",
                        textcolor: "black",
                      }}
                    >
                      <span>{item.name}</span>
                      <span>₹{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ fontSize: "15px", marginBottom: "20px" }}>
              <p style={{ color: "#000" }}>
  Add-ons Total <span style={{ float: "right", color: "#000" }}>₹{addonsTotal}</span>
</p>

              <hr />
              <h3 style={{ fontWeight: "600" }}>
                To Pay <span style={{ float: "right"}}>₹{total}</span>
              </h3>
            </div>

            <button
              onClick={handlePayNow}
              style={{
                background: "#28a745",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                width: "100%",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Proceed
            </button>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "200px", // keeps card centered
              textAlign: "center",
            }}
          >
            <p style={{ fontWeight: "600", fontSize: "18px", marginBottom: "20px",color: "#000" }}>
              ✅ Your order is confirmed!
            </p>
            <button
              onClick={handleProceed}
              style={{
                background: "#28a745",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
                
              }}
            >
              confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
