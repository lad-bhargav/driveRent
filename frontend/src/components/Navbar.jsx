import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600" onClick={()=>navigate("/home")} style={{cursor: "pointer"}}>
          DriveRent
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          <a
            href="/home"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Home
          </a>

          <a
            href="/mybookings"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            My Bookings
          </a>

          <a
            href="/profile"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;