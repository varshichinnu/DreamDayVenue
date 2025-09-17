import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    room: "",
    date: "",
    slot: "",
    whatsapp: "",
    addons: "",
    total: "",
    paymentMethod: "Direct Cash",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/direct-cash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message); // confirmation to user
    } catch (error) {
      console.error("Error booking:", error);
      alert("Booking failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="room" placeholder="Room" onChange={handleChange} />
      <input type="date" name="date" onChange={handleChange} />
      <input type="text" name="slot" placeholder="Slot" onChange={handleChange} />
      <input type="text" name="whatsapp" placeholder="WhatsApp" onChange={handleChange} />
      <input type="text" name="addons" placeholder="Add-ons" onChange={handleChange} />
      <input type="number" name="total" placeholder="Total" onChange={handleChange} />
      <button type="submit">Proceed</button>
    </form>
  );
};

export default BookingForm;
