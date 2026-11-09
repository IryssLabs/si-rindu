"use client";

import { motion } from "framer-motion";

export default function LayoutClient({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}
