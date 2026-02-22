"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProductCollection() {
  const products = [
    { name: "Crochet Flowers 🌸", price: 199, img: "/crochet1.jpg" },
    { name: "Pastel Scrunchies 💜", price: 149, img: "/crochet2.jpg" },
    { name: "Cute Keychains 🧸", price: 129, img: "/crochet3.jpg" },
    { name: "Mini Bouquet 💐", price: 299, img: "/crochet1.jpg" },
    { name: "Heart Plush ❤️", price: 249, img: "/crochet2.jpg" },
    { name: "Custom Name Charm ✨", price: 349, img: "/crochet3.jpg" },
  ]

  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">
        Our Cute Collection 🎀
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/60 backdrop-blur-xl border border-purple-200 rounded-3xl shadow-md p-4 text-center"
          >
            <Image
              src={p.img}
              alt={p.name}
              width={300}
              height={300}
              className="rounded-2xl mx-auto"
            />
            <h3 className="mt-4 font-semibold text-purple-600">
              {p.name}
            </h3>
            <p className="text-sm text-gray-500">₹{p.price}</p>

            <button className="mt-3 px-4 py-2 bg-purple-500 text-white rounded-full text-sm">
              Add to Cart 🛒
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}