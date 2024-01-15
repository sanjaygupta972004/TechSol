
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { logo2 } from '../images/image';

const Register = () => {

  const navigate = useNavigate()

  const initialState = {
    fullName: '',
    email: '',
    password: '',
    phoneNumber: ''
  };

  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preValue) => ({
      ...preValue,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response =  await fetch("http://localhost:5050/api/v/users/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      })
      const data = await response.json()
     // console.log(data.extraDetails[0]);

      if(response.ok){
        setUser(initialState)
        toast.success(data.message)
        navigate('/login')
      }else{
        toast.error(data.extraDetails ? data.extraDetails:data.message)
      }
      
     } catch (error) {
       alert(error.message);
      throw error;
     }
    
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <main className="container mx-auto px-4">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <img src= {logo2} alt="logo" className="w-auto h-auto rounded-lg " />
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className='text-2xl mb-4'>Registration Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">fullName</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  required
                  autoComplete='off'
                  className="mt-1 p-2 w-full border rounded-md"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>

               <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  autoComplete='off'
                  className="mt-1 p-2 w-full border rounded-md"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  autoComplete='off'
                  className="mt-1 p-2 w-full border rounded-md"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter your Number"
                  required
                  autoComplete='off'
                  className="mt-1 p-2 w-full border rounded-md"
                  value={user.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Register
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Register;
