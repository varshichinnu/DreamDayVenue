import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// ✅ Import images
import i1 from "../assets/i-1.jpg";
import i2 from "../assets/i-2.jpg";
import i3 from "../assets/i-3.jpg";
import i4 from "../assets/i-4.jpg";
import i5 from "../assets/i-5.jpg";
import i6 from "../assets/i-6.jpg";
import i7 from "../assets/i-7.jpg";
import i8 from "../assets/i-8.jpg";
import i9 from "../assets/i-9.jpg";
import i10 from "../assets/i-10.jpg";
import i11 from "../assets/i-11.jpg";
import i12 from "../assets/i-12.jpg";
import i13 from "../assets/i-13.jpg";
import i14 from "../assets/i-14.jpg";
import i15 from "../assets/i-15.jpg";
import i16 from "../assets/i-16.jpg";
import i17 from "../assets/i-17.jpg";
import i18 from "../assets/i-18.jpg";
import i19 from "../assets/i-19.jpg";
import i20 from "../assets/i-20.jpg";
import i21 from "../assets/i-21.jpg";

// ✅ Category Names
const categoryNames = {
  Cakes: "Cakes",
  DecorAddOns: "Decor Add-ons",
  Roses: "Roses",
};

// ✅ Addons Data
const addonsData = {
  Cakes: [
    { id: 1, name: "Vanilla", price: 500, img: i2 },
    { id: 2, name: "Strawberry", price: 550, img: i1 },
    { id: 3, name: "Butter Scotch", price: 550, img: i3 },
    { id: 4, name: "Pine Apple", price: 550, img: i4 },
    { id: 5, name: "Chocolate", price: 600, img: i5 },
    { id: 6, name: "Dark Chocolate", price: 600, img: i6 },
    { id: 7, name: "Black Forest", price: 600, img: i7 },
    { id: 8, name: "White Forest", price: 600, img: i8 },
    { id: 9, name: "Chocochips", price: 600, img: i9 },
    { id: 10, name: "Blueberry", price: 600, img: i10 },
    { id: 11, name: "Dry Fruit", price: 650, img: i11 },
    { id: 12, name: "Chocolate Coffee", price: 700, img: i12 },
    { id: 13, name: "Kitkat Chocolate", price: 700, img: i13 },
    { id: 14, name: "Rum Chocolate", price: 700, img: i14 },
  ],
  DecorAddOns: [
    { id: 15, name: "HBD Letters", price: 99, img: i15 },
    { id: 16, name: "LED Numbers", price: 99, img: i16 },
    { id: 17, name: "Party Props", price: 199, img: i17 },
    { id: 18, name: "Candle Path", price: 200, img: i18 },
  ],
  Roses: [
    { id: 19, name: "Single Rose", price: 50, img: i19 },
    { id: 20, name: "Rose Bouquet", price: 300, img: i20 },
    { id: 21, name: "Rose Bouquet", price: 500, img: i21 },
  ],
};

const AddOns = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get dynamic room price from LuxeRoom / GrandRoom
  const { roomPrice = 0, date, slot, whatsapp } = location.state || {};

  const [cart, setCart] = useState([]);

  // Responsive columns
  const [columns, setColumns] = useState(getColumns());
  function getColumns() {
    if (window.innerWidth <= 768) return 2; // Mobile & Tablet
    return 4; // Desktop
  }

  useEffect(() => {
    const handleResize = () => setColumns(getColumns());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add item to cart
  const handleAddItem = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // Proceed to Payment
  const handleProceed = () => {
    const addonsTotal = cart.reduce((acc, item) => acc + item.price, 0);
    const totalAmount = roomPrice + addonsTotal;

    navigate("/payment", {
      state: {
        cart,
        roomPrice,
        addonsTotal,
        totalAmount,
        date,
        slot,
        whatsapp,
      },
    });
  };

  const handleBack = () => {
    window.history.back();
  };

  // Render each item card
  const renderItemCard = (item) => (
    <div
      key={item.id}
      style={{
        background: "#fff",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(7,1,1,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "28px",
        cursor: "pointer",
        width: "200px",
        height: "250px",
        margin: "0 auto",
      }}
    >
      <img
        src={item.img}
        alt={item.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
      <h3
        style={{
          fontSize: "1rem",
          fontWeight: "600",
          margin: "8px 0 4px",
          color: "#333",
          textAlign: "center",
        }}
      >
        {item.name}
      </h3>
      <p style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#2c3e50" }}>
        ₹{item.price}
      </p>
      <button
        style={{
          marginTop: "6px",
          background: "#f93b3b",
          color: "white",
          border: "1px solid #f93b3b",
          padding: "4px 10px",
          borderRadius: "15px",
          fontWeight: "500",
          cursor: "pointer",
          fontSize: "0.8rem",
          width: "100px",
        }}
        onClick={() => handleAddItem(item)}
      >
        Add Item
      </button>
    </div>
  );

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f9f9ff",
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Top Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
          padding: "20px",
        }}
      >
        <button
          onClick={handleBack}
          style={{
            background: "transparent",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "red",
            border: "none",
            fontWeight: "600",
          }}
        >
          ← Back
        </button>

        <button
          onClick={handleProceed}
          style={{
            background: "#28a745",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "25px",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Proceed ({cart.length})
        </button>
      </div>

      {/* Categories */}
      {Object.entries(addonsData).map(([category, items]) => (
        <div key={category}>
          <h2
            style={{
              fontSize: "1.6rem",
              color: "#333",
              margin: "25px 0 15px",
              paddingLeft: "12px",
              paddingBottom: "6px",
              borderBottom: "3px solid #f93b3b",
              display: "inline-block",
            }}
          >
            {categoryNames[category]}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gap: "20px",
              margin: "0 auto",
              width: "100%",
              padding: "0 10px",
            }}
          >
            {items.map((item) => renderItemCard(item))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddOns;
