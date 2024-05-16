import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation
    const errors = {};
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    setErrors(errors);
    // Submit form if no errors
    if (Object.keys(errors).length === 0) {
      // Place your form submission logic here
      console.log("Form submitted:", { email, password });
    }
  };

  return (
    <div className="flex justify-center bg-cyan-700 p-36">
      <form
        onSubmit={handleSubmit}
        className="w-full px-6 py-8 mt-10 mb-11 bg-cyan-300 rounded-lg shadow-lg"
      >
        <p className="text-center text-lg font-medium text-black mb-4">
          LOG IN
        </p>

        <div className="mb-4">
          <label htmlFor="email" className="sr-onl"></label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={`w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm ${
              errors.email ? "text-red-500" : ""
            }`}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={`w-full rounded-lg border-gray-200 p-4 bg-cyan-200 text-black text-sm shadow-sm ${
              errors.password ? "border-red-500" : ""
            }`}
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-black mb-4"
        >
          Sign in
        </button>

        <p className="text-center text-sm text-gray-500 mb-4">
          No account?{" "}
          <NavLink className="text-black" to="/Signup">
            Sign Up
          </NavLink>
        </p>
        <p className="text-center text-sm text-gray-500 mb-4">
          Forgot password?{" "}
          <NavLink to="/reset" className="text-black">
            Reset
          </NavLink>
        </p>
        <p className="text-center text-sm text-gray-500">
          Change password{" "}
          <NavLink to="/Update" className="text-black">
            Change
          </NavLink>
        </p>

        <p className="text-center text-sm text-gray-500">
          Change password{" "}
          <NavLink to="/Profile" className="text-black">
            Profile
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login;
