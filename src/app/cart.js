"use client";
import React, { useState } from "react";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
    return (
        <>
            <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-60
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center p-4 border-b border-gray-300">
                    <h2 className="text-xl font-bold">Your Cart</h2>
                    <button onClick={() => setIsCartOpen(false)} className="text-xl">✕</button>
                </div>
                <div className="p-4">
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                </div>
            </div>

            {/* Overlay */}
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50"
                    onClick={() => setIsCartOpen(false)}
                ></div>
            )}
        </>
    );
};


export default Cart;
