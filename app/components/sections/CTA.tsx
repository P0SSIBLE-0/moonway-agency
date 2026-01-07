"use client";

import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { ShoppingCart } from "lucide-react";
import { motion } from "motion/react";

export default function CTA() {
    return (
        <section id="pricing" className="bg-pop-red py-24 border-b-2 border-black relative">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-black font-display uppercase text-white drop-shadow-md mb-4">
                        Get Started! Select your <br /> Content Bundle
                        <ShoppingCart className="inline-block w-12 h-12 md:w-16 md:h-16 ml-4 text-black animate-bounce" />
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Package 1 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-3xl border-2 border-black shadow-hard p-8 flex flex-col items-center text-center relative overflow-hidden"
                    >
                        <div className="w-16 h-16 bg-pop-pink rounded-full flex items-center justify-center text-2xl font-bold border-2 border-black mb-6 bg-pink-200">
                            S
                        </div>
                        <h3 className="font-display font-bold text-2xl mb-2">The Mini Bundle</h3>
                        <p className="text-zinc-500 mb-6 px-8">Perfect for getting your feet wet and seeing immediate results.</p>
                        <div className="text-4xl font-black mb-8">120 USD</div>

                        <ul className="text-left w-full space-y-3 mb-8 pl-8">
                            <li className="flex items-center gap-2 text-sm font-bold"><div className="w-2 h-2 bg-black rounded-full" /> 4 Posts / Month</li>
                            <li className="flex items-center gap-2 text-sm font-bold"><div className="w-2 h-2 bg-black rounded-full" /> Curated Captions</li>
                            <li className="flex items-center gap-2 text-sm font-bold"><div className="w-2 h-2 bg-black rounded-full" /> Hashtag Research</li>
                        </ul>

                        <Button className="w-full bg-pop-green text-black border-2 border-black shadow-hard-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none font-bold uppercase rounded-full">
                            Grab a Mini Bundle
                        </Button>
                    </motion.div>

                    {/* Package 2 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-3xlqp border-2 border-black shadow-hard p-8 flex flex-col items-center text-center relative overflow-hidden"
                    >
                        {/* Sticker */}
                        <div className="absolute top-4 right-4 bg-pop-purple text-black text-xs font-bold px-3 py-1 border border-black transform rotate-12 shadow-sm">
                            BEST VALUE
                        </div>

                        <div className="w-16 h-16 bg-pop-blue rounded-full flex items-center justify-center text-2xl font-bold border-2 border-black mb-6 bg-blue-200">
                            L
                        </div>
                        <h3 className="font-display font-bold text-2xl mb-2">The Biggie Bundle</h3>
                        <p className="text-zinc-500 mb-6 px-8">Complete overhaul of your feed with strategic planning.</p>
                        <div className="text-4xl font-black mb-8">400 USD</div>

                        <ul className="text-left w-full space-y-3 mb-8 pl-8">
                            <li className="flex items-center gap-2 text-sm font-bold"><div className="w-2 h-2 bg-black rounded-full" /> 12 Posts / Month</li>
                            <li className="flex items-center gap-2 text-sm font-bold"><div className="w-2 h-2 bg-black rounded-full" /> Monthly Strategy</li>
                            <li className="flex items-center gap-2 text-sm font-bold"><div className="w-2 h-2 bg-black rounded-full" /> Engagement Support</li>
                        </ul>

                        <Button className="w-full bg-pop-green text-black border-2 border-black shadow-hard-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none font-bold uppercase rounded-full">
                            Grab a Biggie Bundle
                        </Button>
                    </motion.div>
                </div>

                <div className="mt-16 text-center text-white/80 font-mono text-sm">
                    * Prices tailored to monthly subscriptions. Cancel anytime.
                </div>
            </Container>
        </section>
    );
}
