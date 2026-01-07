"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react";
import ContactForm from "../components/sections/ContactForm";
import { footerDetails } from "@/data/constants";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-pop-black font-sans text-neutral-200 overflow-x-hidden selection:bg-indigo-500 selection:text-purple-400">
            {/* 1. Hero Section */}
            <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-4 md:px-6 overflow-hidden">
                {/* Background Ethereal Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-linear-to-b from-indigo-100/50 to-purple-100/50 blur-[100px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-100 bg-indigo-300 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                            Get in Touch
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8 text-white">
                            Let's Build Something <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                                Extraordinary.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light">
                            Have a project in mind? We'd love to hear about it. Send us a message and let's start a conversation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Content Grid */}
            <section className="pb-24 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                        {/* Left Column: Contact Info Cards */}
                        <div className="lg:col-span-5 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6"
                            >
                                {/* Info Cards */}
                                <div className="group p-6 rounded-lg  border border-zinc-800 shadow-xl shadow-zinc-900/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Chat to us</h3>
                                    <p className="text-slate-500 mb-4 font-light">Our friendly team is here to help.</p>
                                    <a href="mailto:hello@moonway.agency" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-2">
                                        {footerDetails.contact.email}  <ArrowRight size={16} />
                                    </a>
                                </div>

                                <div className="group p-6 rounded-lg border border-zinc-800 shadow-xl shadow-zinc-900/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                                        <MapPin size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Visit us</h3>
                                    <p className="text-slate-300 mb-4 font-light">Come say hello at our office HQ.</p>
                                    <address className="not-italic text-slate-200 font-medium">
                                        {footerDetails.contact.address}
                                    </address>
                                </div>

                                <div className="group p-6 rounded-lg border border-zinc-800 shadow-xl shadow-zinc-900/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                        <Phone size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Call us</h3>
                                    <p className="text-slate-500 mb-3 font-light">Mon-Fri from 8am to 5pm.</p>
                                    <a href="tel:+91 9990053034" className="text-slate-100 font-medium hover:text-indigo-600 transition-colors">
                                        +91 9990053034
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="lg:col-span-7 sticky top-24">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <ContactForm />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Map / Location Visual Section */}
            <section className="py-20 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden relative shadow-2xl skew-y-1 hover:skew-y-0 transition-all duration-700 bg-slate-900 group">
                        {/* Abstract Map Representation */}
                        <div className="absolute inset-0 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center grayscale invert opacity-20" />

                        <div className="absolute inset-0 bg-linear-to-tr from-slate-900 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md text-sm font-bold mb-4">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                HQ Layout
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Global Reach, <br /> Local Hearts.</h2>
                        </div>

                        {/* Decorative Radar/Pulse Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-[80px] group-hover:bg-indigo-500/30 transition-colors duration-500" />
                    </div>
                </div>
            </section>
        </main>
    );
}
