import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);
  const useremail = localStorage.getItem("email");

  useEffect(() => {
    const getMyBookings = async () => {
      try {
        const res = await axios.post("http://localhost:8080/mybookings", {
          useremail,
        });
        setMyBookings(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getMyBookings();
  }, [myBookings]);

  const handleCancelBooking = async (id,carname) => {
    try {
      await axios.post(`http://localhost:8080/cancelbooking/${id}`,{
        carname
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        My Bookings
      </h1>

      {myBookings.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          No bookings found 🚗
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {myBookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              
              {/* Car Image */}
              <img
                src={booking.carimg}
                alt={booking.carname}
                className="h-48 w-full mt-5 object-contain rounded-lg bg-gray-50"
              />

              {/* Details */}
              <div className="p-4 space-y-2">
                
                <h2 className="text-xl font-bold text-gray-800">
                  {booking.carname}
                </h2>

                <p className="text-blue-600 font-semibold">
                  ₹{booking.price}/week
                </p>

                <p className="text-sm text-gray-600">
                  {booking.model} • {booking.modelyear}
                </p>

                <p className="text-sm text-gray-600">
                  Seats: {booking.capacity} | Mileage: {booking.avg} km/l
                </p>

                {/* User Info */}
                <div className="text-sm text-gray-700 border-t pt-2 mt-2">
                  <p>📞 {booking.userphNum}</p>
                  <p>📍 {booking.useraddress}</p>
                  <p>💳 {booking.mop}</p>
                </div>

                {/* Status */}
                <div className="pt-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                    Booked
                  </span>
                </div>

                {/* Cancel Button */}
                <button
                  onClick={() => handleCancelBooking(booking._id,booking.carname)}
                  className="w-full cursor-pointer mt-3 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Cancel Booking
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;