"use client";

export default function EducationStep({ testType, onNext, onBack }) {
  const isPretest = testType === 'pretest';

  return (
    <div className="p-8 lg:p-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="w-20 h-20 bg-gradient-to-br from-sirindu-green to-sirindu-lightgreen rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-sirindu-dark mb-3">
          Memahami Restrukturisasi Kognitif
        </h2>

        <p className="text-lg text-sirindu-dark/70">
          {isPretest
            ? "Mari pahami proses terapi yang akan Anda jalani"
            : "Mari evaluasi perkembangan terapi yang telah Anda jalani"
          }
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 mb-10">

        {/* Definisi Utama */}
        <div className="bg-gradient-to-br from-sirindu-green/5 to-sirindu-lightgreen/5 border-l-4 border-sirindu-green rounded-xl p-6 lg:p-8">
          <h3 className="text-2xl font-bold text-sirindu-dark mb-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-sirindu-green/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-sirindu-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            Apa itu Restrukturisasi Kognitif?
          </h3>
          <p className="text-sirindu-dark/80 leading-relaxed text-lg">
            <strong className="text-sirindu-green">Restrukturisasi Kognitif</strong> adalah pendekatan terapi
            yang membantu Anda mengidentifikasi, mengevaluasi, dan mengubah <strong>pola pikir negatif atau
              distorsi kognitif</strong> yang mempengaruhi kualitas tidur dan kesejahteraan mental Anda.
          </p>
        </div>

        

        {/* Proses 3 Tahap */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-sirindu-dark mb-6 text-center">
            Tiga Tahap Restrukturisasi Kognitif
          </h4>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Tahap 1 */}
            <div className="bg-white rounded-xl p-6 border-2 border-sirindu-green/20 hover:border-sirindu-green/40 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-sirindu-green to-sirindu-lightgreen rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h5 className="font-bold text-sirindu-dark text-lg mb-2">Identifikasi</h5>
              </div>
              <p className="text-sirindu-dark/70 text-center text-sm leading-relaxed">
                Mengenali dan mencatat pikiran otomatis negatif yang muncul seputar tidur dan istirahat
              </p>
            </div>

            {/* Tahap 2 */}
            <div className="bg-white rounded-xl p-6 border-2 border-sirindu-lightgreen/20 hover:border-sirindu-lightgreen/40 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-sirindu-lightgreen to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h5 className="font-bold text-sirindu-dark text-lg mb-2">Evaluasi</h5>
              </div>
              <p className="text-sirindu-dark/70 text-center text-sm leading-relaxed">
                Menguji kebenaran dan rasionalitas pikiran tersebut dengan bukti objektif
              </p>
            </div>

            {/* Tahap 3 */}
            <div className="bg-white rounded-xl p-6 border-2 border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h5 className="font-bold text-sirindu-dark text-lg mb-2">Restrukturisasi</h5>
              </div>
              <p className="text-sirindu-dark/70 text-center text-sm leading-relaxed">
                Mengganti pola pikir dengan perspektif yang lebih seimbang dan realistis
              </p>
            </div>
          </div>
        </div>

        {/* Tujuan Kajian */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-sirindu-orange/30 rounded-xl p-6 lg:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-sirindu-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-sirindu-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sirindu-dark mb-4 text-xl">
                {isPretest ? 'Tujuan Pengkajian Awal' : 'Tujuan Evaluasi Akhir'}
              </h4>

              {isPretest ? (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sirindu-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sirindu-dark/80 leading-relaxed">
                      <strong>Memetakan kondisi awal</strong> pola pikir dan keyakinan Anda tentang tidur
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sirindu-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sirindu-dark/80 leading-relaxed">
                      <strong>Mengidentifikasi distorsi kognitif</strong> yang paling dominan dan mengganggu
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sirindu-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sirindu-dark/80 leading-relaxed">
                      <strong>Menjadi baseline</strong> untuk merancang intervensi terapi yang tepat dan personal
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sirindu-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sirindu-dark/80 leading-relaxed">
                      <strong>Memahami dampak</strong> gangguan tidur terhadap fungsi kehidupan sehari-hari Anda
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sirindu-lightgreen flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sirindu-dark/80 leading-relaxed">
                      <strong>Mengukur perubahan</strong> pola pikir sebelum dan setelah intervensi terapi
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sirindu-lightgreen flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sirindu-dark/80 leading-relaxed">
                      <strong>Mengevaluasi efektivitas</strong> teknik restrukturisasi kognitif yang telah diterapkan
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sirindu-lightgreen flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sirindu-dark/80 leading-relaxed">
                      <strong>Mengidentifikasi perkembangan</strong> positif dan area yang masih memerlukan perhatian
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sirindu-lightgreen flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sirindu-dark/80 leading-relaxed">
                      <strong>Merencanakan langkah</strong> lanjutan untuk mempertahankan hasil terapi yang optimal
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
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
          className="px-8 py-3.5 bg-gradient-to-r from-sirindu-green to-sirindu-lightgreen text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
        >
          Lanjut ke Persetujuan
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}