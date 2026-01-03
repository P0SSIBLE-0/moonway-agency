"use client";
import Container from "./Container";
import { motion } from "motion/react";
import { Star, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/constants";

export default function Testimonials() {
    return (
        <section className="bg-zinc-950 py-10 md:py-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <Container className="relative z-10 mb-16">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-500 font-mono tracking-widest text-sm mb-4 block"
                    >
                        // CLIENT FEEDBACK
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold font-sans text-white tracking-tight mb-6"
                    >
                        Don’t Just Take <br />
                        <span className="text-zinc-500">Our Word For It.</span>
                    </motion.h2>
                </div>
            </Container>

            {/* Marquee Container */}
            <div className="relative w-full group overflow-hidden">
                {/* Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-linear-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-linear-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

                {/* Scrolling Animation */}
                <div className="flex w-max animate-marquee-infinite-reverse hover:[animation-play-state:paused]">
                    <div className="flex gap-6 pr-6">
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={`a-${i}`} data={t} index={i} />
                        ))}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex gap-6 pr-6">
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={`b-${i}`} data={t} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ data, index }: { data: any, index: number }) {
    return (
        <div className="w-[350px] md:w-[450px] bg-zinc-900/50 border border-zinc-800 px-5 py-6 md:p-7 rounded-lg relative group/card hover:border-purple-500/30 transition-colors duration-300">
            <div className="absolute -top-2 -right-4 text-zinc-800 group-hover/card:text-purple-900/20 transition-colors duration-300">
                <MessageSquareQuote className="size-14 rotate-12" />
            </div>

            <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-orange-500 fill-orange-500" />
                ))}
            </div>

            <p className="text-zinc-300 text-base md:text-xl font-medium leading-relaxed mb-8 relative z-10">
                "{data.content}"
            </p>

            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-700">
                    <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h4 className="text-white font-bold">{data.name}</h4>
                    <p className="text-purple-400 text-xs uppercase tracking-wider font-semibold">{data.role}</p>
                </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    )
}
