export default function TestSelection({ onSelectTest }) {
  return (
    <div className="p-8 lg:p-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sirindu-green/10 border border-sirindu-green/20 text-sirindu-green text-sm font-semibold mb-6 shadow-sm">
          <div className="w-2 h-2 bg-sirindu-green rounded-full animate-pulse"></div>
          Kajian Restrukturisasi Kognitif
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-sirindu-dark mb-4">
          Pilih Jenis Kajian
        </h2>

        <p className="text-lg text-sirindu-dark/70 max-w-2xl mx-auto leading-relaxed">
          Mari mulai perjalanan menuju tidur yang lebih berkualitas melalui kajian yang tepat dan terstruktur
        </p>
      </div>

      {/* Assessment Cards */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-10">

        {/* Pengkajian Awal Card */}
        <div className="group bg-gradient-to-br from-white to-green-50/30 rounded-2xl shadow-lg border-2 border-sirindu-green/20 hover:border-sirindu-green hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="p-8">
            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sirindu-green to-sirindu-lightgreen rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-sirindu-orange rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold">1</span>
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-bold text-sirindu-dark mb-2 text-center">
              Pengkajian Awal
            </h3>

            <p className="text-center text-sirindu-green font-medium mb-6 text-sm">
              Sebelum Memulai Terapi
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-sm text-sirindu-dark/80">
                <svg className="w-5 h-5 text-sirindu-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Memahami kondisi dan pola tidur saat ini</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-sirindu-dark/80">
                <svg className="w-5 h-5 text-sirindu-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Mengidentifikasi pola pikir yang mengganggu</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-sirindu-dark/80">
                <svg className="w-5 h-5 text-sirindu-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Menyusun baseline untuk terapi personal</span>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => onSelectTest('pretest')}
              className="w-full py-4 bg-gradient-to-r from-sirindu-green to-sirindu-lightgreen text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Mulai Pengkajian Awal
            </button>

            {/* Info Badge */}
            <div className="mt-4 text-center">
              <span className="inline-flex items-center gap-1.5 text-xs text-sirindu-green/70 bg-sirindu-green/5 px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Untuk yang pertama kali mengikuti terapi
              </span>
            </div>
          </div>
        </div>

        {/* Evaluasi Akhir Card */}
        <div className="group bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl shadow-lg border-2 border-sirindu-lightgreen/20 hover:border-sirindu-lightgreen hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="p-8">
            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sirindu-lightgreen to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-sirindu-orange rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold">2</span>
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-bold text-sirindu-dark mb-2 text-center">
              Evaluasi Akhir
            </h3>

            <p className="text-center text-sirindu-lightgreen font-medium mb-6 text-sm">
              Setelah Menyelesaikan Terapi
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-sm text-sirindu-dark/80">
                <svg className="w-5 h-5 text-sirindu-lightgreen flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Menilai perubahan pola tidur setelah terapi</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-sirindu-dark/80">
                <svg className="w-5 h-5 text-sirindu-lightgreen flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Menilai efektivitas  terapi</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-sirindu-dark/80">
                <svg className="w-5 h-5 text-sirindu-lightgreen flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Memantau manfaat terapi terhadap kualitas tidur</span>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => onSelectTest('posttest')}
              className="w-full py-4 bg-gradient-to-r from-sirindu-lightgreen to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Mulai Evaluasi Akhir
            </button>

            {/* Info Badge */}
            <div className="mt-4 text-center">
              <span className="inline-flex items-center gap-1.5 text-xs text-sirindu-lightgreen/70 bg-sirindu-lightgreen/5 px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Setelah menyelesaikan sesi terapi kognitif
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Informasi Penting */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-sirindu-green/5 to-sirindu-lightgreen/5 rounded-2xl p-6 lg:p-8 border border-sirindu-green/10 shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 bg-sirindu-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-sirindu-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sirindu-dark mb-3 text-lg">
                Informasi Penting untuk Anda
              </h4>
              <div className="space-y-2.5">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sirindu-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sirindu-dark/80 text-sm leading-relaxed">
                    Sebelum mengisi keluhan, terdapat penjelasan lengkap tentang proses terapi restrukturisasi kognitif

                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sirindu-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sirindu-dark/80 text-sm leading-relaxed">
                    Semua data dan cerita Anda dijamin kerahasiaannya sesuai kode etik keperawatan
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sirindu-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sirindu-dark/80 text-sm leading-relaxed">
                    Hasil kajian akan dianalisis oleh ners spesialis  keperawatan komunitas

                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sirindu-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sirindu-dark/80 text-sm leading-relaxed">
                    Tidak ada jawaban benar atau salah, yang kami butuhkan adalah kejujuran dari Anda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}