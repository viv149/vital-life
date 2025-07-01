import React from "react";
import Badge from "./ui/badge";
import Testimonial from "./ui/Testimonial";


const testimonials = [
    {
        id: 1,
        name: "John Doe",
        avatar: "/assets/image/testimonials-4.jpg",
        location: "New York, NY",
        text: "I've been using VitalLife supplements for a few months now, and I've noticed a significant improvement in my energy levels and overall well-being. The products are high quality and the customer service is excellent.",
        rating: 5,
    },
    {
        id: 2,
        name: "Jane Doe",
        avatar: "/assets/image/testimonials-5.jpg",
        location: "Los Angeles, CA",
        text: "I've been using VitalLife supplements for a few months now, and I've noticed a significant improvement in my energy levels and overall well-being. The products are high quality and the customer service is excellent.",
        rating: 5,
    },  
    {
        id: 3,
        name: "Sarah Johnson",
        avatar: "/assets/image/testimonials-2.jpg",
        location: "New York, NY",
        text: "I've been using VitalLife supplements for a few months now, and I've noticed a significant improvement in my energy levels and overall well-being. The products are high quality and the customer service is excellent.",
        rating: 5,
    },
];


export default function TestimonialSection() {
    return (
        <section id="testimonial" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge variant="yellow">
                        Customer Story
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
                        What Our <span className="text-green-600">Customers</span> Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who have transformed their wellness journey with VitalLife.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Testimonial 
                            key={testimonial.id} 
                            id={testimonial.id}
                            name={testimonial.name}
                            location={testimonial.location}
                            avatar={testimonial.avatar}
                            text={testimonial.text}
                            rating={testimonial.rating}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}