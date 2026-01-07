

import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps {
    className?: string; // Container styles
    itemClassName?: string; // Styles for individual items
    items?: string[] | React.ReactNode[]; // Content items
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow" | number; // Duration in seconds or preset
    pauseOnHover?: boolean;
    // Legacy props for backward compatibility
    title?: string;
    bgColor?: string;
    height?: string; // Optional height override
    children?: React.ReactNode;
}

export default function Marquee({
    className,
    itemClassName,
    items,
    direction = "left",
    speed = "normal",
    pauseOnHover = false,
    title,
    bgColor = "bg-purple-600",
    height,
    children
}: MarqueeProps) {

    // Helper to get animation duration
    const getDuration = () => {
        if (typeof speed === "number") return `${speed}s`;
        switch (speed) {
            case "fast": return "20s";
            case "slow": return "60s";
            case "normal": default: return "40s";
        }
    };

    // Render content logic
    const renderItems = () => {
        // 1. If children are provided, use them directly
        if (children) return children;

        // 2. If items array is provided, map them
        if (items && items.length > 0) {
            return items.map((item, idx) => (
                <div key={idx} className={cn("mx-8 flex items-center shrink-0", itemClassName)}>
                    {typeof item === "string" ? (
                        <span className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter">
                            {item}
                        </span>
                    ) : (
                        item
                    )}
                </div>
            ));
        }

        // 3. Fallback for legacy 'title' prop
        const displayTitle = title || "Boost your business";
        return Array(8).fill(displayTitle).map((text, i) => ( // Repeat enough to fill typical screen before duplication
            <div key={i} className={cn("mx-8 flex items-center shrink-0", itemClassName)}>
                <span className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter">
                    {text}
                </span>
            </div>
        ));
    };

    const content = renderItems();

    return (
        <section
            className={cn(
                "overflow-hidden relative flex z-20 border-y border-purple-800",
                bgColor,
                className
            )}
            style={{ height: height }}
        >
            {/* Gradient Overlay for Fade Effect (Optional) */}
            <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-black/20 to-transparent z-10 pointer-events-none hidden md:block" />
            <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-black/20 to-transparent z-10 pointer-events-none hidden md:block" />

            {/* Inner Animating Container */}
            <div
                className={cn(
                    "flex min-w-full shrink-0 items-center py-4",
                    direction === "left" ? "animate-marquee-infinite" : "animate-marquee-infinite-reverse",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
                style={{ animationDuration: getDuration() }}
            >
                {content}
                {content}
                {content}
                {content}
            </div>
        </section>
    );
}
