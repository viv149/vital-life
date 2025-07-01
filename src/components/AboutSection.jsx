import React from "react";
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import { BiAward, BiHeart, BiLeaf } from "react-icons/bi";
import Badge from "./ui/badge";

export default function AboutSection() {
    const values = [
        {
          icon: <BiLeaf className="h-8 w-8" />,
          title: "Pure & Natural",
          description: "We source only the finest natural ingredients from their native regions, ensuring maximum potency and purity."
        },
        {
          icon: <BiAward className="h-8 w-8" />,
          title: "Quality Assured",
          description: "Every product undergoes rigorous third-party testing to meet the highest standards of quality and safety."
        },
        {
          icon: <FiUsers className="h-8 w-8" />,
          title: "Customer First",
          description: "Over 50,000 satisfied customers trust us for their wellness journey. Your health is our priority."
        },
        {
          icon: <BiHeart className="h-8 w-8" />,
          title: "Wellness Mission",
          description: "We're dedicated to making authentic wellness products accessible to everyone, everywhere."
        }
    ];
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                <Badge variant="yellow">
                    Our Story
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
                    Rooted in <span className="text-green-600">Nature</span>, Driven by <span className="text-yellow-600">Science</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    VitalLife was born from a simple belief: everyone deserves access to pure, authentic wellness products 
                    that truly make a difference. We bridge ancient wisdom with modern science to bring you the finest 
                    natural supplements.
                </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                {/* Story Content */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-display font-semibold text-gray-900">
                    Our Journey to Wellness Excellence
                    </h3>
                    <div className="space-y-4 text-gray-600">
                    <p>
                        Founded in 2020 by wellness enthusiasts and health experts, VitalLife emerged from a 
                        personal quest to find truly pure and effective natural supplements in a market flooded 
                        with synthetic alternatives.
                    </p>
                    <p>
                        Our founders traveled to the remote regions of the Himalayas, building relationships 
                        with local harvesters and ensuring ethical sourcing practices. Every product in our 
                        collection tells a story of tradition, purity, and scientific validation.
                    </p>
                    <p>
                        Today, we're proud to serve over 50,000 customers nationwide, each one part of our 
                        growing family committed to natural wellness and optimal living.
                    </p>
                    </div>
                </div>

                {/* Story Image */}
                <div className="relative">
                    <Image 
                    src="/assets/image/about.jpg"
                    alt="Health"
                    className="w-full rounded-2xl shadow-xl"
                    width={420}
                    height={460}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
                </div>

                {/* Values Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                    <div 
                    key={index}
                    className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
                    >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-300 text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                        {value.icon}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                        {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {value.description}
                    </p>
                    </div>
                ))}
                </div>

               
            </div>
        </section>
    );
}
