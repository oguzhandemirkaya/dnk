import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; // Footer eklendi
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const metadata: Metadata = {
  title: "DNK Machinery",
  description: "High-quality machinery solutions",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6">{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}
