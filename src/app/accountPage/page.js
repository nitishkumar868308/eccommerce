"use client";

import { useState } from "react";
import { User, ShoppingCart, Heart, MapPin } from "lucide-react";

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState("profile");

    const tabs = [
        { id: "profile", label: "Profile", icon: <User className="w-5 h-5" /> },
        { id: "orders", label: "Orders", icon: <ShoppingCart className="w-5 h-5" /> },
        { id: "wishlist", label: "Wishlist", icon: <Heart className="w-5 h-5" /> },
        { id: "addresses", label: "Addresses", icon: <MapPin className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">My Account</h1>

            {/* Tabs */}
            <div className="flex flex-wrap w-full justify-evenly gap-6 mb-8">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`w-40 h-14 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition ${
        activeTab === tab.id
          ? "bg-blue-600 text-white shadow-xl"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }`}
    >
      {tab.icon} {tab.label}
    </button>
  ))}
</div>




            {/* Tab Content */}
            <div className=" rounded-2xl shadow-lg p-8">
                {activeTab === "profile" && <ProfileTab />}
                {activeTab === "orders" && <OrdersTab />}
                {activeTab === "wishlist" && <WishlistTab />}
                {activeTab === "addresses" && <AddressesTab />}
            </div>
        </div>
    );
}

// ---------- Profile Tab ----------
function ProfileTab() {
    return (
        <div className="space-y-6 max-w-lg mx-auto">
            <div className="flex flex-col items-center space-y-4">
                <img
                    src="/profile-placeholder.png"
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-2 border-blue-500 shadow"
                />
                <button className="text-blue-600 hover:underline font-medium">
                    Change Profile Picture
                </button>
            </div>

            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                    Update Profile
                </button>
            </form>
        </div>
    );
}

// ---------- Orders Tab ----------
function OrdersTab() {
    const dummyOrders = [
        { id: "ORD001", item: "Red Hoodie", status: "Delivered", price: 1200 },
        { id: "ORD002", item: "Blue T-Shirt", status: "Processing", price: 800 },
    ];

    return (
        <div className="space-y-6">
            {dummyOrders.map((order) => (
                <div
                    key={order.id}
                    className="flex justify-between items-center p-4 rounded-xl shadow hover:shadow-md transition bg-gray-50"
                >
                    <div>
                        <p className="font-medium">{order.item}</p>
                        <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                    </div>
                    <div className="text-right">
                        <p
                            className={`font-semibold ${order.status === "Delivered"
                                ? "text-green-600"
                                : "text-yellow-600"
                                }`}
                        >
                            {order.status}
                        </p>
                        <p className="text-gray-500">₹{order.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ---------- Wishlist Tab ----------
function WishlistTab() {
    const dummyWishlist = [
        { id: 1, name: "Red Hoodie", price: 1200 },
        { id: 2, name: "Blue T-Shirt", price: 800 },
        { id: 3, name: "Black Cap", price: 500 },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dummyWishlist.map((item) => (
                <div
                    key={item.id}
                    className="p-4 rounded-xl shadow hover:shadow-lg transition bg-white flex justify-between items-center"
                >
                    <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500">₹{item.price}</p>
                    </div>
                    <button className="text-red-500 hover:underline">Remove</button>
                </div>
            ))}
        </div>
    );
}

// ---------- Addresses Tab ----------
function AddressesTab() {
    const dummyAddresses = [
        { id: 1, line1: "123 Street", city: "Delhi", pincode: "110001" },
        { id: 2, line1: "456 Avenue", city: "Mumbai", pincode: "400001" },
    ];

    return (
        <div className="space-y-6 max-w-lg mx-auto">
            {dummyAddresses.map((addr) => (
                <div
                    key={addr.id}
                    className="p-4 rounded-xl shadow hover:shadow-md bg-gray-50 flex justify-between items-center"
                >
                    <div>
                        {addr.line1}, {addr.city} - {addr.pincode}
                    </div>
                    <div className="flex space-x-2">
                        <button className="text-blue-600 hover:underline">Edit</button>
                        <button className="text-red-600 hover:underline">Delete</button>
                    </div>
                </div>
            ))}

            {/* Add Address */}
            <form className="space-y-4 bg-white p-6 rounded-xl shadow">
                <input
                    type="text"
                    placeholder="Address Line 1"
                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="City"
                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Pincode"
                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <button className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition">
                    Add Address
                </button>
            </form>
        </div>
    );
}
