import React, { useState } from "react";

const DriverDashboard = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      imageLocation: "./girl1.jpg",
      customername: "chance",
      customerTel: "0787701373",
      pickuplocation: "kicukiro",
      status: "pending",
    },
    {
      id: 2,
      imageLocation: "./girl2.jpg",
      customername: "irakoze",
      customerTel: "0787701370",
      pickuplocation: "Kimironko",
      status: "pending",
    },
    {
      id: 3,
      imageLocation: "./girl1.jpg",
      customername: "chance",
      customerTel: "0787701073",
      pickuplocation: "Remera",
      status: "pending",
    },
  ]);

  const handleAccept = (id) => {
    const updatedBookings = bookings.map((booking) => {
      if (booking.id === id) {
        return { ...booking, status: "accepted" };
      }
      return booking;
    });
    setBookings(updatedBookings);
  };

  const handleDecline = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
  };

  return (
    <>
      <div className="container mx-auto mt-40">
        <h1 className="text-2xl font-bold my-4">Driver Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-x-10 ">
          {bookings.map((booking) => (
            <div key={booking.id} className=" rounded-lg ">
              <img
                src={booking.imageLocation}
                alt="Booking"
                className=" mb-2 size-16 rounded-full"
              />
              <p className="text-lg font-semibold">{booking.customername}</p>
              <p className="text-lg font-semibold">{booking.customerTel}</p>
              <p className="text-lg font-semibold">{booking.pickuplocation}</p>

              <div className="mt-2">
                {booking.status === "pending" && (
                  <div>
                    <button
                      onClick={() => handleAccept(booking.id)}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDecline(booking.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Decline
                    </button>
                  </div>
                )}
                {booking.status === "accepted" && (
                  <p className="text-green-500 font-semibold">Accepted</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default DriverDashboard;

// import React, { useState } from "react";

// const BookingCard = ({ booking, handleAccept, handleDecline }) => {
//   return (
//     <div className="bg-gray-200 p-4 rounded-lg ">
//       <img
//         src={booking.imageLocation}
//         alt="Booking"
//         className="mb-2 size-16 rounded-full"
//       />
//       <p className="text-lg font-semibold">{booking.customername}</p>
//       <p className="text-lg font-semibold">{booking.customerTel}</p>
//       <p className="text-lg font-semibold">{booking.pickuplocation}</p>
//       <div className="mt-2">
//         {booking.status === "pending" && (
//           <div>
//             <button
//               onClick={() => handleAccept(booking.id)}
//               className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
//             >
//               Accept
//             </button>
//             <button
//               onClick={() => handleDecline(booking.id)}
//               className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Decline
//             </button>
//           </div>
//         )}
//         {booking.status === "accepted" && (
//           <p className="text-green-500 font-semibold">Accepted</p>
//         )}
//       </div>
//     </div>
//   );
// };

// const DriverDashboard = () => {
//   const [bookings, setBookings] = useState([
//     {
//       id: 1,
//       imageLocation: "./girl1.jpg",
//       customername: "chance",
//       customerTel: "0787701373",
//       pickuplocation: "kicukiro",
//       status: "pending",
//     },
//     {
//       id: 2,
//       imageLocation: "./girl2.jpg",
//       customername: "irakoze",
//       customerTel: "0787701370",
//       pickuplocation: "Kimironko",
//       status: "pending",
//     },
//     {
//       id: 3,
//       imageLocation: "./girl1.jpg",
//       customername: "chance",
//       customerTel: "0787701073",
//       pickuplocation: "Remera",
//       status: "pending",
//     },
//   ]);

//   const handleAccept = (id) => {
//     const updatedBookings = bookings.map((booking) => {
//       if (booking.id === id) {
//         return { ...booking, status: "accepted" };
//       }
//       return booking;
//     });
//     setBookings(updatedBookings);
//   };

//   const handleDecline = (id) => {
//     const updatedBookings = bookings.filter((booking) => booking.id !== id);
//     setBookings(updatedBookings);
//   };

//   return (
//     <>
//       <div className="container mx-auto mt-40">
//         <h1 className="text-2xl font-bold my-4">Driver Dashboard</h1>
//         <div className="grid grid-cols-3 gap-4">
//           {bookings.map((booking) => (
//             <BookingCard
//               key={booking.id}
//               booking={booking}
//               handleAccept={handleAccept}
//               handleDecline={handleDecline}
//             />
//           ))}
//         </div>
//       </div>
//       <br />
//       br
//     </>
//   );
// };

// export default DriverDashboard;
