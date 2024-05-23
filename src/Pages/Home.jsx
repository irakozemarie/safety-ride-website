import { FaCar } from "react-icons/fa6";
import { GrCaretDown } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted successfully!");
    } else {
      console.log("Form submission failed. Please check your inputs.");
    }
  };
  const navigateToBooking = () => {
    navigate("/booking");
  };
  return (
    <>
      <section className="relative bg-[url(car1.jpg)] bg-cover  rounded-lg m-0 bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <div>
              <h1
                style={{ fontSize: 45, color: "white" }}
                className="font-extralight"
              >
                Get Where You Need to Go
              </h1>
              <p
                style={{ fontSize: 28 }}
                className="font-extralight text-white sm:block"
              >
                {/* {" "} */}
                Safely and Affordably.{" "}
              </p>
            </div>

            <p
              className="mt-4  text-gray-300 font-extralight "
              style={{ fontSize: 20 }}
            >
              Ride service refers to the transportation of passengers from one
              location to the another using a hired vehicle. It offers a
              convenient transport
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {" "}
              <Link to={"/booking"}>
                <button className="w-full rounded bg-green-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-500 focus:outline-none focus:ring active:bg-green-500 sm:w-auto">
                  Book your Ride
                </button>
              </Link>
              <Link to={"/Login"}>
                <button
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-500 shadow hover:text-green-500 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
                >
                  Become a Driver
                </button>
              </Link>
            </div>
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
                Make your travel experience <br />
                as easy and stress-free as possible
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>
              <br />

              <div className="flex flex-row flex-wrap gap-5 text-gray-600">
                <div className="w-full sm:w-auto mb-5 sm:mb-0">
                  <div className="flex flex-row gap-2">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-300 opacity-1">
                      <AiOutlineCheck />
                    </div>
                    <p>Easy-to-use website app</p>
                  </div>
                  <br />
                  <div className="flex flex-row gap-2">
                    <div>
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-300">
                        <AiOutlineCheck />
                      </div>
                    </div>
                    <p> Professional Drivers</p>
                  </div>
                </div>
                <div className="w-full sm:w-auto">
                  <div className="flex flex-row gap-2">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-300">
                      <AiOutlineCheck />
                    </div>
                    <p>Clear and transparent prices</p>
                  </div>
                  <br />
                  <div className="flex flex-row gap-2">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-300">
                      <AiOutlineCheck />
                    </div>
                    <p>Diverse vehicles for your needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative  lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="/car4.jpg"
                  className="absolute inset-0 h-full  rounded-lg w-full object-cover"
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
      <div className="w-full h-full rounded-lg bg-green-100 ">
        <br />
        <div className="md:flex md:flex-col md:items-center md:justify-center mx-auto md:mx-0">
          <h3 className=" mt-1 text-green-500 text-4xl">
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
              <p className="pb-10">
                Totam facilis laudantium cum accusamus ullam <br /> voluptatibus
                commodi numquam, er
              </p>
            </div>
          </div>

          <div>
            <img src="/card0.png" alt="" className="w-56 h-66" />
          </div>
        </div>
      </div>
      <section className="bg-white text-gray">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl text-green-500 font-bold sm:text-4xl">
              The Ultimate Taxi Service Experience Awaits
            </h2>

            <p className="mt-4 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-100 hover:shadow-green-100"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-green-500"
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

              <h2 className="mt-4 text-xl font-bold text-black">
                Airport Tranfers
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-100 hover:shadow-green-100"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-green-500"
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

              <h2 className="mt-4 text-xl font-bold text-black">
                Hourly Rental
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-100 hover:shadow-green-100"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-green-500"
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

              <h2 className="mt-4 text-xl font-bold text-black">
                Ride Sharing
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-100 hover:shadow-green-100"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-green-500"
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

              <h2 className="mt-4 text-xl font-bold text-black">
                Packaging Delivery
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-100 hover:shadow-green-100"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-green-500"
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

              <h2 className="mt-4 text-xl font-bold text-black">
                Scheduled Rides
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-100 hover:shadow-green-100"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-green-500"
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

              <h2 className="mt-4 text-xl font-bold text-black">
                Coporate Account
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
          </div>
        </div>
      </section>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
      <section className="bg-white text-gray">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl text-green-500 font-bold sm:text-2xl">
              Clients Testimonial
            </h2>

            <p className="mt-4 text-4xl text-gray-600">
              We move with speed and precision
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-100 hover:shadow-green-100"
              href="#"
            >
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                  className="size-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-bold text-black">Claire Mac</h3>
                  <p className="text-xm font-medium text-gray-600"> Customer</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-100 hover:shadow-green-100"
              href="#"
            >
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                  className="size-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-bold text-black">Claire Mac</h3>
                  <p className="text-xm font-medium text-gray-600"> Customer</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-100 hover:shadow-green-100"
              href="#"
            >
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                  className="size-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-bold text-black">Claire Mac</h3>
                  <p className="text-xm font-medium text-gray-600"> Customer</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-100 hover:shadow-green-100"
              href="#"
            >
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                  className="size-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-bold text-black">Claire Mac</h3>
                  <p className="text-xm font-medium text-gray-600"> Customer</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-100 hover:shadow-green-100"
              href="#"
            >
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                  className="size-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-bold text-black">Claire Mac</h3>
                  <p className="text-xm font-medium text-gray-600"> Customer</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-100 hover:shadow-green-100"
              href="#"
            >
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                  className="size-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-bold text-black">Claire Mac</h3>
                  <p className="text-xm font-medium text-gray-600"> Customer</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="/car1.jpg"
              className="absolute inset-0  rounded-lg h-full w-full object-cover "
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-green-600 sm:text-3xl md:text-4xl">
                Contact Us for Any Inquiries or Assistance
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>

              <form
                action="#"
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>

                  {/* <input
                    type="text"
                    id="FirstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  /> */}
                  <input
                    type="text"
                    id="Firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-green-500"
                  />
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName}</p>
                  )}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="Laststname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-green-500"
                  />
                  {errors.lastName && (
                    <p className="text-red-500">{errors.lastName}</p>
                  )}
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    type="text"
                    id="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-green-500"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {" "}
                    Subject{" "}
                  </label>

                  <input
                    type="text"
                    id="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-green-500"
                  />
                  {errors.subject && (
                    <p className="text-red-500">{errors.subject}</p>
                  )}
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500">{errors.message}</p>
                  )}
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};

export default Home;
