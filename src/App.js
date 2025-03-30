import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header"; // ✅ Import Header
import Footer from "./components/footer"; // ✅ Import Footer
import Construction from "./pages/construction";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F7F5F0]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Construction />} />
            <Route path="/services" element={<Construction />} />
            <Route path="/pricing" element={<Construction />} />
            <Route path="/help" element={<Construction />} />
            <Route path="/contact" element={<Construction />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
