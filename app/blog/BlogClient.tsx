"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";
import { motion } from "motion/react";
import { HashnodePost } from "@/lib/hashnode";

interface BlogPost extends HashnodePost {
    formattedDate: string;
}

interface BlogClientProps {
    initialPosts: BlogPost[];
}

export default function BlogClient({ initialPosts }: BlogClientProps) {
    const featuredPost = initialPosts[0];
    const regularPosts = initialPosts.slice(1);

    if (!featuredPost) {
        return (
            <main className="min-h-screen pt-40 pb-20 text-center bg-pop-offwhite">
                <h2 className="text-4xl font-display font-bold mb-4">No posts found.</h2>
                <p className="text-xl text-gray-500">Check your Hashnode host configuration.</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-24 pb-20 bg-pop-offwhite overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative px-4 mb-20">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6 px-6 py-2 border-2 border-black bg-pop-purple shadow-hard-sm font-bold text-sm md:text-base uppercase tracking-wider transform -rotate-1 hover:rotate-0 transition-transform cursor-default"
                    >
                        Our Thoughts & Ideas
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-6xl md:text-9xl font-display font-bold mb-8 leading-[0.85] tracking-tight"
                    >
                        The Moonway <br />
                        <span className="text-transparent text-stroke-2 hover:text-black transition-colors duration-500">
                            Chronicles
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-3xl text-gray-800 max-w-3xl mx-auto font-medium leading-tight"
                    >
                        Insights, strategies, and stories for the digital frontier.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Featured Post */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse border border-black"></div>
                        <p className="font-bold text-sm uppercase tracking-widest border-b-2 border-black inline-block">Featured Story</p>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`} className="group block relative">
                        <div className="bg-white border-2 border-black rounded-lg p-4 md:p-10 shadow-hard group-hover:shadow-hard-reverse transition-all duration-300">
                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                {/* Image Container */}
                                <div className="w-full lg:w-1/2 aspect-video relative rounded-lg overflow-hidden border-2 border-black">
                                    {featuredPost.coverImage?.url ? (
                                        <Image
                                            src={featuredPost.coverImage.url}
                                            alt={featuredPost.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-100 flex items-center justify-center font-display font-bold text-gray-300 text-3xl">MOONWAY</div>
                                    )}
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                        {featuredPost.tags?.slice(0, 2).map((tag) => (
                                            <span key={tag.name} className="px-3 py-1 bg-white border border-black rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                                    <h2 className="text-3xl md:text-5xl font-display font-bold leading-[0.95] group-hover:text-pop-purple transition-colors">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed line-clamp-3">
                                        {featuredPost.brief}
                                    </p>

                                    <div className="flex items-center gap-4 mt-2">
                                        {featuredPost.author?.profilePicture && (
                                            <Image
                                                src={featuredPost.author.profilePicture}
                                                alt={featuredPost.author.name}
                                                width={48} height={48}
                                                className="rounded-full border-2 border-black"
                                            />
                                        )}
                                        <div>
                                            <p className="font-bold text-sm uppercase">{featuredPost.author?.name}</p>
                                            <p className="text-xs text-gray-500 font-medium flex items-center gap-2">
                                                <span>{featuredPost.formattedDate}</span> • <span>{featuredPost.readTimeInMinutes} min read</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center gap-2 font-bold uppercase tracking-wide text-sm group-hover:gap-4 transition-all">
                                        Read Article <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* Regular Posts Grid */}
                {regularPosts.length > 0 && (
                    <div className="mb-20">
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-3xl font-display font-bold">Latest Articles</h3>
                            <div className="hidden md:block h-1 grow bg-black mx-8 relative top-1"></div>
                            <span className="font-bold text-lg">{regularPosts.length} Stories</span>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularPosts.map((post, idx) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                                        <article className="h-full bg-white border-2 border-black rounded-lg p-4 shadow-hard hover:shadow-hard-reverse transition-all duration-300 flex flex-col hover:-translate-y-1">
                                            <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-black mb-5 bg-gray-100">
                                                {post.coverImage?.url ? (
                                                    <Image
                                                        src={post.coverImage.url}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold">IMAGE</div>
                                                )}
                                                <div className="absolute top-3 left-3">
                                                    {post.tags?.[0] && (
                                                        <span className="px-3 py-1 bg-pop-green border border-black rounded-full text-[10px] font-bold uppercase tracking-wide text-black shadow-sm">
                                                            {post.tags[0].name}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex flex-col grow px-2 pb-2">
                                                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">
                                                    <Calendar size={12} strokeWidth={3} />
                                                    {post.formattedDate}
                                                </div>
                                                <h3 className="text-2xl font-display font-bold leading-none mb-3 group-hover:underline decoration-2 decoration-black underline-offset-4">
                                                    {post.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm font-medium line-clamp-2 leading-relaxed mb-6 grow">
                                                    {post.brief}
                                                </p>

                                                <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100 mt-auto">
                                                    <div className="flex items-center gap-2">
                                                        {post.author?.profilePicture ? (
                                                            <Image src={post.author.profilePicture} alt="Author" width={24} height={24} className="rounded-full border border-black" />
                                                        ) : (
                                                            <div className="w-6 h-6 rounded-full border border-black bg-gray-200 flex items-center justify-center"><User size={12} /></div>
                                                        )}
                                                        <span className="text-xs font-bold text-black truncate max-w-[100px]">{post.author?.name}</span>
                                                    </div>
                                                    <span className="text-xs font-bold bg-black text-white px-2 py-0.5 rounded-md">
                                                        {post.readTimeInMinutes} min
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Newsletter Box */}
                <section className="relative rounded-[3rem] bg-pop-yellow border-2 border-black p-8 md:p-20 text-center shadow-hard overflow-hidden mb-20">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Stay in the Loop</h2>
                        <p className="text-lg md:text-xl font-medium mb-8">Join our newsletter for the latest insights, trends, and strategies delivered straight to your inbox.</p>

                        <form className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="moonwalker@example.com"
                                className="flex-1 px-6 py-4 rounded-full border-2 border-black bg-white focus:outline-none focus:ring-4 focus:ring-black/20 font-medium placeholder:text-gray-400 text-lg"
                            />
                            <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg border-2 border-black hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_white]">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-pop-red rounded-full border-2 border-black hidden md:block"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pop-purple rounded-full border-2 border-black hidden md:block"></div>
                </section>

            </div>
        </main>
    );
}
