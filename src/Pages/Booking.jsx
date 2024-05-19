import React, { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import Popup from "../Components/Popup"; // Import the Profile1 component
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const Booking = () => {
  const position = { lat: -1.980714053609906, lng: 30.10255375275956 };
  const [showPopup, setShowPopup] = useState(false); // State to manage visibility of Profile1

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // Show Profile1 component when form is submitted
  };

  const handleClose = () => {
    setShowPopup(false); // Close Profile1 component
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="mb-0 mt-20 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <APIProvider apiKey="AIzaSyBzXTSmfDvaLJMbDMZhkuo14dzjZQbUxdQ">
          <div style={{ height: "50vh", width: "100vh", marginTop: "10vh" }}>
            <Map zoom={7} center={position}>
              <AdvancedMarker position={position}>
                <Pin
                  background={"grey"}
                  borderColor={"green"}
                  glyphColor={"purple"}
                ></Pin>
              </AdvancedMarker>
            </Map>
          </div>
        </APIProvider>

        <div>
          <label htmlFor="PickupLocation" className="sr-only">
            Pickup Location
          </label>
          <div className="relative">
            {/* <Autocomplete
              apiKey={AIzaSyBzXTSmfDvaLJMbDMZhkuo14dzjZQbUxdQ}
              onPlaceSelected={(place) => {
                console.log(place);
              }}
            /> */}

            <input
              type="text"
              id="PickupLocation"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Pickup Location"
            />
          </div>
        </div>
        <div>
          <label htmlFor="DropupLocation" className="sr-only">
            Dropup Location
          </label>
          <div className="relative">
            <input
              type="text"
              id="DropupLocation"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Dropup Location"
            />
          </div>
        </div>
        <button
          type="submit"
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Pickup
        </button>
      </form>
      {/* Conditional rendering to show Profile1 component */}
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative rounded-lg border border-gray-200 shadow-lg bg-white">
            <button
              className="absolute -top-3 -right-3 rounded-full border border-gray-300 bg-gray-100 p-1"
              onClick={handleClose}
            >
              <span className="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <Popup />
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
