
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
export default function CTAButton() {

    return (
        <div className="relative group rounded-full p-0.5 overflow-hidden">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <Button size="md" className="relative z-10 w-full rounded-full bg-neutral-950/90 backdrop-blur-xl border border-transparent text-white hover:bg-neutral-950 px-10 h-12 md:h-14 font-bold uppercase tracking-wider cursor-pointer transition-all duration-300">
                Let's Talk
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
        </div>
    )
}