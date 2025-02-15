import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // React’in gereksiz renderları engellemesini sağlar
  swcMinify: true, // JavaScript kodlarını küçültür ve optimize eder
  compress: true, // Tüm dosyaları sıkıştırarak sayfa yükleme hızını artırır
  images: {
    formats: ["image/avif", "image/webp"], // WebP ve AVIF formatlarını destekler (daha hızlı yüklenir)
    domains: ["yourdomain.com"], // Eğer dışardan görseller çekiyorsan, buraya domain ekle
  },
  experimental: {
    optimizeCss: true, // CSS optimizasyonlarını aktif eder
    scrollRestoration: true, // Sayfa scroll konumunu hatırlar (kullanıcı deneyimini iyileştirir)
  },
};

export default nextConfig;
