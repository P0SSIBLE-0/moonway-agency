import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("mx-auto w-full max-w-[1280px] px-5 md:px-8", className)}>
            {children}
        </div>
    );
}
