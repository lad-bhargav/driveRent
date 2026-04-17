import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Booking from './pages/Booking.jsx';
import MyBookings from './pages/MyBookings.jsx';
import Profile from './pages/Profile.jsx';
import EditProfile from './pages/EditProfile.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />

      </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)