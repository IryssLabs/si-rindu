"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function About() {
  const [activeTab, setActiveTab] = useState("hipnosis");
  const [isVisible, setIsVisible] = useState(false);
  const [openSections, setOpenSections] = useState({
    pengertian: false,
    fakta: false,
    tataCara: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Convert Google Drive link to embed format
  const convertGoogleDriveLink = (url) => {
    const match = url.match(/\/d\/([^\/]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  // Komponen Video dengan Custom Thumbnail
  const VideoWithCustomThumbnail = () => {
    const [showVideo, setShowVideo] = useState(false);
    const videoUrl = convertGoogleDriveLink("https://drive.google.com/file/d/1J-lygNQ0kd5e3lKRmcqNBcRwJIU8SkkY/view?usp=sharing");

    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-3 h-8 bg-gradient-to-b from-sirindu-orange to-orange-500 rounded-full mr-4"></div>
            <h4 className="text-xl font-bold text-gray-900">Video Panduan Hipnosis 5 Jari</h4>
          </div>

          {!showVideo ? (
            // Custom Thumbnail
            <div
              className="relative bg-gradient-to-br from-sirindu-green to-sirindu-lightgreen rounded-lg overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setShowVideo(true)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Thumbnail Content */}
              <div className="relative p-8 lg:p-12 text-center text-white">
                {/* Play Button */}
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <svg className="w-8 h-8 text-sirindu-green ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Panduan Lengkap<br />Hipnosis 5 Jari 
                </h3>

                {/* Description */}
                <p className="text-white/90 text-lg mb-4 max-w-md mx-auto">
                  Teknik sederhana untuk tidur nyenyak alami tanpa obat
                </p>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                    <span className="text-sm">⏱️ 7 Menit</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                    <span className="text-sm">🎧 Audio Terapi</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                    <span className="text-sm">📱 Bisa Diulang</span>
                  </div>
                </div>

                {/* CTA Text */}
                <div className="mt-6">
                  <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                    Klik untuk menonton panduan lengkap
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            // Video Player
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={videoUrl}
                  title="Panduan Lengkap Hipnosis 5 Jari"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          <p className="text-gray-600 mt-4 text-center text-lg">
            Tonton video panduan lengkap untuk mempelajari teknik Hipnosis 5 Jari step-by-step
          </p>
        </div>
      </div>
    );
  };

  // Komponen khusus untuk Video Senam Fisik Lansia
  const VideoSenamWithThumbnail = () => {
    const [showVideo, setShowVideo] = useState(false);
    const videoUrl = convertGoogleDriveLink(
      "https://drive.google.com/file/d/1oI3xLAl1Twjd8NxkCCjdY-PXXGAb-XZP/view?usp=sharing"
    );

    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-3 h-8 bg-gradient-to-b from-sirindu-green to-sirindu-lightgreen rounded-full mr-4"></div>
            <h4 className="text-xl font-bold text-gray-900">
              Panduan Peregangan untuk Lansia
            </h4>
          </div>

          {!showVideo ? (
            // Thumbnail khusus senam
            <div
              className="relative bg-gradient-to-br from-sirindu-green to-sirindu-lightgreen rounded-lg overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setShowVideo(true)}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Thumbnail konten */}
              <div className="relative p-8 lg:p-12 text-center text-white">
                {/* Play Button */}
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <svg
                      className="w-8 h-8 text-sirindu-green ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Judul */}
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Panduan Peregangan untuk Lansia
                </h3>

                {/* Deskripsi */}
                <p className="text-white/90 text-lg mb-4 max-w-md mx-auto">
                  Gerakan lembut untuk menjaga kesehatan tubuh dan meningkatkan kualitas tidur.
                </p>

                {/* Fitur */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                    <span className="text-sm">🕒 Durasi 10 Menit</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                    <span className="text-sm">🏠 Bisa di Rumah</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                    <span className="text-sm">👴 Aman untuk Lansia</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                    Klik untuk menonton video senam
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Gambar thumbnail */}
              <Image
                src="/images/thumbnail-senam.jpg"
                alt="Thumbnail Senam Fisik Lansia"
                fill
                className="object-cover opacity-30"
                priority
                unoptimized={false}
              />
            </div>
          ) : (
            // Video Player
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={videoUrl}
                  title="Panduan Peregangan untuk Lansia"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          <p className="text-gray-600 mt-4 text-center text-lg">
            Tonton dan ikuti gerakan senam untuk menjaga tubuh tetap bugar dan tidur lebih nyenyak.
          </p>
        </div>
      </div>
    );
  };


  const tabContent = {
    hipnosis: {
      title: "Hipnosis 5 Jari",
      content: (
        <div className="space-y-6">
          {/* Video Section dengan Custom Thumbnail */}
          <VideoWithCustomThumbnail />

          {/* Section 1: Pengertian */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleSection('pengertian')}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center">
                <div className="w-3 h-8 bg-gradient-to-b from-sirindu-green to-sirindu-lightgreen rounded-full mr-4"></div>
                <h4 className="text-xl font-bold text-gray-900">Apa Itu Hipnosis 5 Jari?</h4>
              </div>
              <svg
                className={`w-6 h-6 text-sirindu-green transition-transform duration-200 ${openSections.pengertian ? 'rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSections.pengertian && (
              <div className="px-6 pb-6 animate-fade-in">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Hipnosis 5 jari adalah teknik self-hypnosis sederhana yang dikembangkan dari prinsip
                  neurosains dan psikologi. Teknik ini memanfaatkan hubungan antara stimulasi fisik pada
                  jari-jari tangan dengan aktivasi area spesifik di otak untuk menciptakan kondisi relaksasi
                  yang mendalam.
                </p>
              </div>
            )}
          </div>

          {/* Section 2: Fakta Ilmiah */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleSection('fakta')}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center">
                <div className="w-3 h-8 bg-gradient-to-b from-sirindu-orange to-orange-500 rounded-full mr-4"></div>
                <h4 className="text-xl font-bold text-gray-900">Fakta Ilmiah Hipnosis 5 Jari</h4>
              </div>
              <svg
                className={`w-6 h-6 text-sirindu-orange transition-transform duration-200 ${openSections.fakta ? 'rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSections.fakta && (
              <div className="px-6 pb-6 animate-fade-in">
                <div className="space-y-4">
                  {[
                    "Berdasarkan penelitian di Journal of Clinical Sleep Medicine (2018), teknik self-hypnosis dapat meningkatkan kualitas tidur sebesar 30-40% pada penderita insomnia",
                    "Studi fMRI menunjukkan bahwa stimulasi pada ujung jari dapat mengaktifkan sistem saraf parasimpatis yang bertanggung jawab untuk relaksasi",
                    "Teknik ini menggunakan prinsip neuroplasticity untuk membentuk asosiasi baru antara sensasi fisik dan kondisi mental relaks",
                    "Hipnosis 5 jari telah digunakan dalam terapi cognitive behavioral therapy for insomnia (CBT-I) dengan hasil yang signifikan",
                    "Penelitian di Harvard Medical School membuktikan bahwa self-hypnosis dapat mengurangi waktu yang dibutuhkan untuk tertidur dari 45 menit menjadi 15 menit"
                  ].map((fact, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-sirindu-green/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-sirindu-green rounded-full"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Section 3: Tata Cara */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleSection('tataCara')}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center">
                <div className="w-3 h-8 bg-gradient-to-b from-sirindu-green to-sirindu-lightgreen rounded-full mr-4"></div>
                <h4 className="text-xl font-bold text-gray-900">Tata Cara Hipnosis 5 Jari</h4>
              </div>
              <svg
                className={`w-6 h-6 text-sirindu-green transition-transform duration-200 ${openSections.tataCara ? 'rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSections.tataCara && (
              <div className="px-6 pb-6 animate-fade-in">
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Persiapan",
                      description: "Duduk atau berbaring dalam posisi nyaman di tempat yang tenang. Tarik napas dalam 3 kali untuk menenangkan diri."
                    },
                    {
                      step: "2",
                      title: "Ibu Jari - Niat & Keyakinan",
                      description: "Sentuh ujung ibu jari dengan jari telunjuk tangan yang sama. Ucapkan dalam hati: 'Saya siap untuk tidur nyenyak dan bangun segar'"
                    },
                    {
                      step: "3",
                      title: "Telunjuk - Relaksasi Fisik",
                      description: "Sentuh ujung jari telunjuk sambil merasakan relaksasi menyebar dari ujung jari ke seluruh tubuh. Bayangkan otot-otot mengendur"
                    },
                    {
                      step: "4",
                      title: "Jari Tengah - Visualisasi",
                      description: "Sentuh ujung jari tengah sambil membayangkan tempat yang tenang dan damai. Fokus pada detail sensasi di tempat tersebut"
                    },
                    {
                      step: "5",
                      title: "Jari Manis - Afirmasi Positif",
                      description: "Sentuh ujung jari manis sambil mengulangi afirmasi: 'Tubuh saya rileks, pikiran saya tenang, saya mudah tertidur'"
                    },
                    {
                      step: "6",
                      title: "Kelingking - Integrasi",
                      description: "Sentuh ujung kelingking sambil membayangkan semua relaksasi terkumpul. Kepalkan tangan dan rasakan kedamaian menyelimuti"
                    }
                  ].map((step, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-sirindu-green to-sirindu-lightgreen rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h5>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )
    },
    video: {
      title: "Video Panduan",
      content: (
        <div className="space-y-8">
          {/* Video Utama */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Panduan Terapi Autogenik</h4>
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src={convertGoogleDriveLink("https://drive.google.com/file/d/1wPxD4untoW7KN5mU7DXiXScaGqVah1Pt/view?usp=sharing")}
                    title="Panduan Lengkap Hipnosis 5 Jari"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-lg">
                  Tonton video ini secara lengkap untuk memahami dan mempraktikkan Terapi Relaksasi Autogenik.
                </p>
              </div>
            </div>
          </div>

          {/* Tips Menonton */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-sirindu-green to-sirindu-lightgreen p-6 rounded-xl text-white">
              <h5 className="text-lg font-bold mb-3">💡 Tips Menonton</h5>
              <ul className="space-y-2 text-white/90">
                <li>• Siapkan diri dalam posisi nyaman</li>
                <li>• Pastikan lingkungan tenang</li>
                <li>• Siap mengikuti instruksi step-by-step</li>
                <li>• Tonton sampai selesai untuk hasil maksimal</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-sirindu-orange to-orange-500 p-6 rounded-xl text-white">
              <h5 className="text-lg font-bold mb-3">🎯 Manfaat yang Didapat</h5>
              <ul className="space-y-2 text-white/90">
                <li>• Tidur lebih nyenyak dan berkualitas</li>
                <li>• Bangun lebih segar dan berenergi</li>
                <li>• Mengurangi ketergantungan obat tidur</li>
                <li>• Teknik alami tanpa efek samping</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    senam: {
      title: "Panduan Peregangan untuk Lansia",
      content: (
        <div className="space-y-8">
          <VideoSenamWithThumbnail />

          {/* Catatan Penting */}
          <div className="mt-8 bg-gradient-to-br from-sirindu-green to-sirindu-lightgreen p-6 rounded-xl text-white shadow-lg">
            <h5 className="text-xl font-bold mb-3 text-center">📝 Catatan Penting</h5>
            <ul className="list-disc pl-6 space-y-2 text-white/90 text-lg leading-relaxed">
              <li>
                <strong>KONSISTENSI ADALAH KUNCI.</strong> Hasil akan terasa setelah 10–16 minggu melakukan latihan secara rutin.
              </li>
              <li>Lakukan latihan minimal <strong>3–4 kali seminggu</strong>.</li>
              <li>Kombinasikan dengan kebiasaan tidur yang sehat:</li>
              <ul className="list-[lower-alpha] pl-8 space-y-1">
                <li>Hindari kafein di sore/malam hari</li>
                <li>Ciptakan lingkungan tidur yang nyaman dan gelap</li>
                <li>Tidak membuka gadget 1–2 jam sebelum tidur</li>
                <li>Jaga suhu kamar sejuk (18–21°C)</li>
                <li>Gunakan kasur dan bantal yang nyaman</li>
              </ul>
            </ul>
          </div>
        </div>
      ),
    },

  };

  const tabs = [
    { id: "hipnosis", label: "Hipnosis 5 Jari" },
    { id: "video", label: "Terapi Autogenik" },
    { id: "senam", label: "Terapi Kontrol Otot" }
  ];


  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-sirindu-green rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sirindu-orange rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-sirindu-green/10 text-sirindu-green text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-sirindu-orange rounded-full mr-2 animate-pulse"></div>
            Tentang SI RINDU
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sistem Informasi
            <br />
            <span className="bg-gradient-to-r from-sirindu-green to-sirindu-lightgreen bg-clip-text text-transparent">
              Relaksasi, Istirahat, Nyenyak Tidur
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            <span className="font-semibold text-sirindu-green">SI RINDU</span> adalah platform digital
            terdepan yang dirancang khusus untuk memberikan solusi komprehensif bagi lansia yang
            mengalami masalah insomnia. Kami mengintegrasikan teknik{" "}
            <span className="text-sirindu-orange font-semibold">Hipnosis 5 Jari</span>{" "}
            yang terbukti secara ilmiah untuk membantu mencapai kualitas tidur yang optimal.
          </p>
        </div>

        {/* Main Content with Tabs */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-200 relative ${activeTab === tab.id
                    ? 'text-sirindu-green bg-sirindu-green/5'
                    : 'text-gray-600 hover:text-sirindu-green hover:bg-gray-50'
                    }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sirindu-green to-sirindu-lightgreen"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8 lg:p-12">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                {tabContent[activeTab].title}
              </h3>
              <div className={`transform transition-all duration-500 ${activeTab ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                {tabContent[activeTab].content}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-sirindu-green to-sirindu-lightgreen p-8 lg:p-12 rounded-3xl text-white">
            <h3 className="text-3xl font-bold mb-4">
              Siap Meningkatkan Kualitas Tidur Anda?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Pelajari teknik Hipnosis 5 Jari dan rasakan manfaat tidur nyenyak alami.
              Konsultasi gratis tersedia dengan ahli tidur bersertifikat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("hipnosis");
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sirindu-green font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Tonton Video Panduan</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-sirindu-green transition-all duration-300"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}