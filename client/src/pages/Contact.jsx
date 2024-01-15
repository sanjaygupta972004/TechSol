import { useState } from "react";
import {useAuth} from "../store/Auth"; 
import { contactImage } from "../images/image";
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify";

 const Contact = () => {
  const navigate = useNavigate();

  const {userProfileData} = useAuth()

  const [user, setUser] = useState(true)

  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  if(userProfileData && user){
     setContact({
      fullName: userProfileData.fullName,
      email: userProfileData.email,
      message: "",
     })
      setUser(false);
  }

 //console.log(contact)

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5050/api/v/contacts/contact",{
        method:"POST",
        headers:{
          "Content-Type": 'application/json'
        },
        body:JSON.stringify(contact)
      })

      const data = await response.json()

      console.log(data);

      if(response.ok){
        toast.success("Contact form submitted successfully")
        setContact({
          fullName:"",
          email:"",
          message:""
        })
        navigate("/")
      }
    } catch (error) {
      toast.warn("contact details already submitted")
      console .error("Error during submit contact form", error.message );
      throw new Error(error.message)  
    }

  };

  return (
    <section className="bg-gray-200 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold mb-8 underline">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
          <img src= {contactImage} alt="We are always ready to help" className="w-auto h-auto" />
          </div>

          <div className="bg-white p-8 rounded shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-lg font-medium text-gray-700">fullName</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="off"
                  className="mt-1 p-2 w-full border rounded-md"
                  value={contact.fullName}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  className="mt-1 p-2 w-full border rounded-md"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  className="mt-1 p-2 w-full border rounded-md"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};


export default Contact