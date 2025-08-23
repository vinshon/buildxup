import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const inputs = useRef([]);
  const otpLength = 6;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = async () => {
    const { name, email, phone, password, confirmPassword } = formData;

    if (!name || !email || !phone || !password || !confirmPassword) {
      setGeneralError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setGeneralError("Passwords do not match.");
      return;
    }

    setGeneralError("");

    try {
      const res = await fetch("https://api-stage.buildxup.com/auth/temp-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMsg = data.message || "Failed to send OTP. Try again.";
        throw new Error(errorMsg);
      }

      setOtpSent(true);
      inputs.current[0]?.focus();
    } catch (error) {
      setGeneralError(error.message || "Something went wrong.");
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d$/.test(value) && value !== "") return;

    inputs.current[index].value = value;

    if (value && index < otpLength - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleResetOtp = () => {
    inputs.current.forEach((input) => (input.value = ""));
    inputs.current[0]?.focus();
    setOtpError("");
  };

  const handleSubmitOtp = async () => {
    const otp = inputs.current.map((input) => input.value).join("");

    if (otp.length !== otpLength || /\D/.test(otp)) {
      setOtpError("Please enter a valid 5-digit OTP.");
      return;
    }

    try {
      const verifyRes = await fetch("https://api-stage.buildxup.com/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp }),
      });

      if (!verifyRes.ok) throw new Error();

      const { name, email, phone, password } = formData;

      const signupRes = await fetch("https://api-stage.buildxup.com/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: name,
          email,
          phone,
          password,
        }),
      });

      const data = await signupRes.json();

      if (!signupRes.ok) {
        const errorMessage = data.message || "Signup failed.";
        throw new Error(errorMessage);
      }

      // Store tokens and user data
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("refresh_token", data.data.refresh_token);
      localStorage.setItem("user_id", data.data.user_id);
      localStorage.setItem("company_id", data.data.company_id);
      localStorage.setItem("role", data.data.role);

      // Redirect
      navigate("/dashboard");

      // alert("Signup successful!");
    } catch {
      setOtpError("OTP verification or signup failed.");
    }
  };

  return (
    <div className="w-full">
      <div className=" grid grid-cols-12 ">
        <div
          style={{ backgroundImage: "url('/login/loginBg.jpg')" }}
          className=" col-span-6 flex items-center justify-center h-screen w-full bg-cover bg-center bg-no-repeat  "
        >
          <img
            src="/login/login.png"
            alt="login"
            className=" max-h-[500px] object-contain"
          />
        </div>
        <div className=" col-span-6 flex items-center justify-center  bg-white">
          <div className=" w-[420px] mx-auto  ">
            <div className=" flex flex-col gap-1 items-center justify-center">
              <img
                src="/logo-buildxup.png"
                alt="logo"
                className=" h-12 object-contain"
              />
              <h1 className=" text-4xl font-bold">Signup</h1>
              <p className=" mt-1 text-center text-fadetext text-base font-medium">
                Clarity gives you the blocks and components you need to create a
                truly professional website.
              </p>
            </div>

            <div className="flex justify-center items-center  ">
              <div className=" p-6 rounded-lg  w-full max-w-md">
                {!otpSent ? (
                  <>
                    {[
                      "name",
                      "email",
                      "phone",
                      "password",
                      "confirmPassword",
                    ].map((field) => (
                      <div key={field} className="mb-4">
                        <label className="block text-sm mb-1 capitalize">
                          {field.replace(/([A-Z])/g, " $1")}
                        </label>
                        <input
                          type={
                            field.toLowerCase().includes("password")
                              ? "password"
                              : "text"
                          }
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                    ))}

                    {generalError && (
                      <p className="text-red-600 text-sm mb-2">
                        {generalError}
                      </p>
                    )}

                    <button
                      onClick={handleSendOtp}
                      className="w-full py-2 mt-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Signup
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-center mb-2 text-sm text-gray-600">
                      Enter the OTP sent to <strong>{formData.email}</strong>
                    </p>
                    <div className="flex justify-center gap-2 mb-2 mt-5">
                      {[...Array(otpLength)].map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          ref={(el) => (inputs.current[index] = el)}
                          onChange={(e) => handleChange(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          className="w-12 h-12 text-center border rounded-md outline-none"
                        />
                      ))}
                      <button
                        onClick={handleResetOtp}
                        className="text-gray-500 text-xl hover:text-gray-700 w-12 h-12 text-center border rounded-md "
                        title="Reset OTP"
                      >
                        &#x21bb;
                      </button>
                    </div>

                    {otpError && (
                      <p className="text-red-600 text-sm text-center mb-2">
                        {otpError}
                      </p>
                    )}
                    <div className=" flex gap-5 items-center  justify-center mt-5">
                      <button
                        onClick={handleSubmitOtp}
                        className="py-2 px-6 bg-white text-gray-600 rounded-md hover:bg-gray-50 border"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleSubmitOtp}
                        className="py-2 px-6 bg-primary text-white rounded-md hover:bg-darkBlue "
                      >
                        Submit OTP
                      </button>
                    </div>
                  </>
                )}

                <p className="mt-4 text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-600 hover:underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
