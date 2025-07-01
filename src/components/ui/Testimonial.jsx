import React from "react";
import Image from "next/image";

export default function Testimonial({
  name,
  location,
  avatar,
  text,
  rating = 5,
}) {
  return (
    <div className="bg-[#EAFBE5] rounded-xl p-6 shadow-sm flex flex-col gap-4 max-w-xl mx-auto">
      {/* Stars */}
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            className="inline"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill={i < rating ? "none" : "none"}
              stroke="#E4903E"
              strokeWidth={2}
            />
          </svg>
        ))}
      </div>
      {/* Testimonial Text */}
      <p className="text-gray-700 text-base leading-relaxed mb-4">
        "{text}"
      </p>
      {/* User Info */}
      <div className="flex items-center gap-3 mt-2">
        <Image
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-black">{name}</div>
          <div className="text-gray-500 text-sm">{location}</div>
        </div>
      </div>
    </div>
  );
}