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
// import Projects from "./pages/dashboard/projects";
import AboutUs from "./pages/about";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import DailyTask from "./pages/dashboard/dailyTask";
import TaskAttendencePortal from "./pages/dashboard/taskAttendencePortal";
import UnderConstruction from "./pages/under-construction"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages with MainLayout */}
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

        {/* Public routes for login/signup */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Private dashboard routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/project" element={<DailyTask />} />
            <Route
              path="/dashboard/taskAttendencePortal"
              element={<TaskAttendencePortal />}
            />
            <Route
              path="/under-Construction"
              element={<UnderConstruction />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
