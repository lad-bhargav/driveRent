import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const email = localStorage.getItem("email");

  // Load old data
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.post(`http://localhost:8080/profile`,{
            email: email
        });

        setUsername(res.data.username || "");
        setPassword(res.data.password || "");
        setProfilepic(res.data.profilepic || "");
      } catch (e) {
        console.log(e);
      }
    };

    getProfile();
  }, [email]);

  const editProfile = async () => {
    try {
      await axios.post(`http://localhost:8080/profile/${id}`, {
        username,
        password,
        profilepic,
      });

      navigate("/profile");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Edit Profile
        </h2>

        {/* Profile Preview */}
        <div className="flex justify-center mb-4">
          <img
            src={
              profilepic ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
            alt="profile"
          />
        </div>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Profile Pic */}
        <input
          type="text"
          placeholder="Profile Image URL"
          value={profilepic}
          onChange={(e) => setProfilepic(e.target.value)}
          className="w-full mb-5 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Save Button */}
        <button
          onClick={editProfile}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;