"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "motion/react";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export default function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary:
            "bg-purple-600 text-white hover:bg-purple-700 shadow-md shadow-purple-500/20",
        secondary:
            "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
        outline:
            "border border-zinc-200 bg-transparent text-zinc-900 hover:border-purple-200 hover:bg-purple-50/50",
        ghost: "bg-transparent text-zinc-600 hover:text-purple-600 hover:bg-purple-50",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg font-medium",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/20 disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
