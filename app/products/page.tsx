"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

type Product = {
  id: string
  name: string
  price: number
  image: string
  description: string
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    const { data } = await supabase.from("products").select("*")
    if (data) setProducts(data)
  }

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {products.map((item) => (
        <div key={item.id} className="p-4 border rounded-xl">
          <img src={item.image} className="rounded-lg" />
          <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  )
}