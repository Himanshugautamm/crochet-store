"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleRegister() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) return alert(error.message)
    alert("Registration successful! Please login.")
    router.push("/login")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Register 🧶</h1>

      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded w-72"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded w-72"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleRegister}
        className="bg-pink-500 text-white px-6 py-2 rounded"
      >
        Register
      </button>
    </div>
  )
}