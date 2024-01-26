import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { serviceImg } from '../images/image'

const Service = () => {
  
    const handleNavigate = () => {
      window.location.href = '/'
    }
 
 const [service, setService] = useState([])


 const fetchService = async () => {
  try {
    const response =  await axios.get('http://localhost:5050/api/v/services/getServices')
    setService(response.data.data)
  } catch (error) {
    console.log(error)
  }
 }

  useEffect(() => {
    fetchService()

  },[])

  console.log(service)  


  return (
    <div className="container mx-auto">
    <h1 className="text-center text-3xl font-bold my-8">Our Services</h1>
    <div className="flex flex-wrap -mx-4">
      {service.map((item) => (
        <div key={item._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8">
          <div className="bg-white rounded-md overflow-hidden shadow-md">
            <img src={serviceImg} className="w-full h-40 object-cover" alt="Service" />
            <div className="p-4">
              <h5 className="text-lg font-semibold mb-2">{item.service}</h5>
              <p className="text-gray-700 mb-4">{item.price}</p>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none" onClick={handleNavigate}>
                Go HomePage
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default Service