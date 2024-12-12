import React, { useEffect } from 'react';
import { FcFactory, FcPositiveDynamic, FcOvertime } from "react-icons/fc";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ThreeDiv = () => {

  useEffect(()=>{
    AOS.init({
      duration:2000
    },[])
  })

  return (
    <>
      <h1
      data-aos="fade-right"
      className='text-3xl justify-center items-center text-center text-blue-gray-900 bg-blue-gray-600 pt-10'>Our Commitments to Excellence</h1>
    <div className="flex flex-wrap lg:flex-row md:flex-col sm:flex-col gap-4 pt-10 pb-10 px-2 bg-blue-gray-600 lg:items-center lg:justify-center">
      {/* Left div */}
      <div 
      data-aos="fade-down"
      className="flex flex-col lg:w-96 md:w-full sm:w-full h-72 bg-green-400 p-5 justify-center items-center gap-1">
        <FcFactory className="w-32 h-32" />
        <h2 className="text-xl font-bold">FLEXIBLE PRICE</h2>
        <p className="text-center">
          Our pricing plan is created by our clients. Market Competitive.
        </p>
      </div>

      {/* Center div */}
      <div 
      data-aos="fade-up"
      className="flex flex-col lg:w-96 md:w-full sm:w-full h-72 bg-green-400 p-5 justify-center items-center gap-4">
        <FcPositiveDynamic className="w-32 h-32" />
        <h2 className="text-xl font-bold">QUALITY WORK</h2>
        <p className="text-center">
          Quality assurance & testing before every project delivery.
        </p>
      </div>

      {/* Right div */}
      <div 
      data-aos="fade-down"
      className="flex flex-col lg:w-96 md:w-full sm:w-full h-72 bg-green-400 p-5 justify-center items-center gap-4">
        <FcOvertime className="w-32 h-32" />
        <h2 className="text-xl font-bold">QUICK DELIVERY</h2>
        <p className="text-center">
          40 days initial delivery on custom mega projects.
        </p>
      </div>
    </div>
    </>
  );
};

export default ThreeDiv;











// import React from 'react'
// import { FcFactory } from "react-icons/fc";
// import { FcPositiveDynamic } from "react-icons/fc";
// import { FcOvertime } from "react-icons/fc";

// const ThreeDiv = () => {
//   return (
//     <div className='flex lg:flex-row md:flex-col gap-2 pt-10 pb-10 px-2 bg-blue-gray-600'>
//          {/* left div  */}
//          <div className= 'flex flex-col w-1/3 h-72 bg-green-400 p-5 justify-center items-center gap-4'>
//             <FcFactory className='w-32 h-32'/>
            
//             <h2>FLEXIBLE PRICE</h2>
//             <p className='text-center'>Our pricing plan is created by our clients. Market Competitive.</p>
//          </div>

//          {/* center div  */}
//          <div className='flex flex-col w-1/3 h-72 bg-green-400 p-5 justify-center items-center gap-4'>
//             <FcPositiveDynamic className='w-32 h-32'/>
//             <h2>QUALITY WORK</h2>
//             <p className='text-center'>Quality assurance & testing befoe every project delivery.</p>

//          </div>
//          {/* right div  */}
//           <div className='flex flex-col w-1/3 h-72 bg-green-400 p-5 justify-center items-center gap-4'>
//                <FcOvertime className='w-32 h-32'/>
//             <h2>QUICK DELIVERY</h2>
//             <p className='text-center'>40 days initial delivery on custom mega projects.</p>
//           </div>

//     </div>
//   )
// }

// export default ThreeDiv
