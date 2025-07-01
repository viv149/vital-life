import React from "react";
import Badge from "./badge";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import Button from "./Button";
import Link from "next/link";

export default function ProductCard({
    image,
    title,
    description,
    price,
    oldPrice,
    rating,
    onBuy,
}) {
    return (
        <div className="bg-white rounded-2xl p-6 flex flex-col relative transition hover:shadow-lg min-w-[320px] w-full mx-auto">
            {/* Rating Badge */}
            <div className="absolute top-6 right-6 z-10">
                <Badge variant="yellow" className="flex items-center gap-1 px-2 py-1 mb-0">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path fill="#E4903E" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span className="ml-1">{rating}</span>
                </Badge>
            </div>
            {/* Product Image Container */}
            <div className="w-full flex justify-center items-center mb-4" style={{ minHeight: 180 }}>
                <div className="w-[160px] h-[160px] flex items-center justify-center bg-white">
                    <Image
                        src={image}
                        alt={title}
                        width={140}
                        height={140}
                        className="object-contain w-full h-full"
                    />
                </div>
            </div>
            {/* Title */}
            <Link href="#" className="font-bold text-lg hover:text-green-700 text-left mb-1 block">{title}</Link>
            {/* Description */}
            <p className="text-gray-500 text-sm text-left mb-4">{description}</p>
            {/* Price Row */}
            <div className="flex items-center gap-2 mb-4">
                <span className="text-green-700 font-bold text-2xl">₹{price}</span>
                <span className="text-gray-400 line-through text-base">₹{oldPrice}</span>
            </div>
            {/* Actions */}
            <div className="flex items-center gap-3 mt-auto">
                <button className="bg-gray-100 rounded-full p-3 hover:bg-green-100 transition">
                    <FiShoppingCart className="text-green-700 text-xl" />
                </button>
                <Button variant="fill" className="flex-1 py-3" onClick={onBuy}>
                    Buy Now
                </Button>
            </div>
        </div>
    )
}