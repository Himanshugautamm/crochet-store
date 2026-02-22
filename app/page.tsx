"use client"

import { motion } from "framer-motion"
import Link from "next/link"

// COMPONENTS
import Navbar from "./components/Navbar"
import FloatingYarn from "./components/FloatingYarn"
import ParticlesBg from "./components/ParticlesBg"
import ProductCollection from "./components/ProductCollection"
import Testimonials from "./components/Testimonials"
import InstagramPreview from "./components/InstagramPreview"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-purple-50 to-pink-50 min-h-screen text-gray-700">

      {/* Global Cute Effects */}
      <ParticlesBg />
      <Navbar />
      <FloatingYarn />

      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-purple-600"
        >
          Whispers of Yarn 🧶
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg md:text-xl text-purple-400 max-w-xl"
        >
          Soft • Handmade • Made with Love 💜
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/products"
            className="mt-8 inline-block px-8 py-3 bg-purple-500 hover:bg-purple-600 transition text-white rounded-full shadow-lg"
          >
            Shop Cute Things ✨
          </Link>
        </motion.div>
      </section>

      {/* ================= PRODUCT COLLECTION (Now External Component) ================= */}
      <ProductCollection />

      {/* Instagram Section */}
      <InstagramPreview />

      {/* Testimonials (near bottom, smaller) */}
      <div className="scale-95">
        <Testimonials />
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-purple-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          Why Choose Us? 💖
        </h2>
        <p className="max-w-2xl mx-auto text-purple-600">
          Every product is handcrafted with love, care, and premium yarn.
          We focus on minimalistic pastel aesthetics and trendy designs
          that make you smile instantly ✨
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-purple-600 text-white py-8 text-center">
        <p className="font-semibold">© 2026 Whispers of Yarn</p>
        <p className="text-sm mt-2 opacity-80">
          Made with 💜 & yarn magic
        </p>
      </footer>

    </main>
  )
}