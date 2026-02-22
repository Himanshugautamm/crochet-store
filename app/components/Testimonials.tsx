"use client"

export default function Testimonials() {
  return (
    <section className="py-20 text-center bg-purple-100">
      <h2 className="text-3xl font-bold text-purple-700 mb-10">
        Loved by Customers 💖
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {["So cute 😭", "Amazing quality 💜", "Perfect gift 🎁"].map((t, i) => (
          <div key={i} className="p-6 bg-white rounded-3xl shadow">
            <p className="text-purple-600">“{t}”</p>
            <span className="text-sm text-gray-400">Happy Buyer</span>
          </div>
        ))}
      </div>
    </section>
  )
}