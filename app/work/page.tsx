'use client';

import { CASE_STUDIES } from '@/data/case-study.data';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming standard shadcn/utils or I'll implement inline if missing. I'll use standard clsx approach if needed, but for now assuming typical setup or standard conditional classes.

export default function WorkPage() {
    return (
        <div className="min-h-screen w-full bg-pop-black text-pop-white pb-32">

            {/* Header Section */}
            <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 font-display uppercase leading-[0.95]">
                    Our Work Creates<br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-purple-400">
                        Real Impact
                    </span>
                </h1>
                <p className="text-base md:text-xl font-medium text-neutral-400 max-w-3xl mx-auto leading-relaxed font-sans">
                    We don't just design pretty things. We build digital experiences that drive growth, define culture, and deliver undeniable results.
                </p>
            </section>

            {/* Case Studies List */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto flex flex-col gap-24">
                {CASE_STUDIES.map((study, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={study.id}
                            className={cn(
                                "group flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-16",
                                !isEven && "md:flex-row-reverse" // Swap direction for odd items
                            )}
                        >

                            {/* CONTENT SIDE (Left for Even, Right for Odd) */}
                            <div className="flex-1 flex flex-col justify-center">

                                {/* Header Tags */}
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="px-4 py-1.5 rounded-full border-2 border-black bg-white font-bold text-sm tracking-wide uppercase">
                                        {study.industry}
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-4xl md:text-6xl font-black mb-6 text-white font-display leading-tight group-hover:text-(--theme-color) transition-colors duration-300"
                                    style={{ '--theme-color': study.themeColor } as React.CSSProperties}>
                                    {study.brandName}
                                </h2>

                                {/* Description */}
                                <p className="text-base md:text-lg text-neutral-300 font-medium leading-relaxed mb-8 border-l-4 border-zinc-800 pl-6">
                                    {study.shortDescription}
                                </p>

                                {/* Services Tags */}
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {study.services.map((service) => (
                                        <span
                                            key={service}
                                            className="px-3 py-1 rounded-md bg-zinc-100 text-zinc-600 font-bold text-xs uppercase tracking-wider border border-zinc-200"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <div>
                                    <button
                                        className="relative inline-flex items-center gap-3 px-5 py-3 bg-pop-black text-white font-bold uppercase tracking-wider text-sm rounded-lg border-2 border-zinc-800 hover:bg-(--theme-color) hover:border-black transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                        style={{ '--theme-color': study.themeColor } as React.CSSProperties}
                                    >
                                        View Case Study
                                        <ArrowUpRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* IMAGE SIDE (Right for Even, Left for Odd) */}
                            <div className="flex-1 relative">
                                <div className="relative w-full aspect-4/3 rounded-xl border-2 border-black overflow-hidden bg-zinc-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">

                                    {/* Overlay Color on Hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 pointer-events-none"
                                        style={{ backgroundColor: study.themeColor }}
                                    />

                                    {/* Image */}
                                    <img
                                        src={study.coverImage}
                                        alt={study.brandName}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    />

                                    {/* Floating Metrics (The "Small things" requested to be with image) */}
                                    <div className="absolute -bottom-6 -right-6 md:-right-8 md:bottom-8 z-20 flex flex-col items-end gap-3 w-full px-10 pointer-events-none">
                                        {study.results.map((result, idx) => (
                                            <div
                                                key={idx}
                                                className="flex flex-col items-center justify-center bg-white border-2 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[140px] transform transition-transform duration-300 group-hover:-translate-y-1"
                                                style={{
                                                    transform: `rotate(${idx % 2 === 0 ? '2deg' : '-2deg'})`,
                                                }}
                                            >
                                                <span className="text-3xl font-black text-[#111111] font-display"
                                                    style={{ color: idx === 0 ? study.themeColor : '#111111' }}>
                                                    {result.value}
                                                </span>
                                                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{result.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}
