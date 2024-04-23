import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const validationErrors = {};
    if (!formData.name) {
      validationErrors.name = "Please enter your name.";
    }
    if (!formData.email) {
      validationErrors.email = "Please enter your email.";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message) {
      validationErrors.message = "Please enter your message.";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Form submission logic
    console.log("Form submitted:", formData);
    // Clear form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Clear errors
    setErrors({});
  };

  const isValidEmail = (email) => {
    // Email validation logic
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="px-3 py-14 bg-[#263238] lg:grid lg:grid-cols-[50%_50%] lg:px-24 " id="contact">
      {/* Content */}
      <div className="space-y-8 md:mx-[12rem] lg:w-[70%] lg:ml-0 lg:mt-16">
        <h1 className="text-white text-center font-bold text-4xl lg:text-6xl lg:text-start">
          Contact
        </h1>
        <p className="text-gray-300 text-center font-semibold lg:text-start">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-14 space-y-12">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`border-0 bg-transparent placeholder-gray-400 border-b-2 outline-0 p-4 placeholder-opacity-50 text-white focus:outline-none mx-6 w-[95%] lg:w-[80] ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="NAME"
          />
          {errors.name && <p className="text-red-500 text-sm ml-6">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`border-0 bg-transparent placeholder-gray-400 border-b-2 outline-0 p-4 placeholder-opacity-50 text-white focus:outline-none mx-6 w-[95%] lg:w-[80] ${
              errors.email ? "border-red-500  " : ""
            }`}
            placeholder="EMAIL"
          />
          {errors.email && <p className="text-red-500 text-sm ml-6">{errors.email}</p>}
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`border-0 bg-transparent placeholder-gray-400 border-b-2 outline-0 px-4 pb-20 placeholder-opacity-50 text-white focus:outline-none mx-6 w-[95%] lg:w-[80] ${
              errors.message ? "border-red-500" : ""
            }`}
            placeholder="MESSAGE"
          />
          {errors.message && <p className="text-red-500 text-sm  ml-6">{errors.message}</p>}
        </div>
        <div className="mt-[-5rem] mb-8 lg:mt-8 lg:flex lg:justify-end">
          <button
            type="submit"
            className="text-white uppercase text-end underline decoration-green-300 underline-offset-[0.8rem] tracking-widest font-bold decoration-2 cursor-pointer md:mx-7"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
