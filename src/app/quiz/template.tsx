"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="fixed inset-0 z-[-1]"
      animate={{
        background: [
          "linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%)",
          "linear-gradient(60deg, #ffdee9 0%, #b5fffc 100%)",
          "linear-gradient(120deg, #ffdee9 0%, #b5fffc 100%)",
          "linear-gradient(180deg, #ffdee9 0%, #b5fffc 100%)",
          "linear-gradient(240deg, #ffdee9 0%, #b5fffc 100%)",
          "linear-gradient(300deg, #ffdee9 0%, #b5fffc 100%)",
          "linear-gradient(360deg, #ffdee9 0%, #b5fffc 100%)",
        ],
      }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      <motion.div
        className="w-screen h-screen"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <div className="h-screen flex flex-col items-center justify-center">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
