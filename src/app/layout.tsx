import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sabeh Shaikh | Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Sabeh Shaikh — Full Stack Developer and AI Enthusiast based in Karachi. Building fast, responsive, and intelligent web experiences with Next.js, FastAPI, and modern AI tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}