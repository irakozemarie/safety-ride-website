import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isStrongPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [role, setRole] = useState("");
  const [roleError, setRoleError] = useState("");

  const isValid = (e) => {
    e.preventDefault();
    let valid = true;

    if (!userName.trim()) {
      setUserNameError("Username is required");
      valid = false;
    } else {
      setUserNameError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Email is not valid");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else if (!isStrongPassword(password)) {
      setPasswordError(
        "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!role.trim()) {
      setRoleError("Please Select a Role");
      valid = false;
    } else {
      setRoleError("");
    }

    return valid;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isValid(e)) return; // Validate form fields

    try {
      const response = await axios.post(
        "https://safety-drive-connect-backend-project-2.onrender.com/api/v1/signup",
        {
          userName: userName,
          email: email,
          password: password,
          role: role, // Include selected role in the signup data
        }
      );
      console.log(response);
      setTimeout(() => {
        navigate("/OTP");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-cyan-700 border-black min-h-screen flex justify-center items-center p-36">
      <div className="bg-cyan-300 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-italic mb-4 text-black">Sign Up</h2>
        <form onSubmit={isValid}>
          <div className="mb-4">
            <input
              className="border-2 rounded-lg text-black px-4 py-2 w-full bg-cyan-200 placeholder-pink-600::placeholder"
              type="text"
              id="username"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
            />
            {userNameError && <p className="text-red-500">{userNameError}</p>}
          </div>
          <div className="mb-4">
            <input
              className="border-2 rounded-lg px-4 py-2 text-black w-full bg-cyan-200 placeholder-pink-600::placeholder"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
          <div className="mb-4">
            <input
              className="border-2 text-black rounded-lg px-4 py-2 w-full bg-cyan-200 placeholder-pink-600::placeholder"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </div>

          {/* New select input for role */}
          <div className="mb-4">
            <select
              className="border-2 rounded-lg px-4 py-2 text-black w-full bg-cyan-200"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="customer">Customer</option>
              <option value="driver">Driver</option>
            </select>
            {roleError && <p className="text-red-500">{roleError}</p>}
          </div>
          <button
            className="bg-cyan-500 hover:bg-cyan-700 text-black font-italic py-2 px-4 rounded-lg w-full"
            type="submit"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
