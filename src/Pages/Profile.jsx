import React, { useState } from "react";

function ProfileForm() {
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [languagesSpoken, setLanguagesSpoken] = useState("");
  const [bio, setBio] = useState("");
  const [drivingLicenseCategory, setDrivingLicenseCategory] = useState("");
  const [drivingLicensePicture, setDrivingLicensePicture] = useState("");
  const [hasCar, setHasCar] = useState(null);
  const [costPerHour, setCostPerHour] = useState("");
  const [errors, setErrors] = useState({});

  const validatePhoneNumber = (value) => {
    return /^\d+$/.test(value); // Check if value contains only numbers
  };
  const validateCostPerHour = (value) => {
    return /^\d*\.?\d{0,2}$/.test(value); // Check if value is a valid number with up to two decimal places
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (value.length <= 13) {
      setPhoneNumber(value);
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone number cannot exceed 12 characters.",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Validation checks
    if (!profilePicture) {
      errors.profilePicture = "Profile picture is required";
    }

    if (!address) {
      errors.address = "Address is required";
    }
    if (!costPerHour) {
      errors.costPerHour = "Please Enter Cost Per Hour";
    }

    if (!phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber = "Phone number must contain only numbers";
    } else if (phoneNumber.length !== 12) {
      errors.phoneNumber = "Phone number must be 12 digits";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!bio) {
      errors.bio = "Bio is required";
    }

    if (!drivingLicenseCategory) {
      errors.drivingLicenseCategory = "Driving License Category is required";
    }

    if (!drivingLicensePicture) {
      errors.drivingLicensePicture = "Driving License Picture is required";
    }

    if (languagesSpoken.length === 0) {
      errors.languagesSpoken = "At least one language must be selected";
    }

    if (!hasCar) {
      errors.hasCar = "Please select an option";
    }

    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      console.log("Form submitted with data:", {
        profilePicture,
        address,
        costPerHour,
        phoneNumber,
        gender,
        bio,
        drivingLicenseCategory,
        drivingLicensePicture,
        languagesSpoken,
        hasCar,
      });
    } else {
      // Update errors state with validation errors
      setErrors(errors);
    }
  };
  const handleLanguageChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setLanguagesSpoken((prevLanguages) => [...prevLanguages, value]);
    } else {
      setLanguagesSpoken((prevLanguages) =>
        prevLanguages.filter((lang) => lang !== value)
      );
    }
  };

  return (
    <div className="flex justify-center bg-white p-36">
      <div>
        <h1
          className="text-center text-2xl mb-32"
          style={{
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          Complete Profile
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-8 w-full px-6 py-8 mt-10 mb-11 bg-green-300 rounded-lg shadow-lg"
        >
          <div>
            {/* Profile Picture */}
            <label className="block text-black">
              Add Profile Picture:
              <input
                type="file"
                onChange={(e) => setProfilePicture(e.target.value)}
                className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm"
              />
              {errors.profilePicture && (
                <p className="text-red-500">{errors.profilePicture}</p>
              )}
            </label>
            <br />

            {/* Address */}
            <label className="block text-black">
              Address:
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm"
              />
              {errors.address && (
                <p className="text-red-500">{errors.address}</p>
              )}
            </label>
            <br />

            {/* Cost Per Hour */}
            <label className="block text-black">
              Cost per Hour:
              <div className="flex items-center">
                <span className="bg-cyan-200 text-black p-4 text-sm rounded-l-lg border-gray-200 shadow-sm">
                  $
                </span>
                <input
                  type="text"
                  value={costPerHour}
                  onChange={(e) =>
                    validateCostPerHour(e.target.value) &&
                    setCostPerHour(e.target.value)
                  }
                  className="w-full rounded-r-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm"
                  placeholder="Enter amount in Dollars"
                />
              </div>
              {errors.costPerHour && (
                <p className="text-red-500">{errors.costPerHour}</p>
              )}
            </label>
            <br />

            {/* Phone Number */}
            <label className="block text-black">
              Phone Number:
              <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                pattern="\d{0,13}"
                className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm"
                placeholder="Phone Number (e.g., +250782387280)"
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber}</p>
              )}
            </label>
            <br />

            {/* Gender */}
            <label className="block text-black">
              Gender:
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500">{errors.gender}</p>}
            </label>
            <br />
          </div>

          <div>
            {/* Bio */}
            <label className="block text-black">
              Add Bio:
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm"
              ></textarea>
              {errors.bio && <p className="text-red-500">{errors.bio}</p>}
            </label>
            <br />
            {/* Driving License Category */}
            <label className="block text-black">
              Driving License Category:
              <select
                value={drivingLicenseCategory}
                onChange={(e) => setDrivingLicenseCategory(e.target.value)}
                className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm"
              >
                <option value="">Select</option>
                <option value="A">B</option>
                <option value="B">B1</option>
                <option value="C">C</option>
                <option value="D">C1</option>

              </select>
              {errors.drivingLicenseCategory && (
                <p className="text-red-500">{errors.drivingLicenseCategory}</p>
              )}
            </label>
            <br />

            {/* Driving License Picture */}
            <label className="block text-black">
              Upload Driving License:
              <input
                type="file"
                onChange={(e) => setDrivingLicensePicture(e.target.value)}
                className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm"
              />
              {errors.drivingLicensePicture && (
                <p className="text-red-500">{errors.drivingLicensePicture}</p>
              )}
            </label>
            <br />

            {/* Languages Spoken */}
            <label className="block text-black">
              Spoken Languages:
              <div>
                <div className="flex flex-col items-center bg-cyan-200">
                  <label className="inline-flex items-center w-full">
                    <input
                      type="checkbox"
                      value="English"
                      checked={languagesSpoken.includes("English")}
                      onChange={handleLanguageChange}
                      className="form-checkbox h-5 w-5 text-black"
                    />
                    <span className="ml-2">English</span>
                  </label>
                  <label className="inline-flex items-center w-full">
                    <input
                      type="checkbox"
                      value="French"
                      checked={languagesSpoken.includes("French")}
                      onChange={handleLanguageChange}
                      className="form-checkbox h-5 w-5 text-black"
                    />
                    <span className="ml-2">French</span>
                  </label>
                  <label className="inline-flex items-center w-full">
                    <input
                      type="checkbox"
                      value="Swahili"
                      checked={languagesSpoken.includes("Swahili")}
                      onChange={handleLanguageChange}
                      className="form-checkbox h-5 w-5 text-black"
                    />
                    <span className="ml-2">Swahili</span>
                  </label>
                  <label className="inline-flex items-center w-full">
                    <input
                      type="checkbox"
                      value="Kinyarwanda"
                      checked={languagesSpoken.includes("Kinyarwanda")}
                      onChange={handleLanguageChange}
                      className="form-checkbox h-5 w-5 text-black"
                    />
                    <span className="ml-2">Kinyarwanda</span>
                  </label>
                </div>
              </div>
              {errors.languagesSpoken && (
                <p className="text-red-500">{errors.languagesSpoken}</p>
              )}
            </label>
            <br />

            {/* Car Ownership */}
            <div className="flex items-center">
              <label className="block text-black mr-4">Do you own a car?</label>
              <div className="flex items-center">
                <label className="mr-4 cursor-pointer flex items-center">
                  <input
                    type="radio"
                    name="carOwnership"
                    value="yes"
                    checked={hasCar === true}
                    onChange={() => setHasCar(true)}
                    className="hidden"
                  />
                  <div
                    className={`w-6 h-6 border rounded-full border-black flex items-center justify-center focus-within:border-black ${
                      hasCar ? "bg-cyan-700" : ""
                    }`}
                  >
                    <span className="sr-only">Yes</span>
                  </div>
                  <span className="ml-2 text-black">Yes</span>
                </label>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="radio"
                    name="carOwnership"
                    value="no"
                    checked={hasCar === false}
                    onChange={() => setHasCar(false)}
                    className="hidden"
                  />
                  <div
                    className={`w-6 h-6 border rounded-full border-black flex items-center justify-center focus-within:border-black ${
                      !hasCar ? "bg-cyan-700" : ""
                    }`}
                  >
                    <span className="sr-only">No</span>
                  </div>
                  <span className="ml-2 text-black">No</span>
                </label>
              </div>
            </div>
            {errors.hasCar && <p className="text-red-500">{errors.hasCar}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-2 w-full rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-black mb-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
