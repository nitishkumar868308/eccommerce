"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Product from "./components/product";

export default function Home() {
  return (
    <>
    
      <div className="font-sans min-h-screen">
       
        {/* Slider */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full h-[90vh]">
              <Image
                src="/image/banner1.jpg"
                alt="Slide 1"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold">Latest Collection</h1>
                <p className="mt-4 text-lg md:text-xl">Shop our trendy styles now!</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full h-[90vh]">
              <Image
                src="/image/banner2.jpg"
                alt="Slide 2"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold">Summer Sale</h1>
                <p className="mt-4 text-lg md:text-xl">Up to 50% Off!</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative w-full h-[90vh]">
              <Image
                src="/image/banner3.jpg"
                alt="Slide 3"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold">New Arrivals</h1>
                <p className="mt-4 text-lg md:text-xl">Discover the latest trends</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Product />
    </>

  );
}
