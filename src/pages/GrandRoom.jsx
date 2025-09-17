import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // ✅ import navigate
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import privateTheatre2 from "../assets/private-theatre2.webp";

const GrandRoom = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlot, setBookedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navigate = useNavigate(); // ✅ router navigation hook

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slots = [
    { id: 1, time: "9:30 AM – 11:30 AM", status: "available" },
    { id: 2, time: "12:00 PM – 2:00 PM", status: "available" },
    { id: 3, time: "2:30 PM – 4:00 PM", status: "available" },
    { id: 4, time: "4:30 PM – 6:30 PM", status: "available" },
    { id: 5, time: "7:00 PM – 9:00 PM", status: "available" },
    { id: 6, time: "10:00 PM – 12:30 AM", status: "available" },
  ];

  const roomPrice = 999; // ✅ Room price

  const handleSlotClick = (id) => {
    setSelectedSlot(id);
  };

  const handleProceed = () => {
    if (!selectedDate) {
      alert("⚠️ Please select a date before proceeding.");
      return;
    }
    if (!selectedSlot) {
      alert("⚠️ Please select a time slot before proceeding.");
      return;
    }
    if (!/^[0-9]{10}$/.test(whatsappNumber)) {
      alert("⚠️ Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    setBookedSlot(selectedSlot);

    // ✅ Navigate to Add-ons page with roomPrice
    navigate("/addons", {
      state: {
        date: selectedDate,
        slot: slots.find((s) => s.id === selectedSlot).time,
        whatsapp: whatsappNumber,
        roomPrice: roomPrice, // ✅ pass room price
      },
    });
  };

  const slotBtn = {
    padding: "8px 14px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    background: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    color: "#000",
    transition: "all 0.2s ease-in-out",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#000", fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Image */}
      <div style={{ textAlign: "center" }}>
        <img
          src={privateTheatre2}
          alt="The Grand Room"
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />
      </div>

      {/* Main Section */}
      <div style={{ flex: 1, display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: "30px", padding: "20px" }}>
        {/* Left: Room Details */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h1>THE GRAND ROOM</h1>
          <ul style={{ lineHeight: "1.8" }}>
            <li>Price ₹{roomPrice} (with decoration).</li>
            <li>High quality Bluetooth speaker.</li>
            <li>Luxury recliner sofa setup.</li>
            <li>Air conditioning available.</li>
            <li>Generator backup.</li>
          </ul>
          <p style={{ color: "red", fontWeight: "bold", marginTop: "15px" }}>
            NOTE: Price includes decoration cost
          </p>
        </div>

        {/* Right: Booking Form */}
        <div style={{ flex: 1, minWidth: "320px", background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
          {/* Date */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "bold", display: "block" }}>* Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              minDate={new Date()}
              customInput={
                <input
                  style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "6px", background: "#fff", marginTop: "5px", color: "#000", cursor: "pointer" }}
                />
              }
            />
          </div>

          {/* Time Slot */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "bold", display: "block" }}>* Time Slot</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "8px" }}>
              {slots.map((slot) => (
                <button
                  key={slot.id}
                  style={{
                    ...slotBtn,
                    textDecoration: bookedSlot === slot.id ? "line-through" : "none",
                    background: bookedSlot === slot.id ? "#d4edda" : selectedSlot === slot.id ? "#f0f0f0" : "#fff",
                    borderColor: bookedSlot === slot.id ? "#28a745" : selectedSlot === slot.id ? "#000" : "#ccc",
                    color: bookedSlot === slot.id ? "#155724" : "#000",
                  }}
                  onClick={() => handleSlotClick(slot.id)}
                >
                  {bookedSlot === slot.id ? "Booked" : slot.time}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "bold", display: "block" }}>* WhatsApp Number</label>
            <input
              type="text"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              placeholder="10 Digit WhatsApp Number"
              maxLength={10}
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "6px", background: "#fff", color: "#000" }}
            />
          </div>
        </div>
      </div>

      {/* Proceed Button */}
      <div style={{ background: "#ff4d4d", color: "#fff", textAlign: "center", padding: "18px", fontWeight: "bold", fontSize: "16px", cursor: "pointer" }} onClick={handleProceed}>
        PROCEED TO ADD-ONS →
      </div>
    </div>
  );
};

export default GrandRoom;
