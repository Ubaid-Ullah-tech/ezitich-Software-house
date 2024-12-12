import React, { useEffect } from 'react';
import { FaGlobe, FaMobileAlt, FaCloud, FaRocket, FaBullhorn } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import mobileImage from "../assets/mobile.jpg"; // Add your mobile image path here

import AOS from 'aos';
import 'aos/dist/aos.css';


const ServicesSplit = () => {

  useEffect(()=>{
    AOS.init({
      duration:2000
    });
  },[])
  const services = [
    {
      icon: <FaGlobe className="text-4xl text-blue-600" />,
      title: "Website Development",
      description:
        "Developing a website is fun and anyone can do this, but very few understand how to build websites.",
    },
    {
      icon: <AiOutlineAppstore className="text-4xl text-green-600" />,
      title: "Web App Development",
      description:
        "Web applications have been changing the ways businesses operate across the globe.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-yellow-600" />,
      title: "Mobile App Development",
      description:
        "In this modern era, businesses should not ignore having a business mobile app.",
    },
    {
      icon: <FaCloud className="text-4xl text-purple-600" />,
      title: "Cloud Services",
      description:
        "Modernize your workflow and improve your application’s performance by migrating to the Cloud.",
    },
    {
      icon: <FaBullhorn className="text-4xl text-pink-600" />,
      title: "Digital Marketing",
      description:
        "Are you looking for ways to make your pitch inspirational to a social media audience?",
    },
    {
      icon: <FaRocket className="text-4xl text-red-600" />,
      title: "Startup Solutions",
      description:
        "We help entrepreneurs turn their vision into reality and guide them throughout their business life cycle.",
    },
  ];

  return (
    <div className="bg-gray-600 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Services */}
        <div 
        data-aos="fade-left"
        className="flex-1 flex flex-col items-start">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="flex items-start mb-10 px-4 lg:pl-8"
            >
              <div className="flex items-center justify-center bg-white border-4 border-blue-500 rounded-full w-12 h-12">
                {service.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-100">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div
        data-aos="fade-up"
        className="flex items-center justify-center my-8 lg:my-0 lg:mx-8">
          <img src={mobileImage} alt="Mobile Device" className="w-48 h-auto" />
        </div>

        {/* Right Services */}
        <div 
        data-aos="fade-down"
        className="flex-1 flex flex-col items-start">
          {services.slice(3).map((service, index) => (
            <div
              key={index}
              className="flex items-start mb-10 px-4 lg:pr-8"
            >
              <div className="flex items-center justify-center bg-white border-4 border-blue-500 rounded-full w-12 h-12">
                {service.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-100">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSplit;