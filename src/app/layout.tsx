import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Loading from "./loading";
import Navigation from "@/components/home/navigation";
import MobileNavbar from "@/components/navbarComponent/NavbarForMobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mozammalhaq.com"), // Update with your actual domain
  title: {
    default: "Mozammal Haq - Full Stack Web Developer | React, Next.js & MERN Stack",
    template: "%s | Mozammal Haq - Web Developer",
  },
  description:
    "Passionate junior web developer specializing in React, Next.js, TypeScript, Node.js, Express.js, and MongoDB. Creating responsive, modern, and user-friendly websites with clean code and seamless performance. Based in Bangladesh.",
  keywords: [
    "Mozammal Haq",
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Bangladesh Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Mozammal Haq" }],
  creator: "Mozammal Haq",
  publisher: "Mozammal Haq",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mozammalhaq.com",
    siteName: "Mozammal Haq Portfolio",
    title: "Mozammal Haq - Full Stack Web Developer | React, Next.js & MERN Stack",
    description:
      "Passionate junior web developer specializing in React, Next.js, TypeScript, Node.js, Express.js, and MongoDB. Creating responsive, modern, and user-friendly websites.",
    images: [
      {
        url: "/me/yellow-hoodie.png",
        width: 1200,
        height: 630,
        alt: "Mozammal Haq - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozammal Haq - Full Stack Web Developer",
    description:
      "Passionate junior web developer specializing in React, Next.js, TypeScript, and MERN Stack. Creating responsive, modern, and user-friendly websites.",
    images: ["/me/yellow-hoodie.png"],
    creator: "@mozammalhaq", // Update with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo/logo-white.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <MobileNavbar />
        <Loading>{children}</Loading>
      </body>
    </html>
  );
}
