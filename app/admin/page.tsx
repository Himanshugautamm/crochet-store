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

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: ""
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    const { data } = await supabase.from("products").select("*").order("id", { ascending: false })
    if (data) setProducts(data)
  }

  async function uploadImage(): Promise<string | null> {
    if (!imageFile) return preview || null

    const fileName = `${Date.now()}-${imageFile.name}`

    const { error } = await supabase.storage
      .from("product-images")
      .upload(fileName, imageFile)

    if (error) {
      alert(error.message)
      return null
    }

    const { data } = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName)

    return data.publicUrl
  }

  async function handleSubmit() {
    if (!form.name || !form.price) return alert("Fill required fields")

    const imageUrl = await uploadImage()

    if (editingId) {
      await supabase
        .from("products")
        .update({
          name: form.name,
          price: Number(form.price),
          image: imageUrl,
          description: form.description
        })
        .eq("id", editingId)
    } else {
      await supabase.from("products").insert({
        name: form.name,
        price: Number(form.price),
        image: imageUrl,
        description: form.description
      })
    }

    resetForm()
    fetchProducts()
  }

  function editProduct(p: Product) {
    setEditingId(p.id)
    setForm({
      name: p.name,
      price: String(p.price),
      description: p.description || ""
    })
    setPreview(p.image)
  }

  async function deleteProduct(id: string) {
    if (!confirm("Delete this product?")) return
    await supabase.from("products").delete().eq("id", id)
    fetchProducts()
  }

  function resetForm() {
    setForm({ name: "", price: "", description: "" })
    setImageFile(null)
    setPreview(null)
    setEditingId(null)
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10 text-purple-700">
      <h1 className="text-4xl font-bold">Admin Dashboard 🛠️</h1>

      {/* Add / Edit Product */}
      <div className="border p-6 rounded-xl space-y-4 bg-white shadow">
        <h2 className="text-2xl font-semibold">
          {editingId ? "Edit Product" : "Add New Product"}
        </h2>

        <input
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded"
        />

        <input
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full border p-2 rounded"
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border p-2 rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) {
              setImageFile(file)
              setPreview(URL.createObjectURL(file))
            }
          }}
        />

        {preview && (
          <img src={preview} className="w-32 h-32 object-cover rounded" />
        )}

        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="bg-pink-500 text-white px-6 py-2 rounded"
          >
            {editingId ? "Update Product" : "Add Product"}
          </button>

          {editingId && (
            <button
              onClick={resetForm}
              className="bg-gray-400 text-white px-6 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Inventory List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Inventory 📦</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {products.map((p) => (
            <div key={p.id} className="border p-4 rounded-xl flex gap-4 items-center bg-white shadow">
              {p.image && (
                <img src={p.image} className="w-20 h-20 object-cover rounded" />
              )}

              <div className="flex-1">
                <h3 className="font-semibold">{p.name}</h3>
                <p>₹{p.price}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => editProduct(p)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}