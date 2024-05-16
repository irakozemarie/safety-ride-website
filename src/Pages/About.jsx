import React from "react";
import { NavLink, Link } from "react-router-dom"; 
import { GrFormNext } from "react-icons/gr";
const About = () => {
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
                  to="/about"
                  className="text-white font-semibold text-lg"
                  style={{ cursor: "pointer" }}
                >
                  About
                </NavLink>
              </div>
            </nav>
            <h1 class="text-3xl text-white font-extrabold sm:text-5xl">
              Our Story of Service and Excellence
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=" car5"
                src="/car5.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl text-green-600 font-bold sm:text-4xl">
                Fueling Connections The Story behind Safety Ride
              </h2>

              <p className="mt-4 text-gray-600">
                Safety Rides Connect is a simple ride-sharing service that
                connects car owners with passengers who need transportation. Our
                platform allows users to easily request rides, track their
                journey in real-time, and securely make payments.
              </p>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green-100 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl text-green-600 font-bold sm:text-4xl">
              Redefining Transportation for a Connected World
            </h2>

            <p className="mt-4 text-gray-500">
              Safety Rides Connect is a simple ride-sharing service that
              connects car owners with passengers who need transportation. Our
              platform allows users to easily request rides, track their journey
              in real-time, and securely make payments.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-black">Our Mission</h2>

              <p className="mt-1 text-sm text-gray-500">
                Our mission is to provide a safe, reliable, and affordable
                transportation option for everyone, while also empowering car
                owners to earn extra income by sharing their rides.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-black">Our vision</h2>

              <p className="mt-1 text-sm text-gray-500">
                At Safety Rides Connect , we are committed to ensuring a
                seamless experience for both passengers and car owners. We
                strive to continuously improve our platform and services to meet
                the evolving needs of our users.
              </p>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=" car5"
                src="/car5.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl text-green-600 font-bold sm:text-4xl">
                Contact Us for Any Inquiries or Assistance
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
