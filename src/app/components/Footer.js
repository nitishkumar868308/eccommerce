"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-gray-300 dark:text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Link href="/" className="relative block w-28 h-28">
              <Image
                src="/image/logo-new-removebg-preview.png"
                alt="Logo"
                fill
                priority
                className="object-contain !bg-transparent"
              />
            </Link>
          </div>

            <p className="text-sm leading-relaxed">
              Your one-stop shop for modern and stylish products. We deliver with trust & quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white dark:text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white dark:hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-black">Shop</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-black">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white dark:text-gray-900">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123, Main Street, New Delhi</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>support@mystore.com</span>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white dark:text-gray-900">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 dark:bg-gray-200 rounded-full hover:bg-indigo-600 dark:hover:bg-black transition">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-800 dark:bg-gray-200 rounded-full hover:bg-sky-500 dark:hover:bg-black transition">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-800 dark:bg-gray-200 rounded-full hover:bg-pink-500 dark:hover:bg-black transition">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-800 dark:bg-gray-200 rounded-full hover:bg-blue-700 dark:hover:bg-black transition">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 dark:border-gray-300 pt-6 text-center text-sm">
          © {new Date().getFullYear()} MyStore. All rights reserved.
        </div>
    </footer>
  );
}
