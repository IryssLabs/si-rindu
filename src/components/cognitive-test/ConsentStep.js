"use client";

import { useState } from "react";

export default function ConsentStep({ testType, onNext, onBack }) {
  const [agreed, setAgreed] = useState(false);
  const currentTime = new Date().getHours();
  const greeting = currentTime < 11 ? "Selamat Pagi" : currentTime < 15 ? "Selamat Siang" : "Selamat Sore";

  return (
    <div className="p-8 lg:p-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="w-20 h-20 bg-gradient-to-br from-sirindu-green to-sirindu-lightgreen rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold text-sirindu-dark mb-3">
          Persetujuan & Kerahasiaan
        </h2>
        
        <p className="text-lg text-sirindu-dark/70">
          Komitmen kami terhadap privasi dan kenyamanan Anda
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 mb-10">
        
        {/* Sambutan */}
        <div className="bg-gradient-to-br from-sirindu-green/5 to-sirindu-lightgreen/5 border-l-4 border-sirindu-green rounded-xl p-6 lg:p-8">
          <p className="text-sirindu-dark/80 leading-relaxed mb-4">
            <strong className="text-sirindu-green text-lg">{greeting}.</strong>
          </p>
          <p className="text-sirindu-dark/80 leading-relaxed mb-4">
            Selamat datang di <strong className="text-sirindu-green">Ruang Terapi</strong>. 
            Di sini Bapak/Ibu akan diberikan terapi restrukturisasi kognitif secara online. 
            Terapi restrukturisasi kognitif adalah terapi yang bertujuan untuk membantu Bapak/Ibu 
            mengenali pikiran negatif tentang tidur dan menilai kebenaran dari pikiran tersebut.
          </p>
          <p className="text-sirindu-dark/80 leading-relaxed">
            Setelah Bapak/Ibu mengikuti terapi ini, kecemasan menjelang tidur diharapkan menurun 
            dan kualitas tidur meningkat.
          </p>
        </div>

        {/* Panduan Kerahasiaan */}
        <div className="bg-white rounded-xl border-2 border-sirindu-green/20 overflow-hidden">
          <div className="bg-gradient-to-r from-sirindu-green to-sirindu-lightgreen p-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Panduan Kerahasiaan & Keamanan Data
            </h3>
          </div>
          
          <div className="p-6 lg:p-8 space-y-5">
            {/* Point 1 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-sirindu-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-sirindu-green font-bold text-lg">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sirindu-dark mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-sirindu-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Jaminan Kerahasiaan Data Penuh
                </h4>
                <p className="text-sirindu-dark/70 leading-relaxed">
                  Seluruh data yang dituliskan oleh Bapak/Ibu <strong className="text-sirindu-green">dijamin kerahasiaannya</strong>. 
                  Hanya perawat yang memandu terapi ini yang dapat mengakses data Bapak/Ibu. Data tersimpan 
                   dan tidak akan dibagikan kepada pihak ketiga manapun.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-sirindu-lightgreen/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-sirindu-lightgreen font-bold text-lg">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sirindu-dark mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-sirindu-lightgreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Kemungkinan Ketidaknyamanan Emosional
                </h4>
                <p className="text-sirindu-dark/70 leading-relaxed">
                  Tidak ada efek samping atau bahaya langsung akibat terapi ini. Namun, selama mengikuti terapi 
                  Bapak/Ibu <strong className="text-sirindu-dark">mungkin merasa tidak nyaman</strong> karena pertanyaan 
                  dalam terapi menyebabkan Bapak/Ibu mengingat kembali pengalaman yang kurang menyenangkan.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-600 font-bold text-lg">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sirindu-dark mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Hak untuk Beristirahat
                </h4>
                <p className="text-sirindu-dark/70 leading-relaxed">
                  Apabila Bapak/Ibu merasakan ketidaknyamanan selama terapi, Bapak/Ibu dapat 
                  <strong className="text-sirindu-green"> menyampaikan kepada perawat</strong> dan akan 
                  diperkenankan untuk beristirahat terlebih dahulu. Kesejahteraan emosional Anda adalah prioritas kami.
                </p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-lg">4</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sirindu-dark mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Pentingnya Kejujuran dalam Terapi
                </h4>
                <p className="text-sirindu-dark/70 leading-relaxed">
                  Keberhasilan terapi sangat bergantung pada kejujuran dan keterbukaan Bapak/Ibu. 
                  Tidak ada cerita yang terlalu sepele atau jawaban yang salah. Setiap pengalaman 
                  yang Bapak/Ibu bagikan adalah berharga untuk proses terapi yang efektif.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hal yang Dibutuhkan */}
        <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200/50 rounded-xl p-6 lg:p-8">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sirindu-dark text-lg mb-3">
                Yang Kami Butuhkan dari Bapak/Ibu
              </h4>
              <p className="text-sirindu-dark/70 leading-relaxed mb-4">
                Ceritakan dengan bahasa Bapak/Ibu sendiri tentang:
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sirindu-dark/80 text-sm leading-relaxed">
                Pikiran dan kekhawatiran yang muncul saat akan tidur
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sirindu-dark/80 text-sm leading-relaxed">
                Perasaan yang dialami saat terbangun di malam hari
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sirindu-dark/80 text-sm leading-relaxed">
                Dampak kurang tidur pada aktivitas sehari-hari
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sirindu-dark/80 text-sm leading-relaxed">
                Harapan dan tujuan yang ingin dicapai
              </p>
            </div>
          </div>
        </div>

        {/* Checkbox Persetujuan */}
        <div className="bg-white border-2 border-sirindu-green/30 rounded-xl p-6 lg:p-8">
          <label className="flex items-start gap-4 cursor-pointer group">
            <div className="relative flex-shrink-0 mt-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-6 h-6 text-sirindu-green border-2 border-sirindu-green/30 rounded-lg focus:ring-2 focus:ring-sirindu-green/50 cursor-pointer transition-all"
              />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sirindu-dark text-lg mb-3">
                Pernyataan Persetujuan
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sirindu-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sirindu-dark/80 text-sm leading-relaxed">
                    Saya telah memahami tujuan dan proses {testType === 'pretest' ? 'pengkajian awal' : 'evaluasi akhir'} ini
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sirindu-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sirindu-dark/80 text-sm leading-relaxed">
                    Saya setuju data saya digunakan untuk keperluan terapi dan analisis klinis
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sirindu-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sirindu-dark/80 text-sm leading-relaxed">
                    Saya berkomitmen untuk memberikan informasi yang jujur dan akurat
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sirindu-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sirindu-dark/80 text-sm leading-relaxed">
                    Saya memahami bahwa kerahasiaan data saya dijamin sesuai kode etik keperawatan
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sirindu-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sirindu-dark/80 text-sm leading-relaxed">
                    Saya berhak untuk menyampaikan ketidaknyamanan dan beristirahat kapan saja
                  </p>
                </div>
              </div>
            </div>
          </label>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-sirindu-green/10">
        <button
          onClick={onBack}
          className="px-8 py-3.5 bg-white border-2 border-sirindu-green/20 text-sirindu-green font-semibold rounded-xl hover:bg-sirindu-green/5 hover:border-sirindu-green/40 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali
        </button>
        
        <button
          onClick={onNext}
          disabled={!agreed}
          className={`px-8 py-3.5 font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${
            agreed 
              ? 'bg-gradient-to-r from-sirindu-green to-sirindu-lightgreen text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Mulai {testType === 'pretest' ? 'Pengkajian Awal' : 'Evaluasi Akhir'}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}