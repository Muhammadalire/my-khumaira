import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AudioPlayer } from "@/components//ui/AudioPlayer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "For My Khumaira 💕",
  description: "A love letter across the miles, written with all my heart for Khumaira",
  keywords: ["love", "romance", "Khumaira", "long distance relationship"],
  authors: [{ name: "Forever Yours" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "For My Khumaira 💕",
    description: "A beautiful love letter across the miles",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <AudioPlayer />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
