"use client";
import Product from "./components/product";
import BannerHome from './components/BannerHome'

export default function Home() {
  return (
    <>
      <BannerHome />
      <div className="-mt-12 z-10 relative">
        <Product />
      </div>
    </>



  );
}
