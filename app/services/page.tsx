"use client";

import { servicesContent } from "@/data/constants";
import { PenTool, MessageCircle, Target, Code, Check, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const iconMap = {
    PenTool: PenTool,
    MessageCircle: MessageCircle,
    Target: Target,
    Code: Code,
};

function ServiceCard({ service, index }: { service: typeof servicesContent[0], index: number }) {
    const IconComponent = iconMap[service.icon as keyof typeof iconMap];
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            id={service.slug}
            className="group relative"
        >
            <div className={`relative z-10 bg-white border-2 border-black rounded-4xl shadow-hard overflow-hidden flex flex-col xl:flex-row hover:shadow-hard-reverse transition-shadow duration-300 ${!isExpanded ? 'pb-0' : ''}`}>

                {/* Left Side: Identity & Main Description */}
                <div className={`xl:w-[45%] p-8 md:p-12 lg:p-16 border-b-2 xl:border-b-0 xl:border-r-2 border-black flex flex-col justify-between ${service.color} bg-opacity-20 relative overflow-hidden text-black`}>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 p-12 opacity-5 transform translate-x-1/2 -translate-y-1/2">
                        <IconComponent size={400} strokeWidth={1.5} />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <span className={`w-16 h-16 rounded-2xl border-2 border-black bg-white flex items-center justify-center shadow-hard-sm group-hover:rotate-12 transition-transform duration-300`}>
                                <IconComponent size={32} className="text-black" strokeWidth={2} />
                            </span>
                            <span className="font-display font-bold text-xl uppercase tracking-wider border border-black px-3 py-1 rounded-full bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                0{index + 1}
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-6xl font-display font-bold mb-4 md:mb-6 leading-[0.9]">
                            {service.title}
                        </h2>
                        <p className="text-lg md:text-2xl font-bold font-sans mb-6 md:mb-8 border-l-4 border-black pl-4">
                            {service.tagline}
                        </p>

                        {/* Mobile: Truncate description if not expanded */}
                        <div className="md:hidden">
                            <p className={`text-sm font-medium leading-relaxed opacity-90 ${!isExpanded ? 'line-clamp-3' : ''}`}>
                                {service.description}
                            </p>
                        </div>

                        {/* Desktop: Always show full description */}
                        <div className="hidden md:block">
                            <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90">
                                {service.description}
                            </p>
                        </div>

                    </div>

                    <div className="mt-8 md:mt-12 pt-8 border-t-2 border-black/10 relative z-10 hidden md:block">
                        <div className="flex flex-wrap gap-3">
                            {['Startups', 'Scale-ups', 'Enterprise'].map((tag) => (
                                <span key={tag} className="px-4 py-1.5 bg-white border border-black rounded-full text-xs font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Expand Button */}
                    <div className="mt-6 md:hidden relative z-20">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider border-2 border-black px-4 py-2 rounded-full bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all w-full justify-center"
                        >
                            {isExpanded ? (
                                <>
                                    Show Less <ChevronUp size={16} />
                                </>
                            ) : (
                                <>
                                    View Features & Details <ChevronDown size={16} />
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Right Side: Features & Deliverables (Collapsible on Mobile) */}
                <div className={`xl:w-[55%] bg-white flex-col justify-between ${isExpanded ? 'flex' : 'hidden xl:flex'}`}>
                    <div className="p-8 md:p-12 lg:p-16">
                        <div className="mb-12">
                            <h3 className="text-lg md:text-3xl font-display font-bold mb-6 flex items-center gap-2">
                                Why choose our <span className="underline decoration-wavy decoration-2 decoration-pop-purple underline-offset-4">{service.title}</span>?
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4 md:p-4 p-2 rounded-2xl border-2 border-gray-100 hover:border-black hover:bg-pop-offwhite transition-all duration-300 group/item hover:shadow-hard-sm">
                                        <div className={`mt-1 min-w-[24px] h-[24px] rounded-full ${service.color} flex items-center justify-center border border-black shrink-0`}>
                                            <Check size={14} className="text-black" strokeWidth={3} />
                                        </div>
                                        <span className="text-base md:text-lg font-medium text-gray-800 leading-tight">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className={`p-8 rounded-3xl ${service.color} bg-opacity-25 border-2 border-black border-dashed`}>
                                <p className="font-serif italic text-lg md:text-2xl text-center leading-relaxed">
                                    "{service.conclusion}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.section>
    );
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen py-20 overflow-x-hidden bg-pop-offwhite">
            {/* Hero Section */}
            <section className="relative px-4 mb-20 md:mb-24">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6 px-6 py-2 border-2 border-black bg-pop-green shadow-hard-sm font-bold text-sm md:text-base uppercase tracking-wider transform -rotate-2 hover:rotate-0 transition-transform cursor-default"
                    >
                        What We Do
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-6xl md:text-9xl font-display font-bold mb-8 leading-[0.85] tracking-tight"
                    >
                        Services that <br />
                        <span className="text-stroke-2 text-transparent hover:text-pop-purple transition-colors duration-300">
                            Scale Brands
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-3xl text-gray-800 max-w-3xl mx-auto font-medium leading-tight"
                    >
                        We don't just execute tasks. We build digital ecosystems that drive real business growth.
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                {servicesContent.map((service, index) => (
                    <ServiceCard key={service.title} service={service} index={index} />
                ))}
            </div>

            {/* CTA Section */}
            <section className="my-12 md:my-20 px-2 md:px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto bg-black text-white rounded-3xl py-10 px-4 md:px-8 md:p-32 text-center relative overflow-hidden border-2 border-black shadow-hard"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-pop-purple rounded-full blur-[100px] animate-pulse"></div>
                        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pop-blue rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight">
                            Ready to dominate <br /> your market?
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
                            Let's turn your vision into a digital powerhouse.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-pop-yellow text-black text-xl font-bold py-5 px-12 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_white] hover:shadow-[2px_2px_0px_0px_white] transition-all"
                            >
                                Start Your Project
                            </motion.a>
                            <motion.a
                                href="/work"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent text-white text-xl font-bold py-5 px-12 rounded-full border-2 border-white hover:bg-white hover:text-black transition-colors"
                            >
                                View Our Work
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
