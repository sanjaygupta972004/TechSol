import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import { AuthProvider } from "./store/Auth.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
    <App />
    <ToastContainer
       position="top-right"
       autoClose={2000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark"
/>
  </React.StrictMode>,
  </AuthProvider>
)
