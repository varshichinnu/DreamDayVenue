// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Theatres from "./pages/Theatres";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LuxeRoom from "./pages/LuxeRoom";
import GrandRoom from "./pages/GrandRoom";
import RefundPolicy from "./pages/RefundPolicy";
import AddOns from "./pages/AddOns";
import PaymentPage from "./pages/Payment";
import PaymentMethods from "./pages/PaymentMethods"; // ✅ import chesamu

function App() {
  const location = useLocation();

  // ✅ ee pages lo Navbar & Footer kakudadhu
  const hideLayout = ["/addons", "/payment", "/payment-methods"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theatres" element={<Theatres />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/luxe-room" element={<LuxeRoom />} />
        <Route path="/grand-room" element={<GrandRoom />} />
        <Route path="/addons" element={<AddOns />} /> 
        <Route path="/payment" element={<PaymentPage />} /> 
        <Route path="/payment-methods" element={<PaymentMethods />} /> {/* ✅ full screen */}
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
