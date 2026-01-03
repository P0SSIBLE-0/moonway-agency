

export default function Marquee({ title = "Boost your business", bgColor = 'bg-purple-600', height = '50px', }: { title: string, bgColor?: string, height?: string }) {
    return (
        <section className={`${bgColor} ${height} overflow-hidden border-y border-purple-800`}>
            <div className="flex whitespace-nowrap animate-marquee py-3">
                {Array(20)
                    .fill(title)
                    .map((text, i) => (
                        <div key={i} className="flex items-center mx-8">
                            <span className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter">
                                {text}
                            </span>

                        </div>
                    ))}
            </div>
        </section>
    );
}
