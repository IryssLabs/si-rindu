import Script from "next/script";
import LayoutClient from "./LayoutClient";



export default function CognitiveTestLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gradient-to-br from-blue-50 to-purple-50">
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-M999G0W42S" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M999G0W42S');
          `}
        </Script>

        {/* 🔹 Layout client untuk animasi */}
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
