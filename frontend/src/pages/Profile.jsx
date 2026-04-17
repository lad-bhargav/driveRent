import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const email = localStorage.getItem("email");
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.post("http://localhost:8080/profile", {
          email,
        });
        setProfile(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getProfile();
  }, [email]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6 text-center">
        
        {/* Profile Image */}
        <img
          src={
            profile.profilepic ||
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
          alt="profile"
          className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-blue-500"
        />

        {/* Username */}
        <h2 className="text-2xl font-bold mt-4">
          {profile.username || "User"}
        </h2>

        {/* Email */}
        <p className="text-gray-500">{profile.email || email}</p>

        {/* Divider */}
        <div className="my-4 border-t"></div>

        {/* Info Box */}
        <div className="text-left space-y-2 text-gray-700">
          <p>
            <b>Username:</b> {profile.username}
          </p>
          <p>
            <b>Email:</b> {profile.email}
          </p>
        </div>

        {/* Edit Button */}
        <button className="mt-6 cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" onClick={()=> navigate(`/edit-profile/${profile._id}`)}>
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;