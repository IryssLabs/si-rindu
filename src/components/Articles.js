"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Import gambar local


const articles = [
  {
    title: "Tips Relaksasi untuk Tidur Nyenyak",
    excerpt: "Kualitas tidur ...",
    link: "https://hellosehat.com/pola-tidur/tips-tidur/",
    image: "/images/tips-tidur.webp",
  },
  {
    title: "5 Cara Tidur Nyenyak yang Patut Dicoba",
    excerpt: "Tidur yang tidak nyenyak ...",
    link: "https://www.alodokter.com/cara-tidur-nyenyak-ternyata-tidak-sulit",
    image: "/images/cara-tidur-nyenyak-ternyata-tidak-sulit-0-alodokter.jpg",
  },
  {
    title: "Tips Tidur Berkualitas ...",
    excerpt: "Tidur yang cukup saja ...",
    link: "https://www.biofarma.co.id/id/announcement/detail/tips-tidur-berkualitas-bangun-dengan-segar-lewat-pola-tidur-yang-baik",
    image: "/images/tidur-baik.jpg",
  },
];


export default function Articles() {
  const [isVisible, setIsVisible] = useState(false);

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="articles"
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-sirindu-green/5 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full bg-sirindu-green/10 text-sirindu-green text-sm font-medium mb-6 border border-sirindu-green/20 transform transition-all duration-1000 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
              }`}
          >
            <div className="w-2 h-2 bg-sirindu-orange rounded-full mr-2 animate-pulse"></div>
            Artikel Terpercaya untuk Kesehatan Tidur
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold text-sirindu-green mb-4 transform transition-all duration-1000 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            Artikel dan Tips Tidur
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transform transition-all duration-1000 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
              }`}
            style={{ transitionDelay: "400ms" }}
          >
            Temukan wawasan dan solusi praktis untuk meningkatkan kualitas tidur
            lansia melalui artikel berbasis penelitian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg border border-sirindu-green/20 p-6 text-left transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 100 + 600}ms` }}
            >
              <div className="w-full h-40 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-sirindu-orange mb-3">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {article.excerpt}
              </p>
              <a
                href={article.link}
                className="group inline-flex items-center text-sirindu-green font-medium hover:text-sirindu-orange transition-colors duration-200"
              >
                Baca Selengkapnya
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
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
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}