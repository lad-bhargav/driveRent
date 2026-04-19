import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilepic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  let onSubmitFcn = async (e) => {
    e.preventDefault();

    try {
      const SignupAPI = await axios.post("http://localhost:8080/sign-up", {
        username,
        password,
        email,
        profilepic
      });

      if (SignupAPI.data.message === "usercreated") {
        navigate("/", { replace: true });
      } else {
        alert("Sign-up failed");
      }
    } catch (err) {
      console.error(err);
      alert("Fill Proper Details Please Try Again");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">

        <h2 className="text-2xl font-bold text-center !text-black mb-1">Car Rentals</h2>
        <p className="text-center !text-black text-sm mb-6">Sign up to your account</p>

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
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="profilepic"
            value={profilepic}
            onChange={(e) => setProfilePic(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg text-sm transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-7">
          have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">login</a>
        </p>
      </div>
    </div>
  )
}

export default Signup