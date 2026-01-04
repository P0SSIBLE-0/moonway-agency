import React from "react";
import { fetchBlogPost } from "@/lib/hashnode";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Facebook, Twitter, Linkedin, Share2, Calendar, Clock } from "lucide-react";
import { notFound } from "next/navigation";

const HASHNODE_HOST = process.env.NEXT_PUBLIC_HASHNODE_HOST || "engineering.hashnode.com";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = await fetchBlogPost(HASHNODE_HOST, slug);
    if (!post) {
        return {
            title: "Post Not Found - Moonway",
        };
    }
    return {
        title: `${post.title} | Moonway Blog`,
        description: post.brief,
        openGraph: {
            title: post.title,
            description: post.brief,
            type: "article",
            images: [
                {
                    url: post.coverImage?.url || "",
                    width: 1200,
                    height: 630,
                },
            ],
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await fetchBlogPost(HASHNODE_HOST, slug);

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Section with Overlay */}
            <div className="relative w-full h-[60vh] min-h-[500px]">
                {post.coverImage?.url ? (
                    <Image
                        src={post.coverImage.url}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-gray-900" />
                )}

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/30" />

                <div className="absolute inset-0 flex flex-col p-4 md:p-8">
                    <div className="max-w-4xl mx-auto w-full h-full flex flex-col">
                        {/* Top Bar: Back Link */}
                        <div className="md:pt-12 pt-16 mb-5">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors group bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
                            </Link>
                        </div>

                        {/* Bottom Content within Hero */}
                        <div className="pb-8 md:pb-12">
                            <div className="flex flex-wrap gap-2 mb-3">
                                {post.tags?.map((tag: any) => (
                                    <span key={tag.name} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                                        {tag.name}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-8 text-white tracking-tight text-shadow-sm max-w-4xl">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-6 text-white/90">
                                <div className="flex items-center gap-3">
                                    {post.author?.profilePicture && (
                                        <Image
                                            src={post.author.profilePicture}
                                            alt={post.author.name}
                                            width={44} height={44}
                                            className="rounded-full border border-white/20"
                                        />
                                    )}
                                    <div>
                                        <p className="font-bold text-base text-white">{post.author?.name}</p>
                                        <p className="text-xs text-white/60 font-medium uppercase tracking-wide">Author</p>
                                    </div>
                                </div>
                                <div className="h-8 w-px bg-white/20 hidden sm:block"></div>
                                <div className="text-sm font-medium flex flex-col sm:flex-row sm:items-center gap-4">
                                    <span className="flex items-center gap-2">
                                        <Calendar size={16} className="text-white/60" />
                                        {formattedDate}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock size={16} className="text-white/60" />
                                        {post.readTimeInMinutes} min read
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-3xl bg-pop-offwhite mx-auto px-4 py-10 md:py-24">
                <div
                    className="prose prose-base prose-gray prose-headings:font-display prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-p:leading-base prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg max-w-none first-letter:text-2xl"
                    dangerouslySetInnerHTML={{ __html: post.content.html }}
                />

                {/* Footer Share Section */}
                <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h4 className="font-medium text-gray-900">Share this article</h4>
                    <div className="flex gap-6">
                        <button className="text-gray-400 hover:text-[#1877F2] transition-colors"><Facebook size={20} /></button>
                        <button className="text-gray-400 hover:text-[#1DA1F2] transition-colors"><Twitter size={20} /></button>
                        <button className="text-gray-400 hover:text-[#0A66C2] transition-colors"><Linkedin size={20} /></button>
                        <button className="text-gray-400 hover:text-black transition-colors"><Share2 size={20} /></button>
                    </div>
                </div>
            </div>
        </article>
    );
}
