import React from "react";
import Button from "@/components/ui/Button";
import { FiCheckCircle, FiHeart, FiBox } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {

    
    return (
        <section className="relative min-h-max flex items-center bg-gradient-to-br green-50 via-emerald-50 to-earth-50 pt-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-6 py-12">
                {/* Left Content */}
                <div className="flex-1 max-w-xl">
                <div className="mb-4">
                    <span className="inline-block bg-green-200 text-green-900 text-sm font-semibold px-4 py-1 rounded-full">
                    Trusted by 5000+ customers
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
                    Pure <span className="text-orange-500">Wellness</span> for <br />
                    <span className="text-green-700">Optimal living</span>
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                    Discover the power of authentic Himalayan Shilajit and premium plant-based proteins. Crafted by nature, backed by science.
                </p>
                {/* Features */}
                <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2 text-gray-700 text-base">
                    <FiCheckCircle className="text-green-600" />
                    Lab Tested
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-base">
                    <FiHeart className="text-green-600" />
                    100% Natural
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-base">
                    <FiBox className="text-orange-500" />
                    Free Delivery
                    </div>
                </div>
                {/* Buttons */}
                <div className="flex gap-4">
                    <Link href="#shop"><Button variant="fill">Shop Now</Button></Link>
                    <Link href="#about"><Button variant="outline">Learn More</Button></Link>
                    
                </div>
                </div>
                {/* Right Image */}
                <div className="flex-1 flex justify-center mt-10 md:mt-0">
                <div className="relative w-full flex items-center justify-center">
                    {/* Protein Image (large, centered) */}
                    <Image
                        src="/assets/image/h-product.png"
                        alt="Protein"
                        width={520}
                        height={560}
                        className="w-[420px] h-[460px] object-contain"
                        style={{ zIndex: 2 }}
                    />
                </div>
                </div>
            </div>
        </section>
    );
}