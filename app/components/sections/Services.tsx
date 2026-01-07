'use client';
import Container from "../ui/Container";
import { motion, steps } from "motion/react";
import { cn } from "@/lib/utils";
import { Search, MousePointer2 } from "lucide-react";
import Image from "next/image";

const SERVICES_DATA = [
    {
        title: 'Social Media Marketing',
        description: "Turn scrolls into sales. We plan, create, and manage content that builds authority, grows your audience, and actually drives revenue—not just likes.",
        className: "md:col-span-3 bg-zinc-900/50 border-zinc-800",
        header: <SocialMediaVisual />,
        icons: <Search className="w-6 h-6 text-white" />,
        delay: 0.2
    },
    {
        title: 'Meta & Google Ads',
        description: "Every click earns its keep. We launch, test, and scale ad campaigns with one goal: profitable growth. Data-driven targeting. Ruthless optimization.",
        className: "md:col-span-2 bg-zinc-900/50 border-zinc-800",
        header: <SEMVisual />,
        icons: <MousePointer2 className="w-6 h-6 text-white" />,
        delay: 0.2
    },
    {
        title: 'Graphic Design & Video Editing',
        description: "Design that stops thumbs.From brand visuals to high-performing creatives, we craft designs and videos made to convert across every platform.",
        className: "md:col-span-2 bg-zinc-900/50 border-zinc-800",
        header: <DesignVisual />,
        icons: <MousePointer2 className="w-6 h-6 text-white" />,
        delay: 0.2
    },
    {
        title: 'Website Development',
        description: "Websites that sell while you sleep. Whether it’s Shopify, WordPress, or custom-coded, we build fast, scalable, conversion-optimized websites—no templates, no compromises.",
        className: "md:col-span-3 bg-zinc-900/50 border-zinc-800",
        header: <WebVisual />,
        icons: <MousePointer2 className="w-6 h-6 text-white" />,
        delay: 0.2
    },
]

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

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 auto-rows-[minmax(300px,auto)]">
                    {SERVICES_DATA.map((service, index) => (
                        <BentoCard
                            key={index}
                            className={service.className}
                            title={service.title}
                            description={service.description}
                            header={service.header}
                            icon={service.icons}
                            delay={service.delay}
                        />
                    ))}

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

function SEMVisual() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative md:p-6 p-2">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />

            <div className="w-full max-w-[280px] space-y-3 relative z-10">
                {/* Search Bar */}
                <div className="w-full h-10 bg-zinc-800 rounded-full border border-zinc-700 flex items-center px-4 mb-6">
                    <div className="w-4 h-4 border-2 border-zinc-500 rounded-full mr-3" />
                    <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "60%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-2 bg-zinc-600 rounded-full"
                    />
                </div>

                {/* Ad Results */}
                {[1, 2].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 * i }}
                        className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-3 rounded-lg flex gap-3"
                    >
                        <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-[10px] font-bold text-orange-500">
                            AD
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="w-3/4 h-2 bg-zinc-700 rounded" />
                            <div className="w-1/2 h-2 bg-zinc-800 rounded" />
                        </div>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 1 + (i * 0.2) }}
                        >
                            <MousePointer2 className="w-4 h-4 text-orange-500 fill-orange-500/20" />
                        </motion.div>
                    </motion.div>
                ))}
                <Image className="absolute top-2.5 right-2" src="/google.svg" alt="Google" width={20} height={20} />
            </div>
        </div>
    )
}

function SocialMediaVisual() {
    return (
        <div className="w-full h-full flex items-center justify-center p-6 relative">
            {/* Floating Social Cards */}
            <div className="relative w-full max-w-[200px] h-[160px]">
                <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-32 bg-zinc-800 p-3 rounded-xl border border-zinc-700 shadow-xl z-20"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500" />
                        <div className="w-16 h-2 bg-zinc-600 rounded" />
                    </div>
                    <div className="w-full h-16 bg-zinc-900 rounded mb-2" />
                    <div className="flex gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-500/20" />
                        <div className="w-4 h-4 rounded-full bg-blue-500/20" />
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-0 left-0 w-32 bg-zinc-900 p-3 rounded-xl border border-zinc-800 shadow-xl z-10"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-orange-500" />
                        <div className="w-16 h-2 bg-zinc-700 rounded" />
                    </div>
                    <div className="w-full h-8 bg-zinc-950 rounded mb-2" />
                    <div className="w-1/2 h-2 bg-zinc-800 rounded" />
                </motion.div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30">
                    <motion.path
                        d="M 40 120 Q 100 80 160 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-purple-500"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5 }}
                    />
                </svg>
            </div>
        </div>
    )
}


function WebVisual() {
    return (
        <div className="w-full h-full flex items-center justify-center p-6 bg-zinc-950/30">
            <div className="w-full max-w-[320px] bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
                {/* Browser Header */}
                <div className="h-8 bg-zinc-950 border-b border-zinc-800 flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    <div className="ml-2 px-2 py-0.5 bg-zinc-800 rounded text-[8px] text-zinc-500 font-mono">moonway.agency</div>
                </div>

                {/* Website Content */}
                <div className="p-4 grid grid-cols-12 gap-3 h-full">
                    {/* Sidebar */}
                    <div className="col-span-3 space-y-2">
                        <div className="w-full h-2 bg-zinc-800 rounded" />
                        <div className="w-full h-2 bg-zinc-800/50 rounded" />
                        <div className="w-full h-2 bg-zinc-800/50 rounded" />
                    </div>

                    {/* Main Area */}
                    <div className="col-span-9 space-y-3">
                        {/* Hero Banner with Typing Effect */}
                        <div className="w-full h-20 bg-zinc-800/50 rounded-lg border border-zinc-800 relative overflow-hidden p-3 flex flex-col justify-center gap-2">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "70%" }}
                                transition={{ duration: 1.5, ease: steps(10) }}
                                className="h-2 bg-brand rounded overflow-hidden"
                            />
                            <div className="h-2 w-1/2 bg-zinc-700 rounded" />

                            {/* Scanning Line Effect */}
                            <motion.div
                                className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12"
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            />
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-2 gap-2">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="h-10 bg-zinc-800 rounded"
                            />
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="h-10 bg-zinc-800 rounded"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function DesignVisual() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background shapes */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center opacity-10"
            >
                <div className="w-64 h-64 border border-dashed border-zinc-500 rounded-full" />
            </motion.div>

            <div className="relative z-10 w-full max-w-[200px] h-[160px]">
                {/* Layer 1 - Bottom */}
                <motion.div
                    initial={{ rotate: -5, x: -10 }}
                    whileHover={{ rotate: -12, x: -20 }}
                    transition={{ type: "spring" }}
                    className="absolute top-4 left-4 w-32 h-32 bg-brand rounded-xl mix-blend-multiply opacity-80"
                />

                {/* Layer 2 - Middle */}
                <motion.div
                    initial={{ rotate: 5, x: 10 }}
                    whileHover={{ rotate: 12, x: 20 }}
                    transition={{ type: "spring" }}
                    className="absolute top-4 right-4 w-32 h-32 bg-orange-500 rounded-xl mix-blend-multiply opacity-80"
                />

                {/* Layer 3 - Top (Video Player) */}
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-28 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl flex items-center justify-center z-20"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-14 border-l-white border-b-8 border-b-transparent ml-1" />
                    </div>

                    {/* Timeline */}
                    <div className="absolute bottom-2 left-2 right-2 h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-red-500"
                            animate={{ width: ["0%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
