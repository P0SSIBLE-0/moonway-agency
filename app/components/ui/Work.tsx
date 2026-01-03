"use client";

import React from "react";
import Container from "./Container";
import { motion } from "motion/react";
import Image from "next/image";
import Button from "./Button";

const projects = [
    {
        title: "Zynex Financial",
        category: "Fintech Website",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "EcoStream App",
        category: "Mobile Application",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "Lumina Art Gallery",
        category: "Brand Identity",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "Apex Logistics",
        category: "Web Platform",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
];

export default function Work() {
    return (
        <section id="work" className="py-24 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display text-zinc-900">
                            Selected Work
                        </h2>
                        <p className="text-lg text-zinc-600 max-w-lg">
                            A showcase of our most recent digital partnerships and the stories behind them.
                        </p>
                    </div>
                    <Button variant="outline" className="rounded-full">View All Projects</Button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-4/3 bg-zinc-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <h3 className="text-2xl font-bold font-display text-zinc-900 group-hover:text-purple-700 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-zinc-500 font-medium mt-2">{project.category}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
