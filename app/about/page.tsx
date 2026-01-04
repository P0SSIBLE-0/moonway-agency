"use client"
import { motion } from "motion/react";
import { TrendingUp, Award, Zap, Activity, Layers, ArrowUpRight } from "lucide-react";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-zinc-950 font-sans text-white overflow-x-hidden selection:bg-indigo-500 selection:text-white">

            {/* 1. Hero Section - Massive Typography & Mesh Gradient */}
            <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-4 md:px-6 overflow-hidden">
                {/* Subtle Mesh Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-linear-to-b from-blue-100/40 to-indigo-100/40 blur-[100px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-6xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-100 bg-indigo-50/80 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                            Our Manifesto
                        </div>
                        <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-bold tracking-tight leading-12 md:leading-[0.9] mb-10 text-white">
                            Building Brands <br className="hidden md:block" />
                            <span className="text-neutral-600">That Defy</span> <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600">
                                Expectation.
                            </span>
                        </h1>
                        <p className="text-base md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light border-l-2 border-indigo-100 pl-6 md:pl-8">
                            From performance marketing to digital experiences, we are not just an agency. We are your growth partners in the digital age.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Narrative Section - Editorial Layout */}
            <section className="py-24 px-4 md:px-6 relative">
                <div className="absolute top-0 right-0 p-[20vw] opacity-[0.03] text-indigo-900 pointer-events-none select-none">
                    <Activity size={800} strokeWidth={0.5} />
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                        {/* Left Column: Bio */}
                        <div className="lg:col-span-7 space-y-12">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">
                                    Hi, I'm Abhishek.
                                </h2>
                                <div className="space-y-6 text-lg md:text-xl text-white leading-relaxed font-light">
                                    <p>
                                        Your friendly neighborhood <strong className="text-white font-semibold">Performance Marketer</strong>.
                                        With over <strong className="text-white font-semibold">4 years</strong> of focused experience partnering with more than <strong className="text-white font-semibold">15 brands</strong>, I've learned that impactful marketing isn't just about numbers—it's about connection.
                                    </p>
                                    <p>
                                        I lead a team of extremely brilliant human beings that don't just complete the work—they make it memorable. From <span className="text-white font-medium font-serif italic text-2xl mx-1">"Kashmir to Kanyakumari"</span> (Graphic Designer to Website Builder), we cover all brand requirements under one roof.
                                    </p>
                                </div>
                            </div>

                            {/* Stat Blocks */}
                            <div className="grid grid-cols-2 gap-4 md:gap-8">
                                <div className="p-8 bg-neutral-900 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">4+</div>
                                    <div className="text-sm font-bold text-white uppercase tracking-widest">Years Experience</div>
                                </div>
                                <div className="p-8 bg-neutral-900 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">15+</div>
                                    <div className="text-sm font-bold text-white uppercase tracking-widest">Brands Scaled</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Key Quote Card */}
                        <div className="lg:col-span-5 pt-8 lg:pt-24 md:sticky md:top-24">
                            <div className="bg-slate-900 text-white p-10 md:p-12 rounded-xl relative overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500">
                                {/* Gradient Blob */}
                                <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-linear-to-b from-indigo-500 to-purple-500 rounded-full blur-[80px] opacity-40" />

                                <Zap className="text-yellow-400 mb-8 relative z-10" size={40} fill="currentColor" />

                                <blockquote className="text-2xl md:text-3xl font-medium leading-normal relative z-10 font-serif">
                                    "Just connect with me and your brand may become the next best brand of the decade."
                                </blockquote>

                                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center relative z-10">
                                    <div>
                                        <div className="font-bold">Abhishek</div>
                                        <div className="text-white text-sm">Founder, Moonway</div>
                                    </div>
                                    <Link href="/contact" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                        <ArrowUpRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. KPI Focus Section - Dark Theme Switch */}
            <section className="py-18 px-4 md:px-6 bg-slate-950 text-white rounded-2xl mx-2 md:mx-6 overflow-hidden relative">
                {/* Background Glows */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Results Majorly <br /> Focused on KPIs</h2>
                            <p className="text-sm text-white font-light border-l border-white pl-6">We don't deal in vanity metrics. We focus on what actually moves the needle.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            {
                                title: "ROI Driven",
                                desc: "Every dollar spent is tracked and optimized for maximum return on investment using advanced attribution models.",
                                icon: TrendingUp,
                                color: "text-green-400",
                                bg: "bg-green-500/10 border-green-500/20"
                            },
                            {
                                title: "Data Backed",
                                desc: "No gut feelings. Only strategic moves based on real-time analytics and user behavior patterns.",
                                icon: Activity,
                                color: "text-blue-400",
                                bg: "bg-blue-500/10 border-blue-500/20"
                            },
                            {
                                title: "Quality Leads",
                                desc: "We filter out the noise. Conversion-ready audiences that actually want to buy what you're selling.",
                                icon: Award,
                                color: "text-purple-400",
                                bg: "bg-purple-500/10 border-purple-500/20"
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className={`p-5 md:p-10 rounded-xl border ${item.bg} backdrop-blur-sm transition-all duration-300 group`}
                            >
                                <div className={`mb-8 ${item.color}`}>
                                    <item.icon size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Modern Contact / Lead Form Section */}
            <section className="py-24 md:py-32 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Left Side: Call to Action */}
                        <div className="lg:col-span-5 space-y-8 lg:pt-12">
                            <span className="inline-block py-1 px-4 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-sm font-bold tracking-wide">
                                Let's Work Together
                            </span>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[0.9]">
                                Ready to <br /> Scale Your <span className="text-indigo-600">Brand?</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-md font-light">
                                Let's discuss how we can take your business to the next level. Fill out the form, and I'll get back to you personally.
                            </p>

                            <div className="pt-8 space-y-4">
                                <Link href="/services" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <Layers size={20} />
                                    </div>
                                    <div className="font-medium text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                                        Audit Current Campaigns
                                    </div>
                                </Link>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <Zap size={20} />
                                    </div>
                                    <div className="font-medium text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                                        Free Strategy Consultation
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Reusable Form */}
                        <div className="lg:col-span-7">
                            <ContactForm className="bg-white" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
