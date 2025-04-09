import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Construction from "./pages/construction";
import Thankyou from "./pages/thank-you";
import Login from "./pages/login";
import Signup from "./pages/signup";

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F0]">
      {!hideHeaderFooter && (
        <div className="fixed w-full z-50">
          <Header />
        </div>
      )}
      <main className={`flex-grow ${!hideHeaderFooter ? "mt-24" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Construction />} />
          <Route path="/services" element={<Construction />} />
          <Route path="/pricing" element={<Construction />} />
          <Route path="/help" element={<Construction />} />
          <Route path="/contact" element={<Construction />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/thank-you" element={<Thankyou />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
