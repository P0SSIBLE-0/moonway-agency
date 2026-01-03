import type { Metadata } from "next";
import { Inter, Space_Grotesk, Permanent_Marker, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Moonway - SEM & Paid Ads Agency | Marketing Agency",
  description: "Moonway helps brands grow with SEM, paid ads, modern websites, e-commerce solutions, and high-impact digital marketing strategies.",
  keywords: ["Moonway", "Content On Demand", "Digital Experiences", "marketing", "SEO", "Content Marketing", "Content Strategy", "googel ads", "facebook ads"],
  authors: [{ name: "Moonway" }],
  publisher: "Moonway",
  openGraph: {
    title: "Moonway - SEM & Paid Ads Agency | Marketing Agency",
    description: "Moonway helps brands grow with SEM, paid ads, modern websites, e-commerce solutions, and high-impact digital marketing strategies.",
    type: "website",
    locale: "en",
    siteName: "Moonway",
    url: "https://moonway-agency.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonway | Content On Demand",
      },
    ],
  },
  twitter: {
    title: "Moonway - SEM & Paid Ads Agency | Marketing Agency",
    description: "Moonway helps brands grow with SEM, paid ads, modern websites, e-commerce solutions, and high-impact digital marketing strategies.",
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${permanentMarker.variable} ${playfair.variable} antialiased font-sans bg-zinc-900 text-white selection:bg-purple-100 selection:text-purple-900`}
      >
        {children}
      </body>
    </html>
  );
}
