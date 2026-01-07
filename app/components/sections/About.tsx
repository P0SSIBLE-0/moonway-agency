"use client";

import React from "react";
import Container from "../ui/Container";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
    "Data-driven design methodology",
    "Performance-first engineering",
    "Scalable brand systems",
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-zinc-50/50">
            <Container>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-zinc-900 leading-tight">
                            We build brands that demand attention.
                        </h2>
                        <div className="h-1 w-20 bg-purple-600 mb-8 rounded-full" />
                        <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                            Moonway is a new-age digital agency focused on clarity and impact.
                            We strip away the noise to reveal the core essence of your brand,
                            translating it into digital experiences that convert.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            Our philosophy is simple: Design is not just how it looks, but how
                            it works to achieve your business goals.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 md:p-12 rounded-2xl border border-zinc-100 shadow-xl shadow-purple-900/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-2xl font-bold mb-8 font-display">Why Moonway?</h3>
                        <ul className="space-y-6 relative z-10">
                            {differentiators.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0" />
                                    <span className="text-lg text-zinc-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
