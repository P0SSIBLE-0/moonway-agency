"use client";

import { servicesContent } from "@/data/constants";
import { PenTool, MessageCircle, Target, Code, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

const iconMap = {
    PenTool: PenTool,
    MessageCircle: MessageCircle,
    Target: Target,
    Code: Code,
};

const ServiceSection = ({ service, index }: { service: typeof servicesContent[0], index: number }) => {
    const IconComponent = iconMap[service.icon as keyof typeof iconMap];
    const isEven = index % 2 === 0;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Map the pop colors to Tailwind classes for gradients/text
    const getColorClass = (bgClass: string) => {
        if (bgClass.includes('purple')) return 'text-purple-400 from-purple-500 to-indigo-500';
        if (bgClass.includes('green')) return 'text-green-400 from-green-500 to-emerald-500';
        if (bgClass.includes('red')) return 'text-rose-400 from-rose-500 to-orange-500';
        if (bgClass.includes('yellow')) return 'text-amber-400 from-amber-500 to-yellow-500';
        return 'text-indigo-400 from-indigo-500 to-blue-500'; // Default
    };

    const colorClasses = getColorClass(service.color);

    return (
        <section ref={ref} id={service.slug} className="py-12 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            style={{ y, opacity }}
                            className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm group"
                        >
                            {/* Background Gradient Mesh */}
                            <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-br ${colorClasses} opacity-20 blur-[120px] rounded-full mix-blend-screen pointer-events-none transition-opacity duration-700 group-hover:opacity-30`} />

                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="relative z-10">
                                    <IconComponent
                                        size={120}
                                        strokeWidth={1}
                                        className={`text-white/80 drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:text-white`}
                                    />
                                </div>

                                {/* Decorative Circles */}
                                <div className="absolute inset-0 border-[1px] border-white/5 rounded-full scale-[0.8]" />
                                <div className="absolute inset-0 border-[1px] border-white/5 rounded-full scale-[0.6]" />
                            </div>

                            {/* Hover Reveal Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-black/80 to-transparent">
                                <p className="font-serif italic text-white/80 text-lg md:text-xl">"{service.conclusion}"</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <span className={`inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest mb-5 ${colorClasses.split(' ')[0]}`}>
                                0{index + 1} — {service.title}
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
                                {service.tagline}
                            </h2>
                            <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div>
                            <h3 className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-5 flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${colorClasses}`} />
                                {service.featuresTitle}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * idx }}
                                        className="flex items-start gap-3 group/item"
                                    >
                                        <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${colorClasses.split(' ')[0]} opacity-70 group-hover/item:opacity-100`} />
                                        <span className="text-zinc-400 group-hover/item:text-zinc-200 transition-colors text-sm sm:text-base">
                                            {feature}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-white font-medium hover:gap-4 transition-all group"
                            >
                                <span className="border-b border-white/30 pb-0.5 group-hover:border-white transition-colors">Start a Project</span>
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-neutral-950 font-sans text-white selection:bg-purple-500/30 selection:text-white overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
                <div className="absolute top-0 left-1/2 w-[80vw] h-[50vh] bg-purple-500/10 blur-[120px] -z-10 rounded-full -translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                            Our Expertise
                        </div>
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 font-display">
                            Services that <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-white/40">
                                Define Growth.
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
                            We build digital ecosystems that don't just exist—they perform. From brand identity to full-scale marketing, we handle it all.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <div className="relative z-10">
                {servicesContent.map((service, index) => (
                    <ServiceSection key={service.title} service={service} index={index} />
                ))}
            </div>

            {/* CTA Section */}
            <section className="py-24 md:py-40 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-neutral-950 to-neutral-900" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="bg-neutral-900/50 border border-white/10 rounded-3xl px-6 py-10 md:p-20 text-center overflow-hidden relative group">

                        {/* Interactive Glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] bg-indigo-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full pointer-events-none" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight font-display">
                                Ready to dominate <br /> your market?
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
                                Let's turn your vision into a digital powerhouse. Schedule a free consultation today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Link
                                    href="/contact"
                                    className="px-10 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-zinc-200 transition-colors"
                                >
                                    Start Your Project
                                </Link>
                                <Link
                                    href="/work"
                                    className="px-10 py-4 bg-transparent text-white border border-white/20 text-lg font-bold rounded-full hover:bg-white/5 transition-colors"
                                >
                                    View Our Work
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
