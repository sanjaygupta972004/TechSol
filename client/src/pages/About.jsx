import React from 'react'

import { NavLink } from "react-router-dom";
import  Analytics  from "../components/Analytics";

export const About = () => {
  return (
    <>
      <main>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto grid grid-cols-2 gap-8">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold mb-4">Why Choose Us?</h1>
              <p className="text-base text-gray-700">
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p className="text-base text-gray-700">
                Customization: We understand that every business is unique.
                That's why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p className="text-base text-gray-700">
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p className="text-base text-gray-700">
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p className="text-base text-gray-700">
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="space-x-4">
                <NavLink to="/contact" className="btn btn-primary">Connect Now</NavLink>
                <button className="btn btn-secondary">learn more</button>
              </div>
            </div>

            <Analytics />

            <div className="flex justify-center items-center">
              <img
                src="/images/about.png"
                alt="coding buddies"
                className="w-64 h-auto"
              />
            </div>
          </div>
        </section>
      </main>


    </>
  );
};


export default About