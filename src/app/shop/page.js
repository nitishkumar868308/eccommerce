// "use client";

// import { useState } from "react";

// const productsData = [
//   { id: 1, name: "Red Hoodie", category: "Hoodies", price: 1200, img: "/image/Red Hoodie.jpg" },
//   { id: 2, name: "Blue T-Shirt", category: "T-Shirts", price: 800, img: "/image/Blue T-Shirt.jpg" },
//   { id: 3, name: "Black Cap", category: "Caps", price: 500, img: "/image/Black Cap.jpg" },
//   { id: 4, name: "White Hoodie", category: "Hoodies", price: 1300, img: "/image/White Hoodie.jpg" },
//   { id: 5, name: "Green T-Shirt", category: "T-Shirts", price: 900, img: "/image/Green T-Shirt.jpg" },
//   { id: 6, name: "Yellow Cap", category: "Caps", price: 600, img: "/image/Yellow Cap.jpg" },
// ];

// export default function Shop() {
//   const [category, setCategory] = useState("All");
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");

//   const filteredProducts = productsData
//     .filter((p) => category === "All" || p.category === category)
//     .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => {
//       if (sort === "low") return a.price - b.price;
//       if (sort === "high") return b.price - a.price;
//       return 0;
//     });

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Shop</h1>

//       {/* Filters */}
//       <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="border p-2 rounded w-full md:w-1/3"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           className="border p-2 rounded"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="All">All Categories</option>
//           <option value="Hoodies">Hoodies</option>
//           <option value="T-Shirts">T-Shirts</option>
//           <option value="Caps">Caps</option>
//         </select>

//         <select
//           className="border p-2 rounded"
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//         >
//           <option value="">Sort By</option>
//           <option value="low">Price: Low to High</option>
//           <option value="high">Price: High to Low</option>
//         </select>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="border rounded p-4 hover:shadow-lg transition">
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-48 object-cover mb-4 rounded"
//             />
//             <h2 className="font-semibold text-lg">{product.name}</h2>
//             <p className="text-gray-600">₹{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Loader from '../loading'

const productsData = [
    { id: 1, name: "Red Hoodie", category: "Hoodies", price: 1200, img: "/image/Red Hoodie.jpg" },
    { id: 2, name: "Blue T-Shirt", category: "T-Shirts", price: 800, img: "/image/Blue T-Shirt.jpg" },
    { id: 3, name: "Black Cap", category: "Caps", price: 500, img: "/image/Black Cap.jpg" },
    { id: 4, name: "White Hoodie", category: "Hoodies", price: 1300, img: "/image/White Hoodie.jpg" },
    { id: 5, name: "Green T-Shirt", category: "T-Shirts", price: 900, img: "/image/Green T-Shirt.jpg" },
    { id: 6, name: "Yellow Cap", category: "Caps", price: 600, img: "/image/Yellow Cap.jpg" },
];

export default function Shop() {
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState(["Hoodies", "T-Shirts", "Caps"]);
    const [priceRange, setPriceRange] = useState([0, 1500]);
    const [sort, setSort] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800); // 0.8 seconds

        return () => clearTimeout(timer);
    }, []);

    const toggleCategory = (cat) => {
        if (categories.includes(cat)) {
            setCategories(categories.filter((c) => c !== cat));
        } else {
            setCategories([...categories, cat]);
        }
    };

    const filteredProducts = productsData
        .filter((p) => categories.includes(p.category))
        .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
        .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
        .sort((a, b) => {
            if (sort === "low") return a.price - b.price;
            if (sort === "high") return b.price - a.price;
            return 0;
        });

    if (loading) return <Loader />;

    return (
        <>

            <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-6">
                {/* Sidebar */}
                <aside className="md:w-1/4 space-y-6">
                    <div>
                        <h2 className="font-bold mb-2 text-lg">Search</h2>
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div>
                        <h2 className="font-bold mb-2 text-lg">Categories</h2>
                        {["Hoodies", "T-Shirts", "Caps"].map((cat) => (
                            <label key={cat} className="flex items-center mb-1 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={categories.includes(cat)}
                                    onChange={() => toggleCategory(cat)}
                                    className="mr-2"
                                />
                                {cat}
                            </label>
                        ))}
                    </div>

                    <div>
                        <h2 className="font-bold mb-2 text-lg">
                            Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                        </h2>

                        <div className="relative h-6">
                            {/* Min slider */}
                            <input
                                type="range"
                                min={0}
                                max={2000}
                                value={priceRange[0]}
                                onChange={(e) =>
                                    setPriceRange([
                                        Math.min(Number(e.target.value), priceRange[1]),
                                        priceRange[1],
                                    ])
                                }
                                className="absolute w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                            />

                            {/* Max slider */}
                            <input
                                type="range"
                                min={0}
                                max={2000}
                                value={priceRange[1]}
                                onChange={(e) =>
                                    setPriceRange([
                                        priceRange[0],
                                        Math.max(Number(e.target.value), priceRange[0]),
                                    ])
                                }
                                className="absolute w-full h-2 bg-blue-400 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                            <span>₹0</span>
                            <span>₹2000</span>
                        </div>
                    </div>


                    <div>
                        <h2 className="font-bold mb-2 text-lg">Sort By</h2>
                        <select
                            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value="">Default</option>
                            <option value="low">Price: Low to High</option>
                            <option value="high">Price: High to Low</option>
                        </select>
                    </div>
                </aside>

                {/* Products Grid */}
                <main className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition relative bg-white"
                        >
                            <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                <p className="text-gray-600">₹{product.price}</p>
                            </div>
                            <button className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
                                🛒
                            </button>
                        </div>
                    ))}
                </main>
            </div>
        </>
    );
}
