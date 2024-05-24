

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
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

  return (
    <>
      <section className="relative bg-[url(./car1.jpg)] bg-cover bg-center bg-no-repeat">
      

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
                  Contact
                </NavLink>
              </div>
            </nav>
            <h1 class="text-2xl text-white font-bold sm:text-3xl">
              Experience Convenience Our Service Offerings
            </h1>
          </div>
        </div>
      </section>
      <br /><br />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-10">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-700 font-bold mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full  border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          {errors.subject && <p className="text-red-500">{errors.subject}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          ></textarea>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-2xl text-white px-6 py-3 rounded-md hover:bg-blue-600
        focus:outline-none focus:bg-blue-600 "
        >
          {" "}
          Submit
        </button>
      </form>
      <br />
      <br />
    </>
  );
};

export default Contact;
