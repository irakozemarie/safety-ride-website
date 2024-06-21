import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
    return emailRegex.test(email);
  };

  const isStrongPassword = (password) => {
    const passwordRegex = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );
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
  const [signupMessage, setSignupMessage] = useState("");

  const isValid = () => {
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
    }
    //  else if (!isStrongPassword(password)) {
    //   setPasswordError(
    //     "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    //   );
    //   valid = false;
    // }
    else {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!isValid()) return;

    const form = {
      email: email,
      password: password,
      userName: userName,
      role: role,
    };

    console.log(form);

    try {
      const res = await fetch(
        "https://safety-drive-connect-backend-project-2.onrender.com/api/v1/signup",
        {
          method: "POST",
          body: JSON.stringify(form),
          "Content-Type": "application/json",
        }
      );
      // const response = await axios.post(
      //   "https://safety-drive-connect-backend-project-2.onrender.com/api/v1/signup",
      //   { email, password, userName, role }
      // );
      const data = await res.json();
      console.log("response", data);
      // setSignupMessage("Signup successful!");
      // Optionally, you can redirect the user after successful signup
      // navigate('/success');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white border-blackflex flex-col justify-center min-h-screen overflow-hidden p-32">
      <div className="bg-green-200 p-24 m-auto rounded-xl shadow-xl w-[782px] ">
        <h2 className="text-3xl font-semibold text-center text-black uppercase mb-16">
          Sign Up
        </h2>
        {signupMessage && (
          <p className="text-green-500 text-center">{signupMessage}</p>
        )}
        <form>
          <div className="mb-4">
            <input
              className="border-2 rounded-lg text-black px-4 py-2 w-full bg-white"
              type="text"
              id="username"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
            />
            {userNameError && <p className="text-red-500">{userNameError}</p>}
          </div>
          <br />
          <div className="mb-4">
            <input
              className="border-2 rounded-lg px-4 py-2 text-black w-full bg-white placeholder-pink-600::placeholder"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
          <br />
          <div className="mb-4">
            <input
              className="border-2 text-black rounded-lg px-4 py-2 w-full bg-white placeholder-pink-600::placeholder"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </div>
          <br />

          {/* New select input for role */}

          <div className="mb-4">
            <select
              className="border-2 rounded-lg px-4 py-2 text-black w-full bg-white"
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
            className="w-[150px] px-4 py-2 tracking-wide bg-green-700 rounded-xl text-white transition-colors duration-200 transform bg-black-700 hover: bg-white-600 focus:outline-none ml-56 focus:bg-black-600"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
