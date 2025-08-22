"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import LoginModal from "../components/LoginModal";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Product() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const products = [
        { id: 1, name: "Product 1", img: "https://picsum.photos/300/200?random=1" },
        { id: 2, name: "Product 2", img: "https://picsum.photos/300/200?random=2" },
        { id: 3, name: "Product 3", img: "https://picsum.photos/300/200?random=3" },
        { id: 4, name: "Product 4", img: "https://picsum.photos/300/200?random=4" },
        { id: 5, name: "Product 5", img: "https://picsum.photos/300/200?random=5" },
    ];

    return (

        <div className="w-full mb-10">
            <h2 className="text-3xl font-bold text-center mb-6 relative inline-block mx-auto after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-600 after:mx-auto after:mt-2">
                Products
            </h2>
            <Swiper
                slidesPerView={3}   // ek sath 3 cards
                spaceBetween={20}   // gap between cards
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{ clickable: true }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },   // small phones
                    640: { slidesPerView: 2, spaceBetween: 15 },   // tablets
                    1024: { slidesPerView: 3, spaceBetween: 20 },  // desktops
                }}
            >
                {products.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="bg-white  rounded-2xl p-4 flex flex-col items-center">
                            <Image
                                src={item.img}
                                alt={item.name}
                                width={300}
                                height={200}
                                className="rounded-xl"
                            />
                            <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
                            <button onClick={() => setIsModalOpen(true)} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">
                                Buy Now
                            </button>


                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <LoginModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
