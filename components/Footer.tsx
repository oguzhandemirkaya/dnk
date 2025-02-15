"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400"></div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Sol - Logo ve Açıklama */}
        <div>
          <Image src="/assets/logo/logo.png" alt="DNK Logo" width={150} height={50} />
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            DNK Machinery Industry Trade Limited Company, founded in 2023, provides casting solutions 
            to industries like <span className="text-[#AB7C35] font-semibold">energy, mining, cement, construction, railways, and general machinery.</span>
            The company serves renowned consumers worldwide, aiming to strengthen its market position.
          </p>
        </div>

        {/* Orta - Navigasyon */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-[#AB7C35]">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {["About Us", "Area of Expertise", "Our Service", "Materials", "Sectors"].map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-[#AB7C35] transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sağ - İletişim ve Misyon */}
        <div>
          <h3 className="text-lg font-semibold text-[#AB7C35]">Contact Us</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#AB7C35]" />
              <span>+90 541 721 41 65</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#AB7C35]" />
              <span>info@dnkmachinery.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#AB7C35]" />
              <span>Malatya, Turkey</span>
            </li>
          </ul>
          <p className="mt-6 italic text-gray-400 text-sm">
            ❝ <span className="text-[#AB7C35] font-semibold">STEEL IS OUR PASSION</span> ❞
          </p>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 DNK Machinery. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
