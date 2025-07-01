import React from "react";
import Badge from "./ui/badge";
import Button from "./ui/Button";
import Image from "next/image";

export default function CTA() {
    return (
        <section id="cta" className="py-20 bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute top-[-40px] left-0 hidden md:block md:bg-black opacity-50 ">
                    <Image
                        src="/assets/image/protein01.png"
                        alt="CTA"
                        width={350}
                        height={460}
                        className="w-full h-full"
                    />
                </div>
                <div className="text-center mb-16 relative z-10">
                    <Badge variant="green">
                        Limited Time Offer
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 relative z-10">
                        Start Your Wellness Journey Today!
                    </h2>
                    <p className="text-xl  max-w-2xl mx-auto relative z-10">
                        Join over 50,000 customers who have transformed their health with our premium natural supplements. Get exclusive benefits when you order now!
                    </p>
                </div>
                <div className="flex justify-center relative z-10">
                    <Button variant="outline">Shop Now & Save 20%</Button>
                </div>
                <div className="absolute top-[-50px] right-0 hidden md:block">
                    <Image
                        src="/assets/image/training.png"
                        alt="CTA"
                        width={385}
                        height={460}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </section>
    )
}