"use client";
import { useSelector } from "react-redux";
import Badge from "./ui/badge";
import ProductCard from "./ui/ProductCard";


const products = [
    {
        id: 1,
        image: "/assets/image/protein01.png",
        title: "MP Combat Protein (5kg)",
        description: "Pure, authentic Himalayan Shilajit resin sourced from high-altitude mountains.",
        price: 3999,
        oldPrice: 4999,
        rating: 4.3,
        qty: 1
    },
    {
        id: 2,
        image: "/assets/image/shilajit.png",
        title: "Pure Shilajit Triple Gold (780mg)",
        description: "Our premium grade Shilajit with added gold particles for enhanced bioavailability and potency.",
        price: 998,
        oldPrice: 1299,
        rating: 5,
        qty: 1
    },
    {
        id: 3,
        image: "/assets/image/protein02.png",
        title: "Optimum Whey Protein (3kg)",
        description: "Clean mass gainer with organic ingredients. Perfect for lean muscle.",
        price: 2499,
        oldPrice: 3499,
        rating: 3.5,
        qty: 1
    },
];

export default function ProductSection() {

    return (
        <section id="shop" className="py-20 bg-[#f8f8f8]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge variant="green">
                        Our Products
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
                        Premium <span className="text-green-600">Natural</span> Supplements
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our carefully curated collection of authentic wellness products, 
                        each one tested for purity and potency.
                    </p>
                </div>
                {/* Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {products.map((product, idx) => (
                    <ProductCard key={idx} {...product} onBuy={() => {}} />
                ))}
                </div>

                
            </div>
        </section>
    )
}