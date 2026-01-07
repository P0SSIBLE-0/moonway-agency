"use client";

import React from "react";
import Container from "../ui/Container";
import { motion } from "motion/react";
import { Code2, Figma, Framer, Layers, Zap } from "lucide-react";

const clients = [
    { name: "Acme Corp", icon: Layers },
    { name: "Quantum", icon: Zap },
    { name: "Echo", icon: Code2 },
    { name: "Visionary", icon: Figma },
    { name: "Apex", icon: Framer },
];

export default function TrustedBy() {
    return (
        <section className="py-12 border-b border-zinc-100 bg-white">
            <Container>
                <p className="text-center text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">
                    Trusted by innovative companies
                </p>
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {clients.map((client) => (
                        <motion.div
                            key={client.name}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2"
                        >
                            <client.icon className="w-8 h-8 md:w-10 md:h-10 text-zinc-800" />
                            <span className="text-xl font-bold text-zinc-800 font-display">
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
