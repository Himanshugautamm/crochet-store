"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function Login() {
  const [email, setEmail] = useState("")

  async function login() {
    await supabase.auth.signInWithOtp({ email })
    alert("Check your email for login link")
  }

  return (
    <div className="p-10">
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={login}
        className="ml-2 bg-pink-500 text-white px-4 py-2"
      >
        Login
      </button>
    </div>
  )
}