"use client";
import React, { useRef } from "react";
import Container from "../ui/Container";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/constants";


export default function OurWork() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section className="bg-black py-10 relative overflow-hidden" ref={containerRef}>
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />


            <Container className="relative z-10 text-white">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-purple-500 font-mono tracking-widest text-sm mb-4 block"
                        >
                    // RECENT PROJECTS
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="text-4xl md:text-6xl font-bold font-sans tracking-tight mb-6"
                        >
                            Work That <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-purple-300 to-purple-600">Delivers Results</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl"
                        >
                            Explore how we&apos;ve helped brands increase traffic, generate leads, and build stronger digital presences through smart strategy and execution.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link href="/work" className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                            <span className="font-medium">View Case Studies</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`group relative flex flex-col gap-4 ${!isEven ? 'md:translate-y-16' : ''}`}
        >
            <div className="relative w-full h-[250px] md:h-[350px] rounded-lg overflow-hidden cursor-pointer">
                {/* Image */}
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 shadow-lg">
                        <ArrowUpRight className="w-8 h-8" />
                    </div>
                </div>

                {/* Category Badge - Always visible */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-medium text-white border border-white/10 uppercase tracking-wider">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                    </h3>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                    {project.description}
                </p>
                <div className={`h-1 w-0 group-hover:w-full bg-linear-to-r ${project.color} transition-all duration-700 ease-in-out mt-4`} />
            </div>
        </motion.div>
    )
}
