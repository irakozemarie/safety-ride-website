import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests

const OTP = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [formData, setFormData] = useState({
    otp: "",
  });

  const [errors, setErrors] = useState({
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clearing previous error if any
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    // Modify handleSubmit to be asynchronous
    e.preventDefault();

    // Validation checks
    if (formData.otp.length !== 6) {
      setErrors({
        ...errors,
        otp: "OTP must be 6 characters long",
      });
      return;
    }
    try {
      // Make a POST request to your API endpoint using axios
      const response = await axios.post(
        "https://safety-drive-connect-backend-project-2.onrender.com/api/v1/verify",
        {
          otp: formData.otp,
        }
      );

      console.log("OTP verification successful:", response.data);

      // Navigate to login page upon successful OTP verification
      navigate("/Profile");
    } catch (error) {
      // If there's an error from the API
      console.error("OTP verification failed:", error);
      // You can set an appropriate error message for the user
      setErrors({
        ...errors,
        otp: "OTP verification failed. Please try again.",
      });
    }
  };

  return (
    <div className="bg-green-200 p-36">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="border-2 text-black rounded-lg px-4 py-2 w-full bg-white placeholder-pink-600::placeholder"
            type="text"
            id="otp"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            placeholder="Enter OTP"
          />
          {errors.otp && <p className="text-red-500">{errors.otp}</p>}
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-green-700 px-5 py-3 text-sm font-medium text-green-100 mb-4"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default OTP;
