"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function CognitiveTherapyAnalysis() {
    const [isVisible, setIsVisible] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showLearnMore, setShowLearnMore] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // Animation on mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleNavigate = () => {
        setIsLoading(true);
        
        // Smooth page transition
        document.documentElement.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        document.documentElement.style.opacity = '0';
        document.documentElement.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
            router.push('/cognitive-test');
        }, 500);
    };

    const features = [
        {
            title: "Kerahasiaan Terjamin",
            description: "Data dan informasi pribadi Anda dijaga kerahasiaannya oleh ners dengan penuh tanggung jawab dan tidak akan dibagikan kepada pihak lain tanpa persetujuan Anda."
        },
        {
            title: "Berbasis Bukti Klinis",
            description: "Terapi yang telah dibuktikan secara ilmiah dan diakui dalam praktik ilmu keperawatan."
        },
        {
            title: "Hasil Komprehensif",
            description: "Laporan analisis lengkap dengan interpretasi yang mudah dipahami dan rekomendasi yang dapat langsung diterapkan."
        },
        {
            title: "Konsultasi Profesional",
            description: "Akses ke Ners ahli kesehatan tidur yang siap membantu Anda memahami hasil dan memberikan panduan lebih lanjut."
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -5,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        tap: { 
            scale: 0.98 
        },
        loading: {
            scale: 0.95,
            opacity: 0.8
        }
    };

    return (
        <section
            id="cognitive-therapy"
            className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-3">
                <motion.div 
                    className="absolute top-20 left-10 w-96 h-96 bg-sirindu-green/20 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-20 right-10 w-96 h-96 bg-sirindu-orange/20 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.3, 0.2, 0.3]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-sirindu-green/10 text-sirindu-green text-sm font-medium mb-6 border border-sirindu-green/20"
                    >
                        <motion.div 
                            className="w-2 h-2 bg-sirindu-orange rounded-full mr-2"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        Analisis Gangguan Tidur
                    </motion.div>
                    
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold text-sirindu-green mb-6"
                    >
                        Kajian Penilaian Kualitas Tidur untuk Lansia
                    </motion.h2>
                    
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Evaluasi komprehensif untuk memahami pola tidur Anda dan mendapatkan
                        rekomendasi yang tepat berdasarkan pendekatan terapi kognitif-perilaku
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-white rounded-2xl p-8 border border-sirindu-green/20 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-lg font-semibold text-sirindu-green mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main CTA Card */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white rounded-2xl shadow-lg border border-sirindu-green/20 overflow-hidden"
                >
                    <div className="p-8 md:p-10">
                        <div className="max-w-3xl mx-auto">
                            {/* Privacy Notice */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="bg-gray-50 rounded-xl p-6 mb-8 border border-sirindu-green/20"
                            >
                                <div className="flex items-start gap-3">
                                    <motion.svg 
                                        className="w-6 h-6 text-sirindu-green flex-shrink-0 mt-0.5" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        animate={{ rotate: [0, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </motion.svg>
                                    <div>
                                        <h4 className="font-semibold text-sirindu-green mb-2">Privasi dan Keamanan Data</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Semua informasi yang Anda berikan bersifat rahasia dan hanya akan digunakan
                                            untuk keperluan analisis dan konsultasi kesehatan Anda.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Dropdown Info */}
                            <div className="mb-8">
                                <motion.button
                                    whileHover={{ backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setShowInfo(!showInfo)}
                                    className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg transition-colors duration-200 border border-sirindu-green/20"
                                >
                                    <span className="font-semibold text-sirindu-green">
                                        Kenapa Penting Melakukan Kajian Ini?
                                    </span>
                                    <motion.svg
                                        animate={{ rotate: showInfo ? 180 : 0 }}
                                        className="w-5 h-5 text-sirindu-green"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </motion.button>

                                <AnimatePresence>
                                    {showInfo && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-4 p-4 bg-white border border-sirindu-green/20 rounded-lg space-y-3 text-gray-600 leading-relaxed">
                                                <p>
                                                    Gangguan tidur pada lansia dapat mempengaruhi kualitas hidup secara signifikan.
                                                    Melalui Kajian ini, kami akan membantu Anda mengidentifikasi pola dan masalah tidur
                                                    yang mungkin Anda alami.
                                                </p>
                                                <p>
                                                    Hasil analisis akan memberikan gambaran jelas tentang kondisi tidur Anda dan
                                                    rekomendasi langkah-langkah yang dapat diambil untuk meningkatkan kualitas tidur
                                                    dan kesehatan Anda secara keseluruhan.
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Kajian Info */}
                            <motion.div 
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                            >
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center p-4 bg-gray-50 rounded-lg border border-sirindu-green/20"
                                >
                                    <div className="text-2xl font-bold text-sirindu-orange mb-1">10-15</div>
                                    <div className="text-sm text-gray-600">Menit</div>
                                </motion.div>
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center p-4 bg-gray-50 rounded-lg border border-sirindu-green/20"
                                >
                                    <div className="text-2xl font-bold text-sirindu-orange mb-1">100%</div>
                                    <div className="text-sm text-gray-600">Rahasia</div>
                                </motion.div>
                            </motion.div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <motion.button
                                    variants={buttonVariants}
                                    initial="initial"
                                    whileHover={!isLoading ? "hover" : "loading"}
                                    whileTap={!isLoading ? "tap" : "loading"}
                                    onClick={handleNavigate}
                                    disabled={isLoading}
                                    className={`relative w-full sm:w-auto px-8 py-4 bg-sirindu-green text-white font-semibold rounded-lg shadow-md hover:bg-sirindu-lightgreen transition-all duration-300 ${
                                        isLoading ? 'cursor-not-allowed' : ''
                                    }`}
                                >
                                    {isLoading && (
                                        <motion.div 
                                            className="absolute inset-0 flex items-center justify-center"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            <motion.div 
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                        </motion.div>
                                    )}
                                    <span className={isLoading ? 'invisible' : 'visible'}>
                                        Mulai Kajian Sekarang
                                    </span>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-10 text-center"
                >
                    <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        Kajian ini menggunakan instrumen yang telah divalidasi secara klinis dan dirancang
                        khusus untuk membantu lansia memahami dan mengatasi masalah tidur mereka dengan
                        pendekatan yang aman dan terpercaya.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}