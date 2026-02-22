"use client"

export default function InstagramPreview() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold text-purple-600 mb-8">
        Follow us on Instagram 📸
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {[1,2,3,4].map(i => (
          <div key={i} className="h-40 bg-purple-200 rounded-2xl"></div>
        ))}
      </div>
    </section>
  )
}