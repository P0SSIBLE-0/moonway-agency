"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactFormProps {
    className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const [focusedField, setFocusedField] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        const formData = new FormData(e.currentTarget);
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY || "YOUR_KEY_HERE");

        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Smooth delay
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setMessage("Message sent! We'll be in touch soon.");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
                setMessage(result.message || "Something went wrong.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Connection failed. Please try again.");
        }
    }

    const inputClasses = "w-full px-5 py-2 rounded bg-zinc-900 border border-zinc-800 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-500/10 outline-none transition-all duration-300 font-medium text-slate-100 placeholder:text-neutral-400 group-hover:border-slate-300 focus:bg-zinc-800";
    const labelClasses = "text-xs font-semibold text-neutral-500 uppercase tracking-wider ml-1 mb-2 block group-focus-within:text-purple-600 transition-colors";

    const renderStatusContent = (status: string) => {
        switch (status) {
            case "idle":
                return (
                    <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                    >
                        Send Message <Send size={20} className="" />
                    </motion.span>
                );
            case "sending":
                return (
                    <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                    >
                        <Loader2 size={20} className="animate-spin opacity-90" /> Sending...
                    </motion.span>
                );
            case "success":
                return (
                    <motion.span
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2"
                    >
                        <CheckCircle2 size={22} className="stroke-[3px]" /> Message Sent
                    </motion.span>
                );
            case "error":
                return (
                    <motion.span
                        key="error"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2"
                    >
                        <AlertCircle size={22} /> Failed. Try Again.
                    </motion.span>
                );
        }
    };

    return (
        <div className={`rounded-lg px-4 py-10 md:p-12 shadow-2xl shadow-purple-900/5 border border-zinc-800 relative overflow-hidden bg-pop-black ${className}`}>
            <div className="relative z-10">
                <div className="mb-10">
                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight font-display">Let's talk business.</h3>
                    <p className="text-neutral-500 text-sm">Fill out the form and we'll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1 group">
                            <label htmlFor="name" className={labelClasses}>Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className={inputClasses}
                                placeholder="John Doe"
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                        <div className="space-y-1 group">
                            <label htmlFor="email" className={labelClasses}>Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className={inputClasses}
                                placeholder="john@example.com"
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                    </div>

                    <div className="space-y-1 group">
                        <label htmlFor="subject" className={labelClasses}>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            required
                            className={inputClasses}
                            placeholder="Project Proposal"
                            onFocus={() => setFocusedField("subject")}
                            onBlur={() => setFocusedField(null)}
                        />
                    </div>

                    <div className="space-y-1 group">
                        <label htmlFor="message" className={labelClasses}>Message</label>
                        <textarea
                            name="message"
                            required
                            rows={4}
                            className={`${inputClasses} resize-none min-h-[120px]`}
                            placeholder="Tell us about your project goals..."
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={status === "sending" || status === "success"}
                            className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-base relative overflow-hidden shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0
                                ${status === "success"
                                    ? "bg-emerald-500 text-white"
                                    : status === "error"
                                        ? "bg-red-500 text-white"
                                        : "bg-linear-to-r from-indigo-800 to-purple-700 bg-size-[200%_auto] hover:bg-right text-white"
                                }
                                disabled:opacity-90 disabled:cursor-not-allowed
                            `}
                        >
                            <AnimatePresence mode="wait">
                                {renderStatusContent(status)}
                            </AnimatePresence>
                        </button>

                        {message && status === "error" && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="text-center text-sm font-medium mt-4 text-red-500 bg-red-50 py-2 rounded-lg border border-red-200"
                            >
                                {message}
                            </motion.p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
