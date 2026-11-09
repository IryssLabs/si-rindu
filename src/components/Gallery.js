"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Data gallery: pakai path string ke /public/images (tanpa import file)
const galleryItems = [
  { id: 1, title: "Aktivitas Sehat", image: "/images/sirindu-bg.jpg" },
  { id: 2, title: "Aktivitas Sehat", image: "/images/assets_lapangan2.jpg" },
  { id: 3, title: "Aktivitas Sehat", image: "/images/assets_lapangan3.jpg" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  }, []);

  const navigateImage = useCallback(
    (direction) => {
      let newIndex = currentIndex;
      if (direction === "next") {
        newIndex = (currentIndex + 1) % galleryItems.length;
      } else if (direction === "prev") {
        newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      }
      setSelectedImage(galleryItems[newIndex]);
      setCurrentIndex(newIndex);
    },
    [currentIndex]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, navigateImage, closeLightbox]);

  return (
    <section id="gallery" className="py-20 bg-sirindu-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sirindu-green mb-12">
          Gallery
        </h2>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-md border border-sirindu-green/20 hover:shadow-lg transition cursor-pointer"
              onClick={() => openLightbox(item, index)}
              style={{
                animation: "fadeInUp 0.6s ease forwards",
                opacity: 0,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl font-bold z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
          >
            &times;
          </button>
          <div className="max-w-4xl w-full relative">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1000}
              height={700}
              className="w-full h-auto rounded-lg shadow-lg"
              unoptimized
            />
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => navigateImage("prev")}
                className="px-6 py-3 bg-sirindu-green text-white rounded-lg hover:bg-sirindu-orange transition"
              >
                Prev
              </button>
              <p className="text-white font-medium text-center">
                {selectedImage.title}
              </p>
              <button
                onClick={() => navigateImage("next")}
                className="px-6 py-3 bg-sirindu-green text-white rounded-lg hover:bg-sirindu-orange transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animasi */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
