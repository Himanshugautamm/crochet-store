"use client"
import { motion } from "framer-motion"

export default function QuickViewModal({ product, onClose }: any) {
  if (!product) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <motion.div 
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-6 rounded-3xl max-w-md text-center"
      >
        <img src={product.image} className="rounded-2xl mb-4" />
        <h2 className="text-xl font-bold text-purple-600">{product.name}</h2>
        <p className="text-gray-500">₹{product.price}</p>

        <button 
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-full"
        >
          Close
        </button>
      </motion.div>
    </div>
  )
}