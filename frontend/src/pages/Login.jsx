import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const onSubmitFcn = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8080/login", { email, password })
      if (res.data.message === "Logined") {
        localStorage.setItem("email", email)
        localStorage.setItem("username", res.data.username)
        localStorage.setItem("userId", res.data.id)
        localStorage.setItem("logined", "true")
        navigate("/home", { replace: true })
      } else {
        alert("Invalid email or password")
      }
    } catch (err) {
      alert("Something went wrong. Try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">

        <h2 className="text-2xl font-bold text-center !text-black mb-1">Car Rentals</h2>
        <p className="text-center !text-black text-sm mb-6">Sign in to your account</p>

        <form onSubmit={onSubmitFcn} className="space-y-4 mt-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg text-sm transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-7">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">sign-up</a>
        </p>
      </div>
    </div>
  )
}

export default Login