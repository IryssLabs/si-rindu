// components/WhatsAppBubble.js
"use client";

import { useCallback, useEffect, useId, useMemo, useState } from "react";

const defaultPhoneNumber = "628111807644"; // Ganti dengan nomor WhatsApp yang diinginkan
const defaultMessage = "Halo, saya ingin konsultasi tentang masalah tidur";

export default function WhatsAppBubble({
  phoneNumber = defaultPhoneNumber,
  message = defaultMessage,
  chatLabel = "Chat via WhatsApp",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const popupId = useId();

  const whatsappUrl = useMemo(() => {
    const sanitizedPhoneNumber = phoneNumber.replace(/\D+/g, "");
    if (!sanitizedPhoneNumber) {
      return null;
    }
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${sanitizedPhoneNumber}?text=${encodedMessage}`;
  }, [phoneNumber, message]);

  const handleWhatsAppClick = useCallback(() => {
    if (!whatsappUrl) {
      return;
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  }, [whatsappUrl]);

  const toggleChat = useCallback(() => {
    setIsOpen((previous) => !previous);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Options */}
        {isOpen && (
          <div
            id={popupId}
            role="dialog"
            aria-modal="true"
            className="absolute bottom-16 right-0 mb-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 animate-fade-in"
          >
            <div className="text-center mb-3">
              <h3 className="font-semibold text-sirindu-green text-sm">
                Butuh Bantuan?
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Konsultasi gratis dengan ahli tidur kami
              </p>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppClick}
              disabled={!whatsappUrl}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold text-sm hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center mb-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.495 3.09" />
              </svg>
              {chatLabel}
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="w-full text-gray-600 py-2 px-4 rounded-xl font-medium text-sm hover:bg-gray-100 transition-all duration-200"
            >
              Tutup
            </button>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          type="button"
          onClick={toggleChat}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-controls={popupId}
          aria-label="Buka chat WhatsApp"
          className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-bounce hover:animate-none"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.495 3.09" />
          </svg>

          {/* Notification Dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
        </button>
      </div>

      {/* Overlay ketika chat open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-40"
          onClick={handleClose}
          role="presentation"
        ></div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}