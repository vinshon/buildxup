// components/PrivateRoute.jsx
// components/PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const loginTime = localStorage.getItem("login_time");

  const oneDay = 24 * 60 * 60 * 1000; // 1 day in ms
  const now = new Date().getTime();

  if (token && loginTime) {
    const storedTime = new Date(loginTime).getTime();
    const isExpired = now - storedTime > oneDay;

    if (isExpired) {
      // Clear all stored items if expired
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("company_id");
      localStorage.removeItem("role");
      localStorage.removeItem("login_time");

      return <Navigate to="/login" replace />;
    }

    // Token is valid -> show the private page
    return <Outlet />;
  }

  // No token -> redirect to login
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
