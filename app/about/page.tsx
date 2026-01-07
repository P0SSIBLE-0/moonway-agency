"use client"
import { motion, useScroll, useTransform } from "motion/react";
import { TrendingUp, Award, Zap, Activity, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";
import ContactForm from "@/app/components/sections/ContactForm";
import Link from "next/link";
import { useRef } from "react";

export default function AboutPage() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <main className="min-h-screen bg-neutral-950 font-sans text-white overflow-x-hidden selection:bg-indigo-500/30 selection:text-white">

            {/* 1. Hero Section - Massive Typography & Mesh Gradient */}
            <section ref={ref} className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-4 md:px-6 overflow-hidden">
                {/* Subtle Mesh Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
                <motion.div style={{ y }} className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-indigo-500/10 blur-[120px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />
                <motion.div style={{ y }} className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-purple-500/10 blur-[120px] -z-10 rounded-full -translate-x-1/2 translate-y-1/2" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-6xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                            Our Manifesto
                        </div>
                        <h1 className="text-5xl md:text-8xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-10 text-white font-display">
                            Building Brands <br className="hidden md:block" />
                            <span className="text-zinc-600">That Defy</span> <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient-x">
                                Expectation.
                            </span>
                        </h1>
                        <p className="text-base md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light border-l-2 border-indigo-500/50 pl-6 md:pl-8">
                            From performance marketing to digital experiences, we are not just an agency. We are your growth partners in the digital age.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Narrative Section - Editorial Layout */}
            <section className="py-20 md:py-32 px-4 md:px-6 relative">
                <div className="absolute top-0 right-0 p-[20vw] opacity-[0.03] text-indigo-500 pointer-events-none select-none">
                    <Activity size={800} strokeWidth={0.5} />
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                        {/* Left Column: Bio */}
                        <div className="lg:col-span-7 space-y-12">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight font-display">
                                    Hi, I'm Abhishek.
                                </h2>
                                <div className="space-y-6 text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
                                    <p>
                                        Your friendly neighborhood <strong className="text-white font-semibold">Performance Marketer</strong>.
                                        With over <strong className="text-white font-semibold">4 years</strong> of focused experience partnering with more than <strong className="text-white font-semibold">15 brands</strong>, I've learned that impactful marketing isn't just about numbers—it's about connection.
                                    </p>
                                    <p>
                                        I lead a team of extremely brilliant human beings that don't just complete the work—they make it memorable. From <span className="text-white font-medium font-serif italic text-2xl mx-1">"Kashmir to Kanyakumari"</span> (Graphic Designer to Website Builder), we cover all brand requirements under one roof.
                                    </p>
                                </div>
                            </div>

                            {/* Stat Blocks - Glassmorphism */}
                            <div className="grid grid-cols-2 gap-4 md:gap-8">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-colors"
                                >
                                    <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter font-display">4+</div>
                                    <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Years Experience</div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-colors"
                                >
                                    <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter font-display">15+</div>
                                    <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Brands Scaled</div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Column: Key Quote Card */}
                        <div className="lg:col-span-5 pt-8 lg:pt-24 md:sticky md:top-24">
                            <div className="bg-indigo-900/20 backdrop-blur-md text-white p-10 md:p-12 rounded-3xl border border-indigo-500/20 relative overflow-hidden shadow-2xl group hover:border-indigo-500/40 transition-all duration-500">
                                {/* Gradient Blob */}
                                <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-linear-to-b from-indigo-500/30 to-purple-500/30 rounded-full blur-[80px]" />

                                <Zap className="text-yellow-400 mb-8 relative z-10 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" size={40} fill="currentColor" />

                                <blockquote className="text-2xl md:text-3xl font-medium leading-normal relative z-10 font-display">
                                    "Just connect with me and your brand may become the next best brand of the decade."
                                </blockquote>

                                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center relative z-10">
                                    <div>
                                        <div className="font-bold text-lg">Abhishek</div>
                                        <div className="text-zinc-400 text-sm">Founder, Moonway</div>
                                    </div>
                                    <Link href="/contact" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                        <ArrowUpRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. KPI Focus Section - Premium Cards */}
            <section className="py-24 px-4 md:px-6 relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                                Our Focus
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-display">Results Majorly <br /> <span className="text-zinc-500">Focused on KPIs</span></h2>
                            <p className="text-lg text-zinc-400 font-light border-l border-zinc-700 pl-6">We don't deal in vanity metrics. We focus on what actually moves the needle.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "ROI Driven",
                                desc: "Every dollar spent is tracked and optimized for maximum return on investment using advanced attribution models.",
                                icon: TrendingUp,
                                color: "text-emerald-400",
                                gradient: "from-emerald-500/20 to-green-500/5",
                                border: "group-hover:border-emerald-500/50"
                            },
                            {
                                title: "Data Backed",
                                desc: "No gut feelings. Only strategic moves based on real-time analytics and user behavior patterns.",
                                icon: Activity,
                                color: "text-blue-400",
                                gradient: "from-blue-500/20 to-indigo-500/5",
                                border: "group-hover:border-blue-500/50"
                            },
                            {
                                title: "Quality Leads",
                                desc: "We filter out the noise. Conversion-ready audiences that actually want to buy what you're selling.",
                                icon: Award,
                                color: "text-purple-400",
                                gradient: "from-purple-500/20 to-pink-500/5",
                                border: "group-hover:border-purple-500/50"
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`p-8 rounded-3xl border border-white/5 bg-linear-to-b ${item.gradient} backdrop-blur-sm transition-all duration-300 group ${item.border}`}
                            >
                                <div className={`mb-8 ${item.color} p-4 rounded-2xl bg-white/5 w-fit`}>
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                                <p className="text-zinc-400 leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Modern Contact / Lead Form Section */}
            <section className="py-24 md:py-32 px-4 md:px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Left Side: Call to Action */}
                        <div className="lg:col-span-5 space-y-8 lg:pt-12">
                            <span className="inline-block py-1 px-4 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-bold tracking-wide">
                                Let's Work Together
                            </span>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9] font-display">
                                Ready to <br /> Scale Your <span className="text-indigo-500">Brand?</span>
                            </h2>
                            <p className="text-xl text-zinc-400 leading-relaxed max-w-md font-light">
                                Let's discuss how we can take your business to the next level. Fill out the form, and I'll get back to you personally.
                            </p>

                            <div className="pt-8 space-y-4">
                                <Link href="/services" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                        <Layers size={20} />
                                    </div>
                                    <div className="font-medium text-lg text-white group-hover:text-indigo-400 transition-colors">
                                        Audit Current Campaigns
                                    </div>
                                </Link>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                        <Zap size={20} />
                                    </div>
                                    <div className="font-medium text-lg text-white group-hover:text-indigo-400 transition-colors">
                                        Free Strategy Consultation
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Reusable Form */}
                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
