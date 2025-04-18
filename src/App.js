import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/layout/MainLayout";
import DashboardLayout from "./pages/layout/DashboardLayout";
import Home from "./pages/home";
import Construction from "./pages/construction";
import Thankyou from "./pages/thank-you";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/dashboard/projects";
import AboutUs from "./pages/about"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Construction />} />
          <Route path="/pricing" element={<Construction />} />
          <Route path="/help" element={<Construction />} />
          <Route path="/contact" element={<Construction />} />
          <Route path="/thank-you" element={<Thankyou />} />
          <Route path="/construction" element={<Construction />} />
        </Route>

        {/* Auth Pages - No Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard Layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/project" element={<Projects />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
