import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card.jsx'


const Home = () => {
  const [allCars, setAllCars] = useState([])

  useEffect(() => {
    const getAllCars = async () => {
      try {
        const res = await axios.get('http://localhost:8080/cars')
        setAllCars(res.data)
      } catch (error) {
        console.error('Error fetching cars:', error)
      }
    }
    getAllCars()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-black mb-8">Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCars.map((car) => (
          car.isBooked ? <></> : <Card key={car._id} car={car} />
        ))}
      </div>
    </div>
  )
}

export default Home