// components/Hero.js
"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const BG = "/images/sirindu-bg.jpg"; // path ke /public/images

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    "Konsultasi dengan Ahli Tidur",
    "Program Relaksasi Terpersonalisasi",
    "Monitoring Kualitas Tidur",
    "Komunitas Support Group",
  ];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay untuk kontras teks */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sirindu-green rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-sirindu-orange rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-sirindu-lightgreen rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Konten */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="flex flex-col items-center text-center">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sirindu-green/20 text-sirindu-green text-sm font-medium mb-6 border border-sirindu-green/30 shadow-lg">
              <div className="w-2 h-2 bg-sirindu-orange rounded-full mr-2 animate-pulse"></div>
              Solusi Terpercaya untuk Kesehatan Tidur Lansia
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Sistem Informasi
              <br />
              <span className="bg-gradient-to-r from-sirindu-green to-sirindu-lightgreen bg-clip-text text-transparent drop-shadow-md">
                SI RINDU
              </span>
            </h1>

            {/* Subtitle */}
            <div className="text-lg lg:text-xl text-gray-100 mb-4 font-medium drop-shadow">
              Relaksasi, Istirahat, Nyenyak Tidur
            </div>

            {/* Deskripsi */}
            <p className="text-lg text-gray-100 mb-8 leading-relaxed max-w-2xl drop-shadow">
              Platform digital edukatif dan interaktif yang memuat pendekatan nonfarmakologis berbasis teori keperawatan dan hasil penelitian untuk mengatasi masalah tidur pada lansia
              .
            </p>

            {/* Fitur */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-2xl">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center text-gray-100 transform transition-all duration-500 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="w-2 h-2 bg-sirindu-orange rounded-full mr-3 flex-shrink-0 drop-shadow"></div>
                  <span className="text-sm font-medium drop-shadow">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              style={{ transitionDelay: "600ms" }}
            >
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "#about")}
                className="group inline-flex items-center justify-center px-8 py-4 bg-sirindu-green text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-sirindu-lightgreen transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Pelajari Lebih Lanjut</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sirindu-green font-semibold rounded-xl shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
