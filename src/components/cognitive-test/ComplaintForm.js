import { useState, useEffect } from "react";
import { ChevronLeft, Send, CheckCircle, User, Calendar, Phone, Venus, Mars, MessageCircle, Moon, AlertTriangle, Heart, Activity, Sun, Target, Lightbulb } from "lucide-react";

const identitySteps = [
  {
    id: "name",
    label: "Nama",
    question: "Silakan masukkan nama lengkap Anda",
    placeholder: "Contoh: 'Siti Aminah'",
    icon: User
  },
  {
    id: "age",
    label: "Usia",
    question: "Berapa usia Anda?",
    placeholder: "Contoh: '55'",
    icon: Calendar
  },
  {
    id: "gender",
    label: "Jenis Kelamin",
    question: "Apa jenis kelamin Anda?",
    type: "radio",
    icon: Venus
  },
  {
    id: "phone",
    label: "Nomor Telepon",
    question: "Silakan masukkan nomor WhatsApp Anda",
    placeholder: "Contoh: '081234567890'",
    icon: Phone
  }
];

const mainSteps = [
  {
    id: "event",
    label: "Peristiwa Sulit",
    question: "Peristiwa atau pengalaman apa yang paling sulit atau tidak menyenangkan terkait tidur Anda akhir-akhir ini?",
    placeholder: "Contoh: 'Sejak ibu meninggal, saya tidak bisa tidur nyenyak', atau 'Saya sering terbangun karena memikirkan tagihan...'",
    icon: MessageCircle
  },
  {
    id: "sleepDuration",
    label: "Durasi Tidur",
    question: "Berapa jam biasanya Anda tidur dalam semalam?",
    placeholder: "Contoh: 'Hanya 2-3 jam', 'Sering terbangun 3-4 kali', 'Bangun jam 4 pagi dan tidak bisa tidur lagi...'",
    icon: Moon
  },
  {
    id: "sleepProblems",
    label: "Kesulitan Tidur",
    question: "Apa saja kesulitan yang Anda alami saat mencoba tidur?",
    placeholder: "Contoh: 'Sulit memulai tidur', 'Sering terbangun tengah malam', 'Mimpi buruk', 'Bangun terlalu pagi...'",
    icon: AlertTriangle
  },
  {
    id: "negativeThoughts",
    label: "Pikiran Negatif",
    question: "Pikiran apa yang sering muncul saat Anda berusaha tidur?",
    placeholder: "Contoh: 'Saya pasti tidak akan bisa tidur malam ini', 'Besok saya akan lelah lagi', 'Tidur saya sudah rusak selamanya...'",
    icon: Heart
  },
  {
    id: "physicalSymptoms",
    label: "Gejala Fisik",
    question: "Gejala fisik apa yang Anda rasakan saat sulit tidur?",
    placeholder: "Contoh: 'Jantung berdebar', 'Berkeringat dingin', 'Tegang di bahu', 'Sakit kepala', 'Sesak napas...'",
    icon: Activity
  },
  {
    id: "dailyImpact",
    label: "Dampak Harian",
    question: "Bagaimana kurang tidur memengaruhi aktivitas sehari-hari Anda?",
    placeholder: "Contoh: 'Sulit konsentrasi', 'Mudah marah', 'Lupa hal kecil', 'Tidak bersemangat bekerja...'",
    icon: Sun
  },
  {
    id: "previousEfforts",
    label: "Upaya Sebelumnya",
    question: "Apa yang sudah Anda coba untuk mengatasi masalah tidur?",
    placeholder: "Contoh: 'Minum obat tidur', 'Mencoba relaksasi', 'Menghindari kopi', 'Olahraga sore...'",
    icon: Lightbulb
  },
  {
    id: "expectations",
    label: "Harapan",
    question: "Apa harapan Anda setelah mengikuti terapi ini?",
    placeholder: "Contoh: 'Bisa tidur 6-7 jam', 'Bangun segar', 'Tidak bergantung pada obat', 'Tenang saat tidur...'",
    icon: Target
  }
];

