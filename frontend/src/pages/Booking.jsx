import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Booking() {
  const [car, setCar] = useState({});
  const [form, setForm] = useState({
    userphNum: "",
    useraddress: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const useremail = localStorage.getItem("email");

 const bookingCar = async () => {
  try {
    const res = await axios.post(
      `http://localhost:8080/booking/${id}`,
      {
        useremail: useremail,
        carname: car.name,
        carimg: car.img,
        price: car.price,
        model: car.model,
        modelyear: car.modelyear,
        capacity: car.capacity,
        avg: car.avg,

        userphNum: form.userphNum,
        useraddress: form.useraddress,
        mop: "Cash on Delivery",
      }
    );
    if(!res)return;

    navigate("/mybookings");
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
};

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cars/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      <div className="bg-white rounded-xl shadow-md max-w-4xl w-full p-6">
        
        {/* Image */}
        <div className="bg-gray-50 rounded-lg flex justify-center items-center h-64 mb-6">
          <img
            src={car.img}
            alt={car.name}
            className="h-full object-contain rounded-lg"
          />
        </div>

        {/* Title + Price */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold">{car.name}</h2>
          <span className="text-blue-600 font-semibold">
            ₹{car.price}/week
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-5">{car.description}</p>

        {/* Details */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-6">
          <p><b>Model:</b> {car.model}</p>
          <p><b>Year:</b> {car.modelyear}</p>
          <p><b>Seats:</b> {car.capacity}</p>
          <p><b>Mileage:</b> {car.avg} km/l</p>
        </div>

        {/* Booking Form */}
        <div className="space-y-4 mb-6">
          
          {/* Phone */}
          <input
  type="tel"
  name="userphNum"
  placeholder="Enter phone number"
  value={form.userphNum}
  onChange={(e) =>
    setForm({ ...form, userphNum: e.target.value })
  }
  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

          {/* Address */}
          <textarea
            name="useraddress"
            placeholder="Enter your address"
            value={form.useraddress}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Payment Mode */}
          <input
            type="text"
            value="Cash on Delivery"
            disabled
            className="w-full bg-gray-100 border rounded-lg px-4 py-2 text-gray-500 cursor-not-allowed"
          />
        </div>

        {/* Button */}
        <button
         onClick={bookingCar}
          disabled={car.isBooked}
          className={`w-full py-3 cursor-pointer rounded-lg text-white ${
            car.isBooked
              ? "bg-gray-400"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {car.isBooked ? "Already Booked" : "Book This Car"}
        </button>

      </div>
    </div>
  );
}