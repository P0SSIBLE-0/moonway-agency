'use client';
import Container from "./Container";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Search, Megaphone, Laptop, Palette, BarChart, ArrowUpRight, MousePointer2, LayoutTemplate } from "lucide-react";

export default function Services() {
    return (
        <section id="services" className="bg-neutral-950 py-32 relative overflow-hidden">
            {/* Background Grids */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff09_1px,transparent_1px),linear-gradient(to_bottom,#ffffff09_1px,transparent_1px)] bg-size-[2rem_2rem]" />

            <Container className="relative z-10">
                <div className="mb-10 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-orange-500 font-mono tracking-widest text-sm mb-4 uppercase"
                    >
                // What We Do Best
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 "
                    >
                        Everything you need to <span className="text-zinc-500">grow your brand online</span>—under one roof.
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* Service 1: SEO */}
                    <BentoCard
                        className="md:col-span-2 bg-zinc-900/50 border-zinc-800"
                        title="SEO (Search Engine Optimization)"
                        description="We optimize your website to attract high-intent traffic through technical SEO, on-page optimization, content strategy, and link building—so customers find you when it matters most."
                        header={<SEOVisual />}
                        icon={<Search className="w-6 h-6 text-white" />}
                        delay={0.2}
                    />

                    {/* Service 2: SEM */}
                    <BentoCard
                        className="md:col-span-1 bg-zinc-900/50 border-zinc-800"
                        title="SEM & Paid Search"
                        description="Instant visibility with measurable ROI. We create and manage high-performing search campaigns."
                        header={<SEMVisual />}
                        icon={<MousePointer2 className="w-6 h-6 text-white" />}
                        delay={0.3}
                    />

                    {/* Service 3: Paid Ads (Facebook & Google) */}
                    <BentoCard
                        className="md:col-span-1 bg-zinc-900/50 border-zinc-800"
                        title="Paid Ads (Social)"
                        description="Scroll-stopping ads that convert. Action-driven campaigns across Facebook & Instagram."
                        header={<AdsVisual />}
                        icon={<Megaphone className="w-6 h-6 text-white" />}
                        delay={0.4}
                    />

                    {/* Service 4: Website Design & Development */}
                    <BentoCard
                        className="md:col-span-1 bg-zinc-900/50 border-zinc-800"
                        title="Website Design & Development"
                        description="Websites built to perform. We design and develop fast, responsive, conversion-focused websites that reflect your brand."
                        header={<WebVisual />}
                        icon={<Laptop className="w-6 h-6 text-white" />}
                        delay={0.5}
                    />

                    {/* Service 5: Graphic Design & Branding */}
                    <BentoCard
                        className="md:col-span-1 bg-zinc-900/50 border-zinc-800"
                        title="Graphic Design & Branding"
                        description="Design that makes your brand unforgettable. We craft visual identities and assets that stay consistent across every platform."
                        header={<DesignVisual />}
                        icon={<Palette className="w-6 h-6 text-white" />}
                        delay={0.6}
                    />

                </div>
            </Container>
        </section>
    );
}

