"use client";

import React from "react";
import Container from "./Container";
import { motion } from "motion/react";
import Button from "./Button";

const PROCESS = [
    {
        title: "Discover",
        description: 'We learn your business, audience, goals, and competitors to define the right strategy from day one.',
        icon: 'FaShoppingCart',
        delay: 0
    },
    {
        title: "Strategize",
        description: 'We create a tailored plan combining design, marketing, and technology to drive real outcomes.',
        icon: 'FaShoppingCart',
        delay: 100
    },
    {
        title: "Execute",
        description: 'Our team designs, builds, launches, and optimizes—moving fast without cutting corners.',
        icon: 'FaShoppingCart',
        delay: 200
    },
]
export default function Process() {
    return (
        <section id="process" className="bg-pop-purple py-24 border-b-2 border-black relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <Container className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Receipt Graphic */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="bg-white w-full max-w-md mx-auto p-8 relative shadow-xl filter drop-shadow-2xl font-mono text-sm leading-relaxed receipt-mask">
                        {/* Receipt Jagged Edge Top */}
                        <div className="absolute top-0 left-0 right-0 h-4 bg-white" style={{ clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)', transform: 'translateY(-10px)' }}></div>

                        <div className="text-center border-b-2 border-dashed border-zinc-300 pb-6 mb-6">
                            <h3 className="font-bold text-2xl uppercase mb-2">Our Proven Process</h3>
                            <p>Order #99281-XM</p>
                        </div>

                        <div className="space-y-8">
                            {PROCESS.map((process, index) => (
                                <div key={index}>
                                    <div className="flex gap-4">
                                        <div className="size-8 mt-2 rounded-full bg-black text-white flex items-center justify-center font-bold shrink-0">{index + 1}</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{process.title}</h4>
                                            <p className="text-zinc-600">{process.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t-2 border-dashed border-zinc-300">
                            <ImageBarcode />
                            <p className="text-center text-xs mt-2">THANK YOU FOR VISITING!</p>
                        </div>

                        {/* Receipt Jagged Edge Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-4 bg-white" style={{ clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)', transform: 'translateY(10px)' }}></div>
                    </div>
                </motion.div>

                {/* Right Side: Text */}
                <div className="text-black">
                    <h2 className="text-5xl md:text-7xl font-black font-display uppercase leading-tight mb-8">
                        I'm intrigued.<br />
                        How does <br />
                        this work?
                    </h2>
                    <div className="relative inline-block rotate-3">
                        <Button size="lg" className="bg-pop-red text-white border-2 border-black shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none font-bold uppercase rounded-full">
                            Read full process
                        </Button>
                        {/* Decorative Arrow or Doodle */}
                        <svg className="absolute -right-20 top-1/2 w-16 h-16 text-black transform -translate-y-1/2 rotate-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M10,50 Q50,30 90,50" />
                            <path d="M90,30 L90,50 L65,50" />
                        </svg>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function ImageBarcode() {
    return (
        <div className="h-12 w-full flex items-end justify-center gap-1 overflow-hidden">
            {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="bg-black w-0.5 md:w-1" style={{ height: `${Math.random() * 100}%` }} />
            ))}
        </div>
    )
}
