"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">

      {/* Our Story */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded with a passion for quality and design, our store started with a simple mission: to make shopping online a delightful experience. Each product is carefully selected to meet our high standards.
          </p>
          <p>
            We value customer satisfaction above all. From trendy apparel to essential accessories, we ensure every order is handled with care and delivered on time.
          </p>
        </div>
        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/image/banner3.jpg" // replace with your eCommerce image
            alt="Our Store"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">Why Shop With Us</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Quality Products", desc: "Only the best materials and designs." },
            { title: "Fast Shipping", desc: "Quick delivery to your doorstep." },
            { title: "Easy Returns", desc: "Hassle-free returns and exchanges." },
            { title: "24/7 Support", desc: "We are here to help anytime." },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:scale-105 transition">
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg md:text-xl">
          Sign up for updates, exclusive deals, and new arrivals. Be part of our growing family of happy shoppers!
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition">
          Sign Up Now
        </button>
      </section>

    </div>
  );
}
