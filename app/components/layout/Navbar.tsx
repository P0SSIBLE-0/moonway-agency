"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import Link from "next/link";
import Container from "../ui/Container";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { links } from "@/data/constants";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
                scrolled
                    ? "bg-black/90 backdrop-blur-md border-b border-zinc-800 py-4"
                    : "bg-transparent py-6 text-gray-100"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Logo Icon similar to reference */}

                    <span className="font-sans font-bold text-xl uppercase tracking-widest text-white">
                        <Image src="/logo.svg" alt="Logo" width={160} height={46} />
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={cn("text-sm uppercase tracking-wider font-semibold text-neutral-400 hover:text-purple-500 transition-colors relative group", scrolled && "text-white", isActive(link.href) && "text-purple-500/90",)}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>


                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu className={`text-${scrolled ? "white" : "gray-400"}`} />}
                </button>
            </Container>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-zinc-950 border-b border-zinc-800 overflow-hidden mt-2"
                    >
                        <Container className="py-6 flex flex-col gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-lg font-bold uppercase text-zinc-300 hover:text-orange-500"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
