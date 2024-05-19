// // const Popup = () => {
// //   return (
// //     <div className="relative rounded-lg border border-gray-200 shadow-lg">
// //       {/* <button className="absolute -end-1 -top-1 rounded-full border border-gray-300 bg-gray-100 p-1">
// //         <span className="sr-only">Close</span>
// //         <svg
// //           xmlns="http://www.w3.org/2000/svg"
// //           className="h-3 w-3"
// //           viewBox="0 0 20 20"
// //           fill="currentColor"
// //         >
// //           <path
// //             fillRule="evenodd"
// //             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// //             clipRule="evenodd"
// //           />
// //         </svg>
// //       </button> */}

// //       <div className="flex items-center gap-4 p-4">
// //         <ul>
// //           <li className="flex flex-row ">
// //             <img
// //               alt=""
// //               src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
// //               className="size-12 rounded-lg object-cover"
// //             />

// //             <div>
// //               <p className="font-medium text-gray-900">Carol Daines</p>

// //               <p className="line-clamp-1 text-sm text-gray-500">
// //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
// //                 Eveniet, laborum?
// //               </p>
// //             </div>
// //           </li>
// //           <br />
// //           <li className="flex flex-row">
// //             <img
// //               alt=""
// //               src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
// //               className="size-12 rounded-lg object-cover"
// //             />

// //             <div>
// //               <p className="font-medium text-gray-900">Carol Daines</p>

// //               <p className="line-clamp-1 text-sm text-gray-500">
// //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
// //                 Eveniet, laborum?
// //               </p>
// //             </div>
// //           </li>
// //           <br />
// //           <li className="flex flex-row">
// //             <img
// //               alt=""
// //               src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
// //               className="size-12 rounded-lg object-cover"
// //             />

// //             <div>
// //               <p className="font-medium text-gray-900">Carol Daines</p>

// //               <p className="line-clamp-1 text-sm text-gray-500">
// //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
// //                 Eveniet, laborum?
// //               </p>
// //             </div>
// //           </li>
// //           <br />-
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };
// // export default Popup;

import React, { useState } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage the visibility of the popup

  // Function to close the popup
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div className="inset-0 flex justify-center items-center">
          <div className="relative w-96 rounded-lg border border-gray-200 shadow-lg bg-white p-4">
            <a href="#link1" className="block mb-4">
              <div className="flex items-center gap-2">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="size-12 rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">Carol Daines</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet, laborum?
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="block rounded bg-white px-4 py-2 text-xs font-medium text-green-500 shadow hover:text-green-500 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
                >
                  Assign Driver
                </button>
              </div>
            </a>
            <a href="#link2" className="block mb-4">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="size-12 rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">Carol Daines</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet, laborum?
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="block rounded bg-white px-4 py-2 text-xs font-medium text-green-500 shadow hover:text-green-500 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
                >
                  Assign Driver
                </button>
              </div>
            </a>
            <a href="#link3" className="block mb-4">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="size-12 rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">Carol Daines</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet, laborum?
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="block rounded bg-white px-4 py-2 text-xs font-medium text-green-500 shadow hover:text-green-500 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
                >
                  Assign Driver
                </button>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
