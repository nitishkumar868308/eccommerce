"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Moon, Sun } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("light");
    const [isCartOpen, setIsCartOpen] = useState(false);


    // Load theme from localStorage
    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
            setTheme("light");
        }
    }, []);

    // Toggle theme
    const toggleTheme = () => {
        if (theme === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-black shadow-md z-50">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/" className="text-3xl font-extrabold">
                        Cozyy Creations
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 text-lg font-medium">
                        <Link href="/">Home</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>

                    {/* Right section */}
                    <div className="hidden md:flex items-center space-x-5">
                        {/* Cart */}
                        <Link href="/cart" onClick={(e) => { e.preventDefault(); setIsCartOpen(true); }} className="relative">
                            <ShoppingCart size={26} />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                                2
                            </span>
                        </Link>
                        {/* Login */}
                        <Link
                            href="/login"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-white dark:text-black text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-gray-800 dark:bg-gray-200 px-6 pb-6 space-y-3 text-lg">
                        <Link href="/" className="block">Home</Link>
                        <Link href="/shop" className="block">Shop</Link>
                        <Link href="/about" className="block">About</Link>
                        <Link href="/contact" className="block">Contact</Link>
                        <Link href="/cart" className="block">Cart</Link>
                        {/* <button onClick={toggleTheme} className="block">
                        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                    </button> */}
                        <Link href="/login" className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium">Login</Link>
                    </div>
                )}
            </header>
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-60
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-300">
                    <h2 className="text-xl font-bold">Your Cart</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-xl font-bold"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-4 space-y-4">
                    {/* Cart items */}
                    <div className="flex justify-between">
                        <span>Item 1</span>
                        <span>$10</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Item 2</span>
                        <span>$20</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Item 3</span>
                        <span>$15</span>
                    </div>

                    <hr className="my-2" />

                    {/* Total */}
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>$45</span>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-4">
                        Checkout
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-white/30 backdrop-blur-sm z-50"
                    onClick={() => setIsCartOpen(false)}
                ></div>

            )}



        </>


    );
}
