import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "SI RINDU – Solusi Tidur Lansia & Kesehatan Tidur Berkualitas",
  description:
    "SI RINDU adalah platform digital yang membantu lansia mengatasi insomnia melalui pendekatan medis, teknologi modern, dan program relaksasi terpersonalisasi.",
  keywords:
    "SI RINDU, insomnia lansia, relaksasi tidur, program tidur nyenyak, kesehatan tidur, solusi tidur berkualitas, platform digital kesehatan",
  authors: [{ name: "Tim SI RINDU", url: "https://sirindu.com" }],
  robots: "index, follow",
  metadataBase: new URL("https://sirindu.com"),
  alternates: {
    canonical: "https://sirindu.com",
  },

  openGraph: {
    title: "SI RINDU – Solusi Kesehatan Tidur untuk Lansia",
    description: "Platform digital edukatif dan interaktif yang memuat pendekatan nonfarmakologis berbasis teori keperawatan dan hasil penelitian untuk mengatasi masalah tidur pada lansia",
    url: "https://sirindu.com",
    siteName: "SI RINDU",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "https://sirindu.com/sirindu.jpg",
        width: 1200,
        height: 630,
        alt: "SI RINDU – Solusi Tidur Lansia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SI RINDU – Solusi Tidur Lansia dan Relaksasi Sehat",
    description:
      "Temukan cara mengatasi insomnia lansia dengan program relaksasi modern berbasis teknologi bersama SI RINDU.",
    images: ["https://sirindu.com/sirindu.jpg"],
    creator: "@sirindu_official",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="relative">
        {/* 🟢 Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M999G0W42S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M999G0W42S', { send_page_view: true });
          `}
        </Script>

        {/* 🧭 Navigasi */}
        <Navbar />

        {/* Main Content dengan padding yang tepat */}
        <main className="min-h-screen pt-16"> {/* pt-16 untuk memberi ruang navbar */}
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}