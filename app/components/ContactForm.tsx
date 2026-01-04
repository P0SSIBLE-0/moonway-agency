"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
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
            await new Promise(resolve => setTimeout(resolve, 1000)); // Fake nice delay for UX
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setMessage("Message sent! We'll be in touch.");
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

    const inputClasses = "w-full px-5 py-3 rounded-lg bg-gray-50 border-2 border-transparent focus:bg-white focus:border-indigo-500 outline-none transition-all duration-300 font-medium placeholder:text-gray-400 text-gray-900";
    const labelClasses = "text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 mb-2 block";

    return (
        <div className={`bg-pop-offwhite rounded-lg p-5 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden ${className}`}>
            {/* Status Indicator Line */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r transition-all duration-700 ${status === 'idle' ? 'from-indigo-500 to-purple-500' :
                status === 'sending' ? 'from-indigo-400 via-purple-400 to-indigo-400 animate-pulse' :
                    status === 'success' ? 'from-green-500 to-emerald-500' :
                        'from-red-500 to-rose-500'
                }`} />

            <div className="relative z-10">
                <div className="my-10">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Let's talk business.</h3>
                    <p className="text-gray-500">Fill out the form and I'll get back to you within 24 hours.</p>
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
                        <div className="space-y-1">
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

                    <div className="space-y-1">
                        <label htmlFor="message" className={labelClasses}>Message</label>
                        <textarea
                            name="message"
                            required
                            rows={4}
                            className={`${inputClasses} resize-none`}
                            placeholder="Tell me about your project goals..."
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={status === "sending" || status === "success"}
                            className={`w-full py-3 font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg relative overflow-hidden shadow-lg hover:shadow-xl
                                ${status === "success"
                                    ? "bg-green-500 text-white"
                                    : status === "error"
                                        ? "bg-red-500 text-white"
                                        : "bg-gray-900 text-white hover:bg-black hover:scale-[1.01]"
                                }
                                disabled:opacity-90 disabled:cursor-not-allowed
                            `}
                        >
                            <AnimatePresence mode="wait">
                                {status === "idle" && (
                                    <motion.span
                                        key="idle"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2"
                                    >
                                        Send Message <ArrowRight size={20} className="opacity-70" />
                                    </motion.span>
                                )}
                                {status === "sending" && (
                                    <motion.span
                                        key="sending"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Loader2 size={20} className="animate-spin opacity-70" /> Sending...
                                    </motion.span>
                                )}
                                {status === "success" && (
                                    <motion.span
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex items-center gap-2"
                                    >
                                        <CheckCircle2 size={22} /> Sent Successfully
                                    </motion.span>
                                )}
                                {status === "error" && (
                                    <motion.span
                                        key="error"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex items-center gap-2"
                                    >
                                        <AlertCircle size={22} /> Failed. Try Again.
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>

                        {message && status === "error" && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="text-center text-sm font-medium mt-4 text-red-500 bg-red-50 py-2 rounded-lg"
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
