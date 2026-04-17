import React from "react";

const Card = ({ car }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition">

      <img
        src={car.img}
        alt={car.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          {/* FIXED COLOR */}
          <h2 className="text-lg font-bold text-gray-900">
            {car.name}
          </h2>

          <span className="text-blue-600 font-semibold text-sm">
            ₹{car.price}/week
          </span>
        </div>

        <p className="text-gray-500 text-sm mb-3">
          {car.description}
        </p>

        <div className="grid grid-cols-3 gap-2 text-center text-xs text-gray-600 border-t pt-3">
          <div>
            <p className="font-semibold text-gray-900">{car.model}</p>
            <p>Model</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{car.modelyear}</p>
            <p>Year</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{car.capacity}</p>
            <p>Seats</p>
          </div>
        </div>

        <div className="mt-3 flex justify-between items-center text-xs text-gray-500 border-t pt-3">
          <span>⛽ {car.avg} km/l</span>

          <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white text-xs px-4 py-1.5 rounded-lg transition">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;