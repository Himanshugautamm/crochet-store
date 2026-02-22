"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

type Product = {
  id: string
  name: string
  price: number
  image: string
  description: string
  show_on_home: boolean
}

export default function ProductCollection() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchFeaturedProducts()
  }, [])

  async function fetchFeaturedProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("show_on_home", true)
      .order("id", { ascending: false })

    if (!error && data) setProducts(data)
  }

  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">
        Our Cute Collection 🎀
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          No featured products yet 💜
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white/60 backdrop-blur-xl border border-purple-200 rounded-3xl shadow-md p-4 text-center"
            >
              <Image
                src={p.image}
                alt={p.name}
                width={300}
                height={300}
                className="rounded-2xl mx-auto object-cover"
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
      )}
    </section>
  )
}