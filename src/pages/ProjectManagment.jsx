import React, { useEffect } from 'react';
import { FcMindMap } from "react-icons/fc";
import eziline from '../assets/ezilineee.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectManagement = () => {
   
  useEffect(() =>{
    AOS.init({
      duration:2000
    });
  },[])
  
  
  
  return (
    <div 
      className="flex flex-col lg:flex-row relative  lg:mb-1"
      style={{
        // background: `linear-gradient(to bottom, #a8dadc 50%, #ffffff 50%)`,
        // height: '100vh',
        // marginBottom:'62%'
      }}
    >
      {/* Wave Shape at the Top */}
      <div 

        className="absolute top-0 left-0 w-full"
        style={{
          height: '100px',
          // background: 'white',
          clipPath: 'polygon(0 100%, 50% 0, 100% 100%)', // Creates the mountain-like wave
        }}
      ></div>

      {/* Left Div */}
      <div 
      data-aos="fade-right"
      className="flex-1 flex items-center justify-center p-4">
        <img src={eziline} alt="Error" />
      </div>

      {/* Right Div */}
      <div 
      data-aos="fade-left"
      className="flex-1 items-center justify-center p-4 text-gray-800">
        <br />
        <br />
        <h1 className="text-3xl p-10 flex justify-center items-center">
          Our Project Management
        </h1>
        <p className="flex p-2">
          <span className="pr-3">
            <FcMindMap />
          </span>
          Project and Milestone tracking
        </p>
        <p className="flex p-2">
          <span className="pr-3">
            <FcMindMap />
          </span>
          Task management with SMS/email notification
        </p>
        <p className="flex p-2">
          <span className="pr-3">
            <FcMindMap />
          </span>
          24/7 online service & Support.
        </p>
        <p className="flex p-2">
          <span className="pr-3">
            <FcMindMap />
          </span>
          Billing/invoicing transparent management.
        </p>
        <p className="flex p-2">
          <span className="pr-3">
            <FcMindMap />
          </span>
          Discussion board for project management.
        </p>
        <p className="flex p-2">
          <span className="pr-3">
            <FcMindMap />
          </span>
          HR/ Payroll & Complete office management.
        </p>
        <p className="flex p-2">
          <span className="pr-3">
            <FcMindMap />
          </span>
          Cloud-based & Robust technology.
        </p>

        <div 
        data-aos="fade-left"
        className='grid lg:grid-cols-1 md:grid-cols-2 gap-5 mt-7'>
          <button className='border border-blue-50 p-1 pl-5 pr-5 text-white hover:bg-blue-gray-50 hover:text-black'>STAFF</button>
          <button className='border border-blue-50 p-1 pl-5 pr-5 text-white hover:bg-blue-gray-50 hover:text-black'>INTERN</button>
          <button className='border border-blue-50 p-1 pl-5 pr-5 text-white hover:bg-blue-gray-50 hover:text-black'>AGENT</button>
          <button className='border border-blue-50 p-1 pl-5 pr-5 text-white hover:bg-blue-gray-50 hover:text-black'>CLIENT</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;


















// import React from 'react';
// import { FcMindMap } from "react-icons/fc";
// import eziline from '../assets/ezilineee.jpg'

// const ProjectManagment = () => {
//   return (
//     <div 
//       className='flex flex-col lg:flex-row'
//     >
      
//       {/* left Div */}
//       <div className="flex-1 flex items-center justify-center p-4">
        
//       <img src={eziline} alt="Error" />
//       </div>

//       {/* right Div */}
//       <div className="flex-1 first-letter:items-center justify-center p-4">
//        <h1 className='text-white pl-16 text-3xl p-10 flex justify-center items-center'>Our Project Management</h1>
//         <p className='flex p-2'><span className='pr-3'><FcMindMap/></span> Project and Milestone tracking</p>
//         <p className='flex p-2'><span className='pr-3'><FcMindMap/></span> Task management with SMS/email notification</p>
//         <p className='flex p-2'><span className='pr-3'><FcMindMap/></span> 24/7 online service & Support.</p>
//         <p className='flex p-2'><span className='pr-3'><FcMindMap/></span> Billing/invoicing transparent management.</p>
//         <p className='flex p-2'><span className='pr-3'><FcMindMap/></span> Discussion board for project management.</p>
//         <p className='flex p-2'><span className='pr-3'><FcMindMap/></span> HR/ Payroll & Complete office management.</p>
//         <p className='flex p-2'><span className='pr-3'><FcMindMap/></span> Cloud-based & Robust technology.</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectManagment;
