"use client";

import { useState } from "react";
import TestSelection from "@/components/cognitive-test/TestSelection";
import EducationStep from "@/components/cognitive-test/EducationStep";
import ConsentStep from "@/components/cognitive-test/ConsentStep";
import ComplaintForm from "@/components/cognitive-test/ComplaintForm";

export default function CognitiveTherapyPage() {
  const [currentStep, setCurrentStep] = useState("selection");
  const [assessmentType, setAssessmentType] = useState(null);

  const handleSelectAssessment = (type) => {
    setAssessmentType(type);
    setCurrentStep("education");
  };

  const handleNextStep = () => {
    switch (currentStep) {
      case "education":
        setCurrentStep("consent");
        break;
      case "consent":
        setCurrentStep("complaint");
        break;
      default:
        break;
    }
  };

  const handleBackStep = () => {
    switch (currentStep) {
      case "education":
        setCurrentStep("selection");
        break;
      case "consent":
        setCurrentStep("education");
        break;
      case "complaint":
        setCurrentStep("consent");
        break;
      default:
        setCurrentStep("selection");
        break;
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "selection":
        return <TestSelection onSelectTest={handleSelectAssessment} />;

      case "education":
        return (
          <EducationStep
            testType={assessmentType}
            onNext={handleNextStep}
            onBack={handleBackStep}
          />
        );

      case "consent":
        return (
          <ConsentStep
            testType={assessmentType}
            onNext={handleNextStep}
            onBack={handleBackStep}
          />
        );

      case "complaint":
        return (
          <ComplaintForm
            testType={assessmentType}
            onBack={handleBackStep}
          />
        );

      default:
        return <TestSelection onSelectTest={handleSelectAssessment} />;
    }
  };

  const getProgress = () => {
    const steps = ["selection", "education", "consent", "complaint"];
    const currentIndex = steps.indexOf(currentStep);
    return ((currentIndex + 1) / steps.length) * 100;
  };

  const getStepName = () => {
    switch (currentStep) {
      case "selection":
        return "Pilih Jenis Kajian";
      case "education":
        return "Pemahaman Restrukturisasi Kognitif";
      case "consent":
        return "Persetujuan & Kerahasiaan";
      case "complaint":
        return "Ceritakan Keluh Kesah Anda";
      default:
        return "Kajian Terapi Kognitif";
    }
  };

  const getAssessmentLabel = () => {
    if (assessmentType === 'pretest') return 'Pengkajian Awal';
    if (assessmentType === 'posttest') return 'Evaluasi Akhir';
    return 'Pilih Kajian';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Tombol Kembali ke Beranda */}
        <div className="mb-8">
          <button
            onClick={() => window.location.href = '/'}
            className="group flex items-center gap-2 text-sirindu-green hover:text-sirindu-lightgreen transition-all duration-300 font-medium"
          >
            <div className="p-2 rounded-full bg-sirindu-green/10 group-hover:bg-sirindu-lightgreen/20 transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span>Kembali ke Beranda</span>
          </button>
        </div>

        {/* Header dengan Design Profesional */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sirindu-green to-sirindu-lightgreen rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-sirindu-dark mb-3 tracking-tight">
            Kajian Restrukturisasi Kognitif
          </h1>

          <div className="flex items-center justify-center gap-2 text-sirindu-green">
            <span className="px-4 py-1.5 bg-sirindu-green/10 rounded-full text-sm font-semibold">
              {getAssessmentLabel()}
            </span>
            {currentStep !== "selection" && (
              <>
                <span className="text-sirindu-green/40">•</span>
                <span className="text-sm font-medium text-sirindu-green/80">
                  {getStepName()}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Progress Bar - Professional Design */}
        {currentStep !== "selection" && (
          <div className="mb-10">
            <div className="bg-white rounded-2xl shadow-lg border border-sirindu-green/10 p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sirindu-green to-sirindu-lightgreen rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">
                      {Math.round(getProgress())}%
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-sirindu-green/70 font-medium uppercase tracking-wide">
                      Progress Kajian
                    </p>
                    <p className="text-sm font-semibold text-sirindu-dark">
                      {getStepName()}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs text-sirindu-green/70 font-medium">
                    Langkah {["selection", "education", "consent", "complaint"].indexOf(currentStep) + 1} dari 4
                  </p>
                </div>
              </div>

              <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-sirindu-green to-sirindu-lightgreen rounded-full transition-all duration-700 ease-out shadow-sm"
                  style={{ width: `${getProgress()}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Current Step Content dengan Card Professional */}
        <div className="animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl border border-sirindu-green/10 overflow-hidden">
            {renderCurrentStep()}
          </div>
        </div>

        {/* Footer Info - Professional */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sirindu-green/60 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="font-medium">
              © {new Date().getFullYear()} SI RINDU. All rights reserved.
            </span>
          </div>
          <p className="text-sirindu-green/50 text-xs mt-2">
            Semua data pasien dijamin kerahasiaannya dan dilindungi 
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}