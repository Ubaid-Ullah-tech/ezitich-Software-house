import React, { useEffect } from 'react';
import { FcSportsMode } from "react-icons/fc";
import Example from './Vedios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ubaid = () => {


  useEffect(() => {
    AOS.init({
      duration:2000
    });
  }, [])


  return (
    <div 
      className='flex flex-col lg:flex-row'
    >
      {/* Left Div */}
      <div className="flex-1 first-letter:items-center justify-center p-4">
       <h1 data-aos="fade-left" className='text-white pl-16 text-3xl p-10 flex justify-center items-center'>About <span className='text-blue-600 ml-4'>me</span></h1>
        <p data-aos="fade-right" className='flex p-2'><span className='pr-3'><FcSportsMode/></span> Eziline is an independent Pakistan Based company</p>
        <p data-aos="fade-left" className='flex p-2'><span className='pr-3'><FcSportsMode/></span> Operating Since 2007 – Eziline has been in profit since the beginning</p>
        <p data-aos="fade-right" className='flex p-2'><span className='pr-3'><FcSportsMode/></span> We are website specialists (web design / dynamic web solution / graphics design / Multimedia development)</p>
        <p data-aos="fade-left" className='flex p-2'><span className='pr-3'><FcSportsMode/></span> Programmers</p>
        <p data-aos="fade-right" className='flex p-2'><span className='pr-3'><FcSportsMode/></span> System analysts and marketing executives</p>
      </div>

      {/* Right Div */}
      <div 
      data-aos="fade-right"
      className="flex-1 flex items-center justify-center p-4">
      
        <Example/>
        {/* <img 
          src={ubaid} 
          className="w-32 h-32 md:w-64 md:h-64 object-cover" 
          alt="Ubaid" 
        /> */}
      </div>
    </div>
  );
};

export default Ubaid;
