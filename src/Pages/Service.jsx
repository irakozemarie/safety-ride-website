import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";
import { FaCar } from "react-icons/fa6";
import { GrCaretDown } from "react-icons/gr";
import Cards from "../Components/card";
const Service = () => {
  return (
    <>
      <section className="relative bg-[url(car1.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto max-w-xl text-center">
            <nav className=" flex flex-row  p-4">
              <div className="container mx-auto flex   justify-center items-center">
                <Link to="/" className="text-white font-semibold text-lg ">
                  Home
                </Link>

                <NavLink
                  to="/"
                  className="text-green-600 mr-6 ml-6"
                  style={{ cursor: "pointer" }}
                >
                  <GrFormNext className="text-2xl" />{" "}
                </NavLink>

                <NavLink
                  to="/service"
                  className="text-white font-semibold text-lg"
                  style={{ cursor: "pointer" }}
                >
                  Service
                </NavLink>
              </div>
            </nav>
            <h1 class="text-3xl text-white font-bold sm:text-4xl">
              Experience Convenience Our Service Offerings
            </h1>
          </div>
        </div>
      </section>
      <div>
        <Cards />
      </div>
      <div className="w-full h-full bg-green-100 ">
        <br />
        <div className="md:flex md:flex-col md:items-center md:justify-center mx-auto md:mx-0">
          <h3 className="text-green-500 text-4xl">
            Simple Steps to Book Your Ride
          </h3>
          <br />
          <p className="text-slate-800">
            Neque porro quisquam est qui dolorem ipsum quia non numquam eius
            modi tempora incidunt ut labore et
          </p>
        </div>
        <br />
        <br />

        <div className="md:flex md:flex-row md:items-start md:justify-evenly mx-auto md:mx-0">
          <div className="md:mr-10">
            <div className="flex flex-col gap-5">
              <h3 className="text-green-500 text-2xl">
                1. Type Your Destination
              </h3>
              <p>
                Totam facilis laudantium cum accusamus ullam <br /> voluptatibus
                commodi numquam, er
              </p>
            </div>
            <br />

            <div className="bg-green-500 h-1">
              <hr />
            </div>
            <br />

            <div className="flex flex-col gap-5">
              <h3 className="text-2xl text-green-500">
                2. Confirm Pick-up Location
              </h3>
              <p>
                Totam facilis laudantium cum accusamus ullam <br /> voluptatibus
                commodi numquam, er
              </p>
            </div>
            <br />
            <br />

            <div className="flex flex-col">
              <h3 className="text-2xl text-green-500">
                3. Choose Payment Method
              </h3>
              <br />
              <p>
                Totam facilis laudantium cum accusamus ullam <br /> voluptatibus
                commodi numquam, er
              </p>
            </div>
            <br />
            <div className="flex flex-col space-x-30">
              <h3 className="text-2xl text-green-500">
                4. Driver On The Way To Pick-up
              </h3>
              <p>
                Totam facilis laudantium cum accusamus ullam <br /> voluptatibus
                commodi numquam, er
              </p>
            </div>
          </div>

          <div>
            <img src="/card0.png" alt="" className="w-64 h-68" />
          </div>
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="/car4.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center ">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 "></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl  text-green-500 font-bold sm:text-3xl">
                  Putting Your Safety in The Spotlight Quality Rides
                </h2>

                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                  beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta.
                </p>
                <br />
                <br />
                <div className="flex flex-row justify-between">
                  <br />
                  <div className="flex sm:flex-col">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-300">
                      <GrCaretDown />
                    </div>

                    <h3 className=" text-black  text-2xl bold">
                      Safety Measures
                    </h3>

                    <p className="text-gray-600">
                      Sed adipisci velit, sed quia <br />
                      non numquam eius modi
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-300">
                      <FaCar />
                    </div>

                    <h3 className=" text-black  text-2xl bold">
                      Well-Maintained Vehicles
                    </h3>

                    <p className="text-gray-600">
                      Sed adipisci velit, sed quia <br />
                      non numquam eius modi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Service;
