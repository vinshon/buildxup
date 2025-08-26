import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://api-stage.buildxup.com/auth/verify-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
 
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed. Please try again.");
      }

      // Store full set of tokens and user data
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("refresh_token", data.data.refresh_token);
      localStorage.setItem("user_id", data.data.user_id);
      localStorage.setItem("company_id", data.data.company_id);
      localStorage.setItem("role", data.data.role);
      // Save the current date & time
      localStorage.setItem("login_time", new Date().toISOString());

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-12">
        <div
          style={{ backgroundImage: "url('/login/loginBg.jpg')" }}
          className="col-span-6 flex items-center justify-center h-screen w-full bg-cover bg-center bg-no-repeat"
        >
          <img
            src="/login/login.png"
            alt="login"
            className="max-h-[500px] object-contain"
          />
        </div>

        <div className="col-span-6 flex items-center justify-center bg-white">
          <div className="w-[420px] mx-auto">
            <div className="flex flex-col gap-1 items-center justify-center">
              <img
                src="/logo-buildxup.png"
                alt="logo"
                className="h-12 object-contain"
              />
              <h1 className="text-4xl font-bold">Login</h1>
              <p className="mt-1 text-center text-fadetext text-base font-medium">
                Clarity gives you the blocks and components you need to create a
                truly professional website.
              </p>
            </div>

            <div className="mt-8">
              <label htmlFor="email" className="text-lg block font-bold">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-3 p-2 border focus:outline-none rounded-md"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="password" className="text-lg block font-bold">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-3 p-2 border focus:outline-none rounded-md"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm mt-3 text-center">{error}</p>
            )}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="bg-primary w-full py-2 rounded-md text-white font-semibold mt-6 hover:bg-primary-dark transition"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>

            <div className="flex gap-2 items-center justify-center mt-5">
              <p>Don't have an account?</p>
              <Link to="/signup" className="text-primary hover:underline">
                Create free account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
