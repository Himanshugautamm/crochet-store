"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-pink-50">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-pink-600"
      >
        Handmade Crochet Store 🧶
      </motion.h1>

      <Link
        href="/products"
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl"
      >
        Shop Now
      </Link>
    </main>
  )
}