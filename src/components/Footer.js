"use client";

import { useState } from "react";
import Image from "next/image"; // Import komponen Image dari Next.js


export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Tentang Kami" },
    { href: "#articles", label: "Artikel" },
    { href: "#gallery", label: "Galeri" },
    { href: "#contact", label: "Kontak" },
  ];

  const services = [
    "Konsultasi Online",
    "Program Relaksasi",
    "Monitoring Tidur",
    "Panduan Tidur Sehat",
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "ichlastribakti01@gmail.com",
      href: "mailto:ichlastribakti01@gmail.com"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Telepon",
      value: "+62-811-1807-644",
      href: "tel:+628111807644"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Alamat",
      value: "Depok, Indonesia",
      href: null
    }
  ];

  const socialLinks = [
    {
      name: "Gmail",
      href: "mailto:ichlastribakti01@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
        </svg>
      )
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/628111807644",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-sirindu-green via-sirindu-lightgreen to-sirindu-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="footerPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#footerPattern)" />
          </svg>
        </div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                {/* Logo Asli SI RINDU */}
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 overflow-hidden">
                  <Image
                    src="/images/sirindu.jpg"
                    alt="SI RINDU Logo"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">SI RINDU</h2>
                  <p className="text-sirindu-orange text-sm font-medium">Professional Sleep Solutions</p>
                </div>
              </div>

              <p className="text-white/80 text-lg mb-6 max-w-md leading-relaxed">
                Platform digital edukatif dan interaktif yang memuat pendekatan nonfarmakologis berbasis teori keperawatan dan hasil penelitian untuk mengatasi masalah tidur pada lansia .
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-white/60 text-sm font-medium">Hubungi Kami :</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/80 hover:bg-sirindu-orange hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <div className="w-1 h-6 bg-sirindu-orange rounded-full mr-3"></div>
                Menu Utama
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-white/80 hover:text-sirindu-orange transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-sirindu-orange rounded-full transition-all duration-200 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h4 className="text-white font-medium mb-3">Layanan Kami</h4>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service} className="text-white/60 text-sm flex items-center">
                      <div className="w-1 h-1 bg-sirindu-orange rounded-full mr-2 flex-shrink-0"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <div className="w-1 h-6 bg-sirindu-orange rounded-full mr-3"></div>
                Hubungi Kami
              </h3>

              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <div key={contact.label} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-sirindu-orange flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{contact.label}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-white hover:text-sirindu-orange transition-colors duration-200 font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Jam Operasional
                </h4>
                <p className="text-white/80 text-sm">Senin - Sabtu 08.00  -  17.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} SI RINDU. All rights reserved.
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <a className="text-white/60 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a className="text-white/60 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}