function BentoCard({ className, title, description, header, icon, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            className={cn(
                "group relative overflow-hidden rounded border-2 p-5 flex flex-col justify-between hover:border-purple-500/50 transition-colors duration-500",
                className
            )}
        >
            <div className="mb-5 relative z-10 w-full h-48 md:h-60 rounded-lg overflow-hidden bg-zinc-950/50 border border-zinc-800 group-hover:border-zinc-700 transition-colors flex items-center justify-center">
                {header}
            </div>

            <div className="relative z-10">
                <div className={`size-10 rounded-full bg-purple-500 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-900/20`}>
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-500 transition-colors">{title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-sm max-w-2xl">{description}</p>
            </div>

            {/* Hover Glow */}
            <div className={`absolute z-20 inset-0 bg-linear-to-b from-transparent via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
        </motion.div>
    )
}

// --- Visual Components (Skeletons/Animations) ---

function SEOVisual() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden p-5">
            {/* Search Bar Simulation */}
            <div className="w-full max-w-[200px] bg-zinc-800 rounded-full h-8 flex items-center px-4 gap-3 mb-6 border border-zinc-700 shadow-sm">
                <div className="w-3 h-3 rounded-full border-2 animate-pulse border-zinc-500" />
                <div className="h-1.5 w-full bg-zinc-600/50 rounded-full animate-pulse" />
            </div>

            {/* Rank Cards */}
            <div className="space-y-3 w-full max-w-[240px] relative z-0">
                {/* Rank 1 */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-zinc-900 border border-zinc-700 p-3 rounded-xl flex items-center justify-between shadow-lg"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-6 h-6 bg-orange-500/10 rounded-full">
                            <span className="text-orange-500 font-bold text-xs">#1</span>
                        </div>
                        <div className="space-y-1">
                            <div className="h-1.5 w-20 bg-zinc-600 rounded-full animate-pulse" />
                            <div className="h-1 w-12 bg-zinc-700 rounded-full" />
                        </div>
                    </div>
                    <span className="text-green-500 text-xs font-mono font-medium">+24%</span>
                </motion.div>

                {/* Rank 2 */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center justify-between"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-6 h-6 bg-zinc-800 rounded-full">
                            <span className="text-zinc-500 font-bold text-xs">#2</span>
                        </div>
                        <div className="space-y-1">
                            <div className="h-1.5 w-16 bg-zinc-800 rounded-full" />
                            <div className="h-1 w-10 bg-zinc-800/50 rounded-full" />
                        </div>
                    </div>
                    <span className="text-zinc-600 text-xs font-mono">-</span>
                </motion.div>
            </div>

            {/* Floating Stat Bubble */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute bottom-6 right-5 bg-zinc-950 border border-zinc-800 p-3 pl-4 rounded-xl shadow-xl flex items-center gap-3 z-10"
            >
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-zinc-500">Traffic</span>
                    <span className="text-lg font-bold font-sans text-white">12.5k</span>
                </div>
                <div className="h-8 w-px bg-zinc-800" />
                <span className="text-green-500 font-bold text-sm">+128%</span>
            </motion.div>
        </div>
    )
}

function SEMVisual() {
    return (
        <div className="w-4/5 flex flex-col items-center justify-center gap-3">
            <div className="w-full bg-zinc-800 rounded-full h-10 flex items-center px-4 border border-zinc-700">
                <div className="w-4 h-4 rounded-full border border-zinc-500 mr-2" />
                <div className="w-1/2 h-2 bg-zinc-600 rounded" />
            </div>
            <div className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-xl mt-2 relative overflow-hidden">
                <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-orange-500 text-[8px] font-bold text-white rounded">AD</div>
                <div className="mt-4 w-3/4 h-3 bg-orange-500/20 rounded mb-2" />
                <div className="w-full h-2 bg-zinc-800 rounded" />
                <div className="w-2/3 h-2 bg-zinc-800 rounded mt-1" />

                {/* Mouse Cursor */}
                <motion.div
                    animate={{ x: [0, 50, 50, 0], y: [0, 20, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute top-1/3 left-1/3 text-white drop-shadow-lg"
                >
                    <MousePointer2 className="w-6 h-6 fill-black stroke-white" />
                </motion.div>
            </div>
        </div>
    )
}

function AdsVisual() {
    return (
        <div className="w-48 bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex flex-col gap-3 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 rounded-full" />
                <div className="w-20 h-2 bg-zinc-700 rounded" />
            </div>
            <div className="w-full h-24 bg-zinc-800 rounded-lg relative overflow-hidden group-hover:bg-zinc-700 transition-colors">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-purple-500/20"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                />
            </div>
            <div className="flex justify-between items-center">
                <div className="w-16 h-2 bg-zinc-700 rounded" />
                <div className="w-12 h-6 bg-orange-600 rounded text-[8px] text-white flex items-center justify-center font-bold">
                    SHOP NOW
                </div>
            </div>
        </div>
    )
}

function WebVisual() {
    return (
        <div className="w-full h-full p-4 flex items-center justify-center">
            <div className="w-full max-w-[300px] h-[180px] bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden flex flex-col shadow-2xl">
                <div className="h-6 bg-zinc-800 flex items-center px-3 gap-1.5 border-b border-zinc-700">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="ml-4 w-1/2 h-3 bg-zinc-900 rounded-full" />
                </div>
                <div className="flex-1 p-4 grid grid-cols-3 gap-3">
                    <div className="col-span-2 space-y-2">
                        <div className="w-1/2 h-8 bg-zinc-600 rounded-lg" />
                        <div className="w-full h-3 bg-zinc-800 rounded" />
                        <div className="w-full h-3 bg-zinc-800 rounded" />
                        <div className="flex gap-2 pt-2">
                            <div className="w-12 h-6 bg-orange-600 rounded" />
                            <div className="w-12 h-6 bg-zinc-700 rounded" />
                        </div>
                    </div>
                    <div className="col-span-1 h-full bg-zinc-800 rounded-lg relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-white/5"
                            animate={{ translateY: ["100%", "-100%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function DesignVisual() {
    return (
        <div className="w-full h-full flex items-center justify-center gap-6 p-4">
            {/* Color Palette */}
            <div className="flex flex-col gap-2">
                <motion.div whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-lg bg-orange-500 shadow-lg cursor-pointer" />
                <motion.div whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-lg bg-black border border-zinc-700 shadow-lg cursor-pointer" />
                <motion.div whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-lg bg-white shadow-lg cursor-pointer" />
                <motion.div whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-lg bg-purple-500 shadow-lg cursor-pointer" />
            </div>

            {/* Layout Grid */}
            <div className="w-32 h-40 bg-zinc-900 border border-zinc-700 grid grid-cols-2 gap-1 p-1 rotate-6 shadow-2xl">
                <div className="bg-zinc-800 rounded-sm col-span-2 h-1/3" />
                <div className="bg-zinc-800 rounded-sm h-1/3" />
                <div className="bg-zinc-800 rounded-sm h-1/3" />
                <div className="bg-zinc-800 rounded-sm col-span-2 h-1/3" />
            </div>

            {/* Font Typography Aa */}
            <div className="text-6xl font-serif italic text-zinc-800 font-bold relative">
                Ag
                <LayoutTemplate className="absolute -top-4 -right-4 w-8 h-8 text-orange-500" />
            </div>
        </div>
    )
}
