"use client"
import { motion } from "framer-motion"

export default function FloatingYarn() {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="fixed bottom-10 right-10 text-5xl"
    >
      🧶
    </motion.div>
  )
}