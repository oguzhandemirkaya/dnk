"use client";

import { FaIndustry, FaHardHat, FaTools, FaBuilding, FaTrain, FaCogs, FaFlask } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto text-white">
      {/* Başlık ve Açıklama */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#AB7C35]">About DNK Machinery</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          DNK Machinery, founded in 2023 and headquartered in Malatya, Turkey, specializes in casting solutions 
          for various industries. Our expertise extends across multiple sectors, ensuring high-quality solutions for 
          energy, mining, cement, construction, railways, and general machinery.
        </p>
      </div>

       {/* Sektörler ve Uzmanlık Alanları */}
       <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {[
          { title: "Energy Sector", icon: <FaIndustry size={50} className="text-[#AB7C35]" /> },
          { title: "Mining Industry", icon: <FaHardHat size={50} className="text-[#AB7C35]" /> },
          { title: "Cement Production", icon: <FaTools size={50} className="text-[#AB7C35]" /> },
          { title: "Construction", icon: <FaBuilding size={50} className="text-[#AB7C35]" /> },
          { title: "Railway Systems", icon: <FaTrain size={50} className="text-[#AB7C35]" /> },
          { title: "General Machinery", icon: <FaCogs size={50} className="text-[#AB7C35]" /> },
        ].map((sector, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg 
            transition-all transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5 blur-xl opacity-10"></div>
            {sector.icon}
            <h3 className="text-xl font-semibold mt-4 relative z-10">{sector.title}</h3>
          </div>
        ))}
      </div>
      {/* Malzeme Grupları - Daha Akıcı ve Sade */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-[#AB7C35] text-center">Material Expertise</h2>
        <p className="mt-4 text-lg text-gray-300 text-center max-w-2xl mx-auto">
          Our casting expertise covers a wide range of materials, ensuring both durability and precision in production.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            "Carbon Steels",
            "Low Alloy Steels",
            "High Alloy Steels",
            "Manganese Steels",
            "Gray Cast Iron",
            "Nodular Cast Iron",
            "White Cast Iron",
            "Ni-hard",
          ].map((material, index) => (
            <span key={index} className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-300 text-sm">
              {material}
            </span>
          ))}
        </div>
      </div>

      {/* Değerler & Misyon (Tikler Kaldırıldı, Daha Modern Hale Getirildi) */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-[#AB7C35]">Our Commitment</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            { text: "Precision & Quality Manufacturing", icon: <FaFlask size={30} className="text-[#AB7C35]" /> },
            { text: "Timely Delivery & Client Satisfaction", icon: <FaCogs size={30} className="text-[#AB7C35]" /> },
            { text: "Innovation & Cutting-edge Solutions", icon: <FaTools size={30} className="text-[#AB7C35]" /> },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
              {item.icon}
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xl italic text-[#AB7C35]">❝ S T E E L  I S  O U R  P A S S I O N ❞</p>
      </div>
    </section>
  );
};

export default AboutUs;
