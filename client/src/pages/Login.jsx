import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/Auth';
import {toast} from 'react-toastify'

const Login = () => {
  const navigate = useNavigate();
  const { localStoreAccessToken,localStoreRefreshToken } = useAuth();

  //console.log(localStoreToken);

  const initialState = {
    email: '',
    password: ''
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
    const response  = await fetch("http://localhost:5050/api/v/users/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    })

    const jsonResponse = await response.json()

     //console.log(jsonResponse)

     //console.log(jsonResponse.extraDetails[0]);
 
    if(response.ok){
       toast.success("Login Successful")
       localStoreAccessToken(jsonResponse.data.accessToken)
       localStoreRefreshToken(jsonResponse.data.refreshToken)

       setUser({
        email:"",
        password:""
      })

      navigate('/')
 
    }else{
      toast.error(jsonResponse.extraDetails[0])
    }

  } catch (error) {
    console.log(error.message);
    throw error;
  }
  
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl mb-4 underline">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="off"
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
              autoComplete="off"
              className="mt-1 p-2 w-full border rounded-md"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Login
          </button>

          <p className="mt-4 text-center">
            Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
