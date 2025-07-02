import AboutSection from "@/components/AboutSection";
import CounterSection from "@/components/CounterSection";
import CTA from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import { Footer } from "@/components/include/Footer";
import Header from "@/components/include/Header";
import ProductSection from "@/components/ProductSection";
import TestimonialSection from "@/components/TestimonialSection";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
        <Header/>
        <HeroSection/>
        <AboutSection/>
        <ProductSection/>
        <CTA/>
        <TestimonialSection/>
        <CounterSection/>
        <Footer/>
    </React.Fragment>
  );
}
