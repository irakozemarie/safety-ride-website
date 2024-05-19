import { CiLocationOn } from "react-icons/ci";
const Map = () => {
  return (
    <div className="flex items-center justify-center">
      <form
        action="#"
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <img src="/images.jpeg" alt="map" className="rounded-lg w-full" />
        <div>
          <label htmlFor=" Pickup Location" className="sr-only">
            Pickup Location
          </label>

          <div className="relative">
            <input
              type=" text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter  Pickup Location"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <CiLocationOn />
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="Dropup Location" className="sr-only">
            Dropup Location
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Dropup Location"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <CiLocationOn />
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          confirm
        </button>
      </form>
    </div>
  );
};
export default Map;
