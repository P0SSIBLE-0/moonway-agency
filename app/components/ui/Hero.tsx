"use client";

import Container from "./Container";
import { motion } from "motion/react";
import Button from "./Button";
import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-black flex flex-col pt-32 pb-12 overflow-hidden justify-center">
            {/* Subtle Background Texture/Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[4rem_4rem]" />

            {/* Gradient Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <Container className="relative z-10 w-full ">
                <div className="pl-1 mb-4 md:mb-5 lg:-mb-20">
                    <span className="text-purple-500 font-mono tracking-widest text-sm flex items-center gap-2">
                 // OPEN THE FUTURE
                    </span>
                </div>

                <div className="grid lg:grid-cols-13 gap-10 items-center">
                    <div className="lg:col-span-8 space-y-6 relative z-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.4 }}
                            className="text-4xl md:text-7xl lg:text-[4.7rem] font-semibold leading-11 md:leading-15 tracking-tighter text-white font-sans whitespace-normal"
                        >
                            We Build <br />
                            <span className="bg-clip-text text-6xl md:text-8xl text-transparent bg-linear-to-r from-purple-500 via-purple-100 to-purple-600 whitespace-normal font-extrabold pr-2">Brands that Get the cliks </span>
                            And <br />
                            Remembered
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap gap-8 items-center pt-8"
                        >
                            <Button size="lg" className="rounded-full bg-purple-600 border-2 border-purple-600 text-white hover:bg-transparent hover:text-white px-10 h-14 font-bold uppercase tracking-wider cursor-pointer">
                                Let's Talk
                                <ArrowUpRight className="ml-2 w-5 h-5" />
                            </Button>
                            <div className="text-zinc-400 max-w-xs text-sm leading-relaxed border-l border-zinc-700 pl-4">
                                We help businesses grow with marketing, websites, and visually striking design—powered by strategy, not guesswork.
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full flex items-center justify-center">
                        {/* Abstract Crystal/Glass Object */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative -top-30 md:top-0 w-full h-full z-10"
                        >
                            <Image
                                src="/cube.png"
                                alt="Abstract Glass Art"
                                fill
                                className="object-contain drop-shadow-[0_0_50px_rgba(255,100,0,0.3)]"
                                unoptimized
                                priority
                            />
                        </motion.div>

                        {/* Floating Video Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="absolute bottom-10 right-0 lg:-right-4 w-72 h-44 bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-700 overflow-hidden shadow-2xl z-20 group cursor-pointer"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=500"
                                alt="Video Thumbnail"
                                fill
                                className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-purple-600/90 flex items-center justify-center text-white pl-1 shadow-lg group-hover:scale-110 transition-transform">
                                    <Play className="w-5 h-5 fill-current" />
                                </div>
                            </div>

                            {/* Decorative star */}
                            <div className="absolute top-4 right-4 text-purple-500 font-bold text-3xl animate-spin-slow">
                                *
                            </div>
                        </motion.div>

                        {/* Background decoration text behind image */}
                        <div className="absolute top-1/2 left-20 -translate-x-1/2 -translate-y-1/2 text-[16rem] font-bold text-zinc-900/70 pointer-events-none select-none -z-10 uppercase whitespace-nowrap hidden lg:block">
                            Digital
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