export default function ComplaintForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    event: "",
    sleepDuration: "",
    sleepProblems: "",
    negativeThoughts: "",
    physicalSymptoms: "",
    dailyImpact: "",
    previousEfforts: "",
    expectations: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const totalSteps = identitySteps.length + mainSteps.length;
  const isIdentityStep = currentStep < identitySteps.length;
  const identityStep = isIdentityStep ? identitySteps[currentStep] : null;
  const mainStep = !isIdentityStep ? mainSteps[currentStep - identitySteps.length] : null;
  const currentStepObj = isIdentityStep ? identityStep : mainStep;
  const isLastStep = currentStep === totalSteps - 1;

  // Validate current step
  useEffect(() => {
    const newErrors = {};

    if (isIdentityStep) {
      if (!formData[identityStep.id]?.trim()) {
        newErrors[identityStep.id] = `${identityStep.label} wajib diisi`;
      }
    } else {
      if (currentStep === identitySteps.length && !formData.event?.trim()) {
        newErrors.event = "Peristiwa sulit wajib diisi untuk melanjutkan.";
      } else if (currentStep > identitySteps.length && !formData[mainStep.id]?.trim()) {
        newErrors[mainStep.id] = "Jawaban ini wajib diisi.";
      }
    }

    setErrors(newErrors);
  }, [currentStep, formData, isIdentityStep, identityStep, mainStep]);

  const handleNext = () => {
    if (Object.keys(errors).length === 0) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps - 1));
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (value) => {
    setFormData(prev => ({ ...prev, gender: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `
*KELUH KESAH PASIEN - RESTUKTURISASI KOGNITIF*

*Identitas:*
- Nama: ${formData.name}
- Usia: ${formData.age} tahun
- Jenis Kelamin: ${formData.gender === 'male' ? 'Laki-laki' : 'Perempuan'}
- No. Telp: ${formData.phone}

*Peristiwa Sulit:*
${formData.event || 'Tidak diisi'}

*Data Tidur:*
- Durasi: ${formData.sleepDuration || 'Tidak diisi'}
- Kesulitan: ${formData.sleepProblems || 'Tidak diisi'}

*Pikiran Negatif:*
${formData.negativeThoughts || 'Tidak diisi'}

*Gejala Fisik:*
${formData.physicalSymptoms || 'Tidak diisi'}

*Dampak Harian:*
${formData.dailyImpact || 'Tidak diisi'}

*Upaya Sebelumnya:*
${formData.previousEfforts || 'Tidak diisi'}

*Harapan:*
${formData.expectations || 'Tidak diisi'}

---
_Pasien telah menyetujui analisis data oleh ners spesialis. Kerahasiaan dijamin._
_Timestamp: ${new Date().toLocaleString('id-ID')}_
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/628111807644?text=${encodedMessage}`, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-sirindu-lightgreen/10 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center max-w-2xl mx-auto">
          <div className="w-24 h-24 bg-sirindu-lightgreen/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-sirindu-green" />
          </div>

          <h2 className="text-3xl font-bold text-sirindu-dark mb-6">
            Terima Kasih Atas Kejujuran Anda
          </h2>

          <div className="bg-sirindu-lightgreen/10 border border-sirindu-lightgreen/30 rounded-2xl p-8 mb-8">
            <p className="text-sirindu-dark text-lg mb-4 leading-relaxed">
              Keluh kesah Anda telah <strong className="font-semibold">terkirim ke ners spesialis</strong> untuk dianalisis.
            </p>
            <p className="text-sirindu-dark/80 text-base leading-relaxed">
              Ners akan menghubungi Anda dalam <strong className="font-semibold">1x24 jam</strong> via WhatsApp.
            </p>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-sirindu-green text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:bg-sirindu-lightgreen"
          >
            Kembali ke Awal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sirindu-lightgreen/10 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sirindu-lightgreen/20 rounded-full mb-4">
            {currentStepObj?.icon && <currentStepObj.icon className="w-10 h-10 text-sirindu-green" />}
          </div>
          <h1 className="text-2xl font-bold text-sirindu-dark mb-2">
            Formulir Keluhan Tidur
          </h1>
          <p className="text-sirindu-dark/60 text-sm">
            Restrukturisasi Kognitif
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-sirindu-dark/60">
              Langkah {currentStep + 1} dari {totalSteps}
            </span>
            <span className="text-sm font-medium text-sirindu-green">
              {currentStepObj?.label}
            </span>
          </div>
          <div className="w-full bg-sirindu-dark/20 rounded-full h-3">
            <div
              className="bg-sirindu-green h-full rounded-full transition-all duration-700 ease-out"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-sirindu-dark leading-relaxed">
              {currentStepObj?.question}
            </h3>
          </div>

          {isIdentityStep && identityStep.type === "radio" ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleGenderChange('male')}
                  className={`p-4 border rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 ${formData.gender === 'male'
                      ? 'border-sirindu-green bg-sirindu-lightgreen/10 text-sirindu-green'
                      : 'border-sirindu-dark/30 hover:border-sirindu-green text-sirindu-dark'
                    }`}
                >
                  <Mars className="w-5 h-5" />
                  <span>Laki-laki</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleGenderChange('female')}
                  className={`p-4 border rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 ${formData.gender === 'female'
                      ? 'border-sirindu-green bg-sirindu-lightgreen/10 text-sirindu-green'
                      : 'border-sirindu-dark/30 hover:border-sirindu-green text-sirindu-dark'
                    }`}
                >
                  <Venus className="w-5 h-5" />
                  <span>Perempuan</span>
                </button>
              </div>
              {errors.gender && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <span className="mr-1">•</span>
                  {errors.gender}
                </p>
              )}
            </div>
          ) : (
            <div className="relative">
              {isIdentityStep ? (
                <input
                  type={identityStep?.id === 'age' ? 'number' : identityStep?.id === 'phone' ? 'tel' : 'text'}
                  name={currentStepObj?.id}
                  value={formData[currentStepObj?.id] || ''}
                  onChange={handleInputChange}
                  placeholder={currentStepObj?.placeholder}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sirindu-green focus:border-sirindu-green text-sirindu-dark placeholder-sirindu-dark/40 transition-all duration-300 ${errors[currentStepObj?.id]
                      ? 'border-red-300 bg-red-50'
                      : 'border-sirindu-dark/30 hover:border-sirindu-green'
                    }`}
                  required
                />
              ) : (
                <textarea
                  name={currentStepObj?.id}
                  value={formData[currentStepObj?.id] || ''}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder={currentStepObj?.placeholder}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sirindu-green focus:border-sirindu-green resize-none text-sirindu-dark placeholder-sirindu-dark/40 transition-all duration-300 ${errors[currentStepObj?.id]
                      ? 'border-red-300 bg-red-50'
                      : 'border-sirindu-dark/30 hover:border-sirindu-green'
                    }`}
                  required
                />
              )}
              {errors[currentStepObj?.id] && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <span className="mr-1">•</span>
                  {errors[currentStepObj?.id]}
                </p>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="flex items-center justify-center px-6 py-3 bg-sirindu-dark/10 text-sirindu-dark font-medium rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              {currentStep === 0 ? "Kembali" : "Sebelumnya"}
            </button>

            {isLastStep ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.event?.trim()}
                className="flex items-center justify-center px-6 py-3 bg-sirindu-green text-white font-semibold rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Kirim ke Ners
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                disabled={Object.keys(errors).length > 0}
                className="flex items-center justify-center px-6 py-3 bg-sirindu-green text-white font-semibold rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                Lanjut
              </button>
            )}
          </div>

          {/* Privacy Note */}
          {isLastStep && (
            <div className="mt-6 p-5 bg-sirindu-lightgreen/10 border border-sirindu-lightgreen/30 rounded-2xl text-sm text-sirindu-dark">
              <p className="font-medium text-sirindu-green mb-2 text-center">Privasi & Kerahasiaan</p>
              <p className="text-center leading-relaxed">
                Dengan melanjutkan, Anda menyetujui data ini dianalisis oleh ners spesialis dengan jaminan kerahasiaan penuh sesuai standar etika profesi.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
