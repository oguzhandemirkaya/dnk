"use client";

import { FaDraftingCompass, FaCogs, FaTools, FaClipboardCheck, FaSearch, FaCube } from "react-icons/fa";

const AreaOfExpertise = () => {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto text-white relative">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#AB7C35]">Our Expertise</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          DNK Machinery specializes in precision engineering, cutting-edge manufacturing, and advanced material 
          processing to deliver world-class industrial solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
        {[ 
          { title: "Design & Engineering", icon: <FaDraftingCompass size={40} />, description: "Innovative design solutions and precise engineering processes for optimal results." },
          { title: "Advanced Manufacturing", icon: <FaCogs size={40} />, description: "State-of-the-art production techniques with cutting-edge machinery." },
          { title: "Material Selection", icon: <FaCube size={40} />, description: "Expertise in selecting the best materials for durability and efficiency." },
          { title: "Casting & Fabrication", icon: <FaTools size={40} />, description: "High-quality casting and fabrication processes for complex components." },
          { title: "Quality Control & Testing", icon: <FaClipboardCheck size={40} />, description: "Comprehensive inspection and testing to meet global industry standards." },
          { title: "R&D & Process Optimization", icon: <FaSearch size={40} />, description: "Continuous research and development for efficiency and innovation." },
        ].map((expertise, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-md p-8 flex flex-col items-center text-center transition-transform hover:scale-105">
            <div className="w-16 h-16 flex items-center justify-center bg-[#AB7C35] text-black rounded-full shadow-lg mb-4">
              {expertise.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#AB7C35]">{expertise.title}</h3>
            <p className="mt-2 text-gray-300">{expertise.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-[#AB7C35]">Why Choose DNK Machinery?</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We combine innovation, precision, and efficiency to deliver top-tier industrial-grade manufacturing 
          solutions that ensure reliability, quality, and long-term performance.
        </p>
      </div>
    </section>
  );
};

export default AreaOfExpertise;
