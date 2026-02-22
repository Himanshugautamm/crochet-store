"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
<nav className="bg-white/30 backdrop-blur-xl border border-purple-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-purple-600"
        >
          🧶 YarnWhisper
        </motion.h1>

        <div className="flex gap-6 items-center">
          <Link href="/" className="hover:text-purple-600">Home</Link>
          <Link href="/products" className="hover:text-purple-600">Products</Link>
          <Link href="/cart" className="hover:text-purple-600">Cart 🛒</Link>

          <Link href="/login" className="px-4 py-2 rounded-full bg-purple-500 text-white">
            Login
          </Link>
          <Link href="/register" className="px-4 py-2 rounded-full border border-purple-500 text-purple-600">
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}