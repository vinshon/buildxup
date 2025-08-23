// components/PublicRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");
  const loginTime = localStorage.getItem("login_time");

  // Calculate if more than one day passed
  const oneDay = 24 * 60 * 60 * 1000; // 1 day in ms
  const now = new Date().getTime();

  if (token && loginTime) {
    const storedTime = new Date(loginTime).getTime();
    const isExpired = now - storedTime > oneDay;

    if (isExpired) {
      // Clear all stored items
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("company_id");
      localStorage.removeItem("role");
      localStorage.removeItem("login_time");

      return <Navigate to="/login" replace />;
    }

    // If token is still valid, go to dashboard
    return <Navigate to="/dashboard" replace />;
  }

  // If no token, allow public routes
  return <Outlet />;
};

export default PublicRoute;
