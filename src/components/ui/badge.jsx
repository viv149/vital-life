import React from "react";

export default function Badge({ variant = "default", className = "", children, ...props }) {
  let style =
    "inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 mb-4";

  if (variant === "yellow") {
    style += " bg-[#FFEEB8] text-[#E4903E] border-transparent hover:bg-earth-200 ";
  } else if (variant === "green") {
    style += " bg-[#A8E8B4] text-[#07771C] border-transparent hover:bg-earth-200 ";
  } else if (variant === "secondary") {
    style += " bg-gray-200 text-gray-800 border-transparent hover:bg-gray-300";
  } else if (variant === "destructive") {
    style += " bg-red-600 text-white border-transparent hover:bg-red-700";
  } else if (variant === "outline") {
    style += " border border-gray-400 text-gray-800 bg-transparent hover:bg-gray-100";
  } else {
    // default
    style += " bg-green-600 text-white border-transparent hover:bg-green-700";
  }

  return (
    <div className={`${style} ${className}`} {...props}>
      {children}
    </div>
  );
} 