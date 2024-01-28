import React, { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'
import { useAuth } from '../../store/Auth'



const AdminUser = () => {
  const {authorization} = useAuth()
  const[users, setUsers] = useState([])
  const[loading, setLoading] = useState(false)


  const getUsers = async() => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:5050/api/v/admin/users',{
        headers:{
          Authorization:`${authorization}`
        }
      })
      const userData = await response.data
      setUsers(userData.data)
      setLoading(false)
    } catch (error) {
      console.error("Error during getUsers data",error);
      throw error
    }
  }


  useEffect(() => {
  getUsers()
  },[])


  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Users</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Full Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="py-2 px-4">{user.fullName}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.phoneNumber}</td>
                <td className="py-2 px-4">  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminUser