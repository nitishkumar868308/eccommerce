"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Heart, ShoppingCart } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Product() {
    const products = [
        { id: 1, name: "Classic Hoodie", img: "https://picsum.photos/400/600?random=1", price: 1499 },
        { id: 2, name: "Stylish T-Shirt", img: "https://picsum.photos/400/600?random=2", price: 799 },
        { id: 3, name: "Comfort Sneakers", img: "https://picsum.photos/400/600?random=3", price: 2499 },
        { id: 4, name: "Denim Jacket", img: "https://picsum.photos/400/600?random=4", price: 2999 },
        { id: 5, name: "Baseball Cap", img: "https://picsum.photos/400/600?random=5", price: 499 },
        { id: 6, name: "Classic Hoodie", img: "https://picsum.photos/400/600?random=1", price: 1499 },
        { id: 7, name: "Stylish T-Shirt", img: "https://picsum.photos/400/600?random=2", price: 799 },
        { id: 8, name: "Comfort Sneakers", img: "https://picsum.photos/400/600?random=3", price: 2499 },
        { id: 9, name: "Denim Jacket", img: "https://picsum.photos/400/600?random=4", price: 2999 },
    ];

    return (
        <div className="w-full py-10 bg-gray-50">
            <h2 className="text-4xl font-bold text-center mb-8 relative inline-block mx-auto after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-3">
                Products
            </h2>

            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    320: { slidesPerView: 1.5, spaceBetween: 5 },
                    640: { slidesPerView: 2, spaceBetween: 15 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 20 },
                    1280: { slidesPerView: 5, spaceBetween: 25 },
                }}

                className="!px-0"
            >
                {products.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative group bg-white shadow-lg rounded-3xl overflow-hidden w-72 mx-auto hover:shadow-2xl transition-shadow duration-300">
                            {/* Product Image */}
                            <Link href={`/product/${item.id}`}>
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    width={400}
                                    height={600}
                                    className="object-cover w-full h-96 transition-transform duration-300 group-hover:scale-105"
                                />
                            </Link>

                            {/* Hover Icons */}
                            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100">
                                    <ShoppingCart className="w-5 h-5 text-gray-700" />
                                </button>
                                <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100">
                                    <Heart className="w-5 h-5 text-red-500" />
                                </button>
                            </div>

                            {/* Product Info */}
                            <div className="p-5 text-center">
                                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-lg text-blue-600 font-bold mt-2">₹{item.price}</p>
                                <p className="text-sm text-gray-500 mt-1">Limited stock available</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
