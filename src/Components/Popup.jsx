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
        <div className="inset-0 flex justify-center items-center ">
          <div className="relative w-96 rounded-lg border border-gray-200 shadow-lg bg-white p-4 overflow-y-scroll max-h-80">
            <u className="list-none">
              <li>
                <a href="#link3" className="block mb-4 no-underline">
                  <div className="flex items-center gap-4 ">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="size-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Carol Daines</p>
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eveniet, laborum?
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
              </li>
              <li>
                <a href="#link3" className="block mb-4 no-underline">
                  <div className="flex items-center gap-4 no-underline">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="size-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Carol Daines</p>
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eveniet, laborum?
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
              </li>
              <li>
                <a href="#link3" className="block mb-4 no-underline">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="size-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Carol Daines</p>
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eveniet, laborum?
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
              </li>
              <li>
                <a href="#link3" className="block mb-4 no-underline">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="size-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Carol Daines</p>
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eveniet, laborum?
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
              </li>
              <li>
                <a href="#link3" className="block mb-4 no-underline">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="size-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Carol Daines</p>
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eveniet, laborum?
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
              </li>
              <li>
                <a href="#link3" className="block mb-4 no-underline">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="size-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Carol Daines</p>
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eveniet, laborum?
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
              </li>
              <li>
                <a href="#link3" className="block mb-4 no-underline">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="size-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Carol Daines</p>
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eveniet, laborum?
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
              </li>
            </u>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
