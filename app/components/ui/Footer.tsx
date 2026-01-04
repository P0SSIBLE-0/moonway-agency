"use client";

import React from "react";
import Container from "./Container";
import Link from "next/link";
import { Smile, ArrowUpRight } from "lucide-react";
import Marquee from "./Marquee";
import { footerDetails } from "@/data/constants";
import { motion } from "motion/react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 overflow-hidden relative border-t border-zinc-900">
            {/* Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid md:grid-cols-12 gap-12 mb-20">

                    {/* Brand & Mission */}
                    <div className="md:col-span-5 space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black font-display uppercase leading-tight mb-6">
                                READY TO <br />
                                <span className="text-purple-500">ROCKET?</span>
                            </h2>
                            <p className="text-zinc-400 font-mono text-sm max-w-sm leading-relaxed">
                                We build digital experiences that are as functional as they are beautiful. Let's start your journey today.
                            </p>
                        </div>

                        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl md:max-w-md">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">
                                Have questions? <Smile className="text-purple-500 w-5 h-5" />
                            </h3>
                            <a href="tel:+919876543210" className="w-full bg-white text-black font-bold uppercase py-3 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group">
                                Book a Call
                                <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Information */}
                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
                            <ul className="space-y-4">
                                {footerDetails.quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.url} className="text-zinc-400 hover:text-purple-500 transition-colors text-sm font-medium block w-fit">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Socials */}
                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Socials</h4>
                            <ul className="space-y-4">
                                {footerDetails.socials.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.url} className="text-zinc-400 hover:text-purple-500 transition-colors text-sm font-medium block w-fit">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info (Visible on larger screens or stacked) */}
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
                            <ul className="space-y-4 text-zinc-400 text-sm">
                                <li>
                                    <span className="block text-zinc-600 text-xs mb-1">Email</span>
                                    {footerDetails.contact.email}
                                </li>
                                <li>
                                    <span className="block text-zinc-600 text-xs mb-1">Phone</span>
                                    {footerDetails.contact.phone}
                                </li>
                                <li>
                                    <span className="block text-zinc-600 text-xs mb-1">Office</span>
                                    {footerDetails.contact.address}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Big Animated Logo */}
                <div className="border-t border-zinc-900 py-10 flex flex-col items-center justify-center relative overflow-hidden">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[15vw] md:text-[15vw] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-zinc-700 via-zinc-800 to-black/50 select-none pointer-events-none"
                    >
                        MOONWAY
                    </motion.h1>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 border-t border-zinc-900 text-xs text-zinc-600 font-mono uppercase">
                    <div>
                        © {new Date().getFullYear()} Moonway Agency.
                    </div>
                    <div className="flex gap-6">
                        {footerDetails.legal.map(link => (
                            <Link key={link.name} href={link.url} className="hover:text-zinc-400 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
