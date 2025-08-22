"use client";

import { FaTruck } from "react-icons/fa";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none bg-white/10 backdrop-blur-md">
      <div className="relative w-28 h-28">
        {/* Outer Ring */}
        <div
          className="absolute inset-0 rounded-full border-2 animate-spin"
          style={{
            borderTopColor: "rgba(59,130,246,0.6)",  // blue-500
            borderBottomColor: "rgba(59,130,246,0.3)",
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            boxShadow: "0 0 6px rgba(59,130,246,0.4)",
          }}
        ></div>

        {/* Middle Ring */}
        <div
          className="absolute inset-3 rounded-full border-2 animate-[spin_2s_linear_infinite]"
          style={{
            borderTopColor: "rgba(34,197,94,0.5)",  // green-500
            borderBottomColor: "rgba(34,197,94,0.2)",
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            boxShadow: "0 0 4px rgba(34,197,94,0.3)",
          }}
        ></div>

        {/* Inner Ring */}
        <div
          className="absolute inset-6 rounded-full border-2 animate-[spin_1.5s_linear_infinite_reverse]"
          style={{
            borderTopColor: "rgba(249,115,22,0.5)",  // orange-500
            borderBottomColor: "rgba(249,115,22,0.2)",
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            boxShadow: "0 0 3px rgba(249,115,22,0.3)",
          }}
        ></div>

        {/* Center Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-3xl animate-pulse">
          <FaTruck />
        </div>
      </div>
    </div>
  );
}
