// app/contact/page.jsx
"use client";

import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thanks! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Info Panel */}
        <div className="bg-gradient-to-b from-blue-600 to-purple-600 text-white p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-8 text-gray-200">
            We’d love to hear from you! Reach out for collaborations, questions, or just to say hi.
          </p>
          <div className="space-y-4">
            <p><span className="font-semibold">Email:</span> contact@yourdomain.com</p>
            <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
            <p><span className="font-semibold">Address:</span> 123 Main Street, City, Country</p>
          </div>
          <div className="mt-8 flex gap-4 text-white text-lg">
            <FaFacebookF className="hover:text-blue-300 cursor-pointer transition" />
            <FaTwitter className="hover:text-blue-200 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-300 cursor-pointer transition" />
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer transition" />
          </div>
        </div>

        {/* Right Form Panel */}
        <form onSubmit={handleSubmit} className="p-12 bg-white flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send a Message</h2>

          {/* Floating Inputs */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 placeholder-transparent"
            />
            <label className="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 placeholder-transparent"
            />
            <label className="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
              Email
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="4"
              className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 placeholder-transparent resize-none"
            ></textarea>
            <label className="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
              Message
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-purple-600 text-white font-semibold py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
