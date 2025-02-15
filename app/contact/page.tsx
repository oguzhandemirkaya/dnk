"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const mailToLink = `mailto:info@dnkmachinery.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0A${formData.message}`;

  return (
    <section className="py-20 px-8 max-w-5xl mx-auto text-white">
      {/* Başlık */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#AB7C35]">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Have a question? Need assistance? Reach out to DNK Machinery for expert guidance.
        </p>
      </div>

      {/* İletişim Bilgileri */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { icon: <FaPhoneAlt size={30} />, text: "+90 541 721 41 65", href: "tel:+905417214165" },
          { icon: <FaEnvelope size={30} />, text: "info@dnkmachinery.com", href: "mailto:info@dnkmachinery.com" },
          { icon: <FaMapMarkerAlt size={30} />, text: "Malatya, Turkey", href: "#" },
        ].map((info, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg">
            <div className="text-[#AB7C35]">{info.icon}</div>
            <a href={info.href} className="mt-2 text-lg text-gray-300 hover:text-[#AB7C35] transition">
              {info.text}
            </a>
          </div>
        ))}
      </div>

      {/* İletişim Formu */}
      <div className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-[#AB7C35] text-center">Send Us a Message</h2>
        <form className="mt-6 flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 bg-transparent border border-white/30 rounded-md text-white placeholder-gray-400 focus:border-[#AB7C35] focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 bg-transparent border border-white/30 rounded-md text-white placeholder-gray-400 focus:border-[#AB7C35] focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="p-3 bg-transparent border border-white/30 rounded-md text-white placeholder-gray-400 focus:border-[#AB7C35] focus:outline-none"
            required
          ></textarea>
          <a
            href={mailToLink}
            className="mt-4 p-3 text-center bg-[#AB7C35] text-white rounded-md hover:bg-[#925e29] transition"
          >
            Send Message
          </a>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
