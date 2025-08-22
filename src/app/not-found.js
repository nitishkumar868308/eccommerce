"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        The page you are looking for does not exist, might have been removed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
      >
        Return Home
      </Link>
      <div className="mt-10">
        <img
          src="/image/illustration.avif"
          alt="Not Found Illustration"
          className="w-64 h-64 object-contain"
        />
      </div>
    </div>
  );
}
