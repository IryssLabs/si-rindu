"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  // 🔹 Efek saat scroll (ubah background)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔹 Deteksi section aktif saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isAutoScrolling) return;

      const sections = [
        "home",
        "about",
        "articles",
        "gallery",
        "contact",
        "cognitive-therapy",
      ];
      const scrollPosition = window.scrollY + 150; // offset disesuaikan

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // sinkron awal
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAutoScrolling]);

  // 🔹 Navigasi klik menu
  const handleMenuClick = (href) => {
    setIsOpen(false);
    setIsAutoScrolling(true);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => setIsAutoScrolling(false), 700);
  };

  const handleGetStarted = () => handleMenuClick("#cognitive-therapy");

  const menuItems = [
    { href: "#home", label: "Beranda" },
    { href: "#about", label: "Tentang" },
    { href: "#articles", label: "Artikel" },
    { href: "#gallery", label: "Galeri" },
    { href: "#cognitive-therapy", label: "Terapi Kognitif" },
    { href: "#contact", label: "Kontak" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "bg-[#F8F7E3]/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "bg-[#F8F7E3]"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* 🟢 Logo */}
            <div className="flex items-center">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick("#home");
                }}
                className="group flex items-center space-x-3"
              >
                <div className="w-14 h-14 flex items-center justify-center overflow-hidden bg-sirindu-green rounded-lg">
                  <Image
                    src="/images/sirindu.jpg"
                    alt="SI RINDU Logo"
                    width={56}
                    height={56}
                    className="object-contain scale-110 sm:scale-125"
                    priority
                  />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-sirindu-green group-hover:text-sirindu-lightgreen transition-colors duration-300">
                    SI RINDU
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 -mt-1 hidden sm:block">
                    Professional Services
                  </div>
                </div>
              </a>
            </div>

            {/* 🖥️ Menu Desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.href);
                  }}
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${activeSection === item.href.substring(1)
                      ? "text-sirindu-green bg-sirindu-green/10"
                      : "text-gray-700 hover:text-sirindu-green hover:bg-gray-100"
                    }`}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-sirindu-orange rounded-full"></span>
                  )}
                </a>
              ))}

              <button
                onClick={handleGetStarted}
                className="ml-6 bg-sirindu-green text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-sirindu-lightgreen transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Mulai Sekarang
              </button>
            </div>

            {/* 📱 Tombol Hamburger */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 flex items-center justify-center text-gray-600 hover:text-sirindu-green transition-colors"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`block h-0.5 w-6 bg-current rounded-sm transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                      }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-current rounded-sm transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                      }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-current rounded-sm transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 📱 Menu Mobile */}
        <div
          className={`lg:hidden overflow-hidden bg-[#F8F7E3] border-t border-gray-100 shadow-md transform transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-6 py-5 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href);
                }}
                className={`block px-4 py-2 rounded-md text-base font-medium ${activeSection === item.href.substring(1)
                    ? "text-sirindu-green bg-sirindu-green/10 border-l-4 border-sirindu-orange"
                    : "text-gray-700 hover:text-sirindu-green hover:bg-gray-50"
                  }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleGetStarted}
              className="w-full bg-sirindu-green text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-sirindu-lightgreen transition-colors"
            >
              Mulai Sekarang
            </button>
          </div>
        </div>
      </nav>

      {/* 🔹 Backdrop Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
