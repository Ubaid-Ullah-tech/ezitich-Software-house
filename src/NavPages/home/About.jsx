 import React, { useEffect } from 'react';
import ubaid from '../../assets/ubaid.jpg';
import { SiExpressvpn } from "react-icons/si";
import { IoStarSharp } from "react-icons/io5";
import { FcLandscape } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcButtingIn } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcNews } from "react-icons/fc";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5 } from "react-icons/ri";
// import Tfooter from '../../pages/Tfooter.jsx';


import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageViewer from './ImageAbout';
import AboutCounter from './AboutConut';

const About = () => {


  useEffect(() => {
    AOS.init({
      duration:2000
    });
  }, [])


  return (

    <>
    <div 
      className='flex flex-col lg:flex-row'
    >

     {/* Right Div */}
     <div 
      data-aos="fade-right"
      className="flex-1 flex items-center justify-center p-4">
         <ImageViewer/>
      </div>



      {/* Left Div */}
      <div className="flex-1 first-letter:items-center justify-center p-4">
       <h1 data-aos="fade-left" className='text-white pl-16 text-3xl p-10 flex justify-center items-center'>About <span className='text-white-700 ml-4'>EZILINE</span></h1>
        
        <p data-aos="fade-right" className='flex p-2'><span className='pr-3'><SiExpressvpn className='w-9 h-9'/></span> Eziline is an independent Pakistan Based company. Operating Since 2007 – Eziline has been in profit since the beginning. We are website specialists (web design / dynamic web solution / graphics design / Multimedia development). A close-knit team of 350+ designers Programmers System analysts and marketing executives. We seize each new opportunity and leverage it to the enhancement of overall development procedures.</p>


        <div className='flex flex-col lg:flex-row justify-between items-center mt-10 ml-16'>
         
            <div>
            <p data-aos="fade-left" className='flex p-2'><span className='pr-3'><IoStarSharp/></span> Quality deliverables</p>

            <p data-aos="fade-right" className='flex p-2'><span className='pr-3'><IoStarSharp/></span> Customer satisfaction</p>


            <p data-aos="fade-left" className='flex p-2'><span className='pr-3'><IoStarSharp/></span> Quick Service</p>
             <p data-aos="fade-right" className='flex p-2'><span className='pr-3'><IoStarSharp/></span> Free Online Support</p>

            </div>

               <div className='mt-10'>
               <p data-aos="fade-right" className='flex p-2'><span className='pr-3'><IoStarSharp/></span> Innovative Technologies</p>

               <p data-aos="fade-right" className='flex p-2'><span className='pr-3'><IoStarSharp/></span> Responsive Design</p>

                <p data-aos="fade-right" className='flex p-2'><span className='pr-3'><IoStarSharp/></span> Agile/Scrum Methodology</p>

                <p data-aos="fade-right" className='flex p-2'><span className='pr-3'><IoStarSharp/></span> Efficiency & Productivity.</p>
               </div>

        </div>
        <div className='mt-10 mx-10'>
                   <h1 className='text-center text-3xl'>ACHIEVEMENTS</h1>


                <div className='flex flex-col lg:flex-col'>
                <div>
                    <img 
                    className='w-32 h-32 rounded-full mb-6'
                    src={ubaid} alt="Error" />
                </div>

                  <div>
                    <p>Ismail Shah, the CEO of Eziline Software House Pvt Ltd, was honored with the Best Services Award in the IT sector by the President of Pakistan, Dr. Arif Alvi. This award recognizes his remarkable contributions to the technology industry in the country.</p>
                  </div>
                </div>
               </div>
            
      </div>
           
    </div>


       

    <div className=' bg-blue-gray-800 mt-10 pt-10 pb-10 px-10'>
         <h1 className='text-center text-white  pb-10 text-4xl'>Technology Is Transforming Every Industry Sector</h1>
            <p className='text-center text-2xl pb-10'>Are you embracing the power of digital transformation
            and beyond to stay competitive?</p>

                 {/* firt row  */}
               <div className='flex flex-col lg:flex-row justify-center item'>

                 <div className='text-center flex justify-center items-center'>
                   <p className='mb-6'>We deliver FinTech innovations that drive smarter financial management to support our customer needs</p>
                 </div>
           
                  <div className='lg:px-20 bg-blue-gray-900 h-32 mx-5 mb-5 flex flex-col justify-center items-center '>
                     <FcHome className='w-32 h-20'/>
                      <p>Financial services</p>
                  </div>

                    <div className='lg:px-20 h-32 mx-5 bg-blue-gray-900 mb-5 flex flex-col justify-center items-center'>
                     <FcCurrencyExchange className='w-32 h-20'/>
                     <p>Real estate</p>
                    </div>
      
                   <div className='text-center flex justify-center items-center'>
                    <p className='mb-6'>We empower realtors with advanced PropTech solutions to streamline and simplify real estate management</p>
                   </div>
            </div>
      </div>


      {/* second row  */}
      <div className=' bg-blue-gray-800 mt-10 pt-10 pb-10 px-10'>
         
               <div className='flex flex-col lg:flex-row justify-center item'>

                 <div className='text-center flex justify-center items-center'>
                   <p className='mb-6'>We help education organizations develop custom technology solutions focused on collaboration, data, and personalization</p>
                 </div>
           
                  <div className='lg:px-20 bg-blue-gray-900 h-32 mx-5 mb-5 flex flex-col justify-center items-center '>
                     <FcButtingIn className='w-32 h-20'/>
                      <p>Education</p>
                  </div>

                    <div className='lg:px-20 h-32 mx-5 bg-blue-gray-900 mb-5 flex flex-col justify-center items-center'>
                     <FcCurrencyExchange className='w-32 h-20'/>
                     <p>Nonprofits</p>
                    </div>
      
                   <div className='text-center flex justify-center items-center'>
                    <p className='mb-6'>We help nonprofit organizations streamline data collection, stay compliant, and maximize engagement</p>
                   </div>
            </div>
      </div>


      {/* third row  */}

      <div className=' bg-blue-gray-800 mt-10 pt-10 pb-10 px-10'>
               <div className='flex flex-col lg:flex-row justify-center item'>

                 <div className='text-center flex justify-center items-center'>
                   <p className='mb-6'>Enabling manufacturers to have greater control and make better decisions throughout production using innovative technologiess</p>
                 </div>
           
                  <div className='lg:px-20 bg-blue-gray-900 h-32 mx-5 mb-5 flex flex-col justify-center items-center '>
                     <FcLandscape className='w-32 h-20'/>
                      <p>Manufacturing</p>
                  </div>

                    <div className='lg:px-20 h-32 mx-5 bg-blue-gray-900 mb-5 flex flex-col justify-center items-center'>
                     <FcNews className='w-32 h-20'/>
                     <p>Retail</p>
                    </div>
      
                   <div className='text-center flex justify-center items-center'>
                    <p className='mb-6'>Strengthen your customer relationships with engaging brand experiences powered by innovative technologies</p>
                   </div>
            </div>
      </div>

           {/* two divs  */}
           <div className='flex flex-col lg:flex-row mt-10 mb-10 justify-center items-center'>

               {/* left div  */}
               <div className='w-1/2 flex flex-col gap-3'>

                    {/* 1 div  */}
                    <div className='px-10 py-2 border border-1px mx-2'>
                      <p className='flex'> <span><RiNumber1 className='border mr-3 rounded-full w-6 h-6 border-yellow-400 '/></span> Eziline is an independent Pakistan Based company, We are website specialists Operating over 4 years.</p>
                    </div>

                    <div className='px-10 py-2 border border-1px mx-2'>
                      <p className='flex'> <span><RiNumber2 className='border mr-3 rounded-full w-6 h-6 border-yellow-400 '/></span> Eziline is an independent Pakistan Based company, We are website specialists Operating over 4 years.</p>
                    </div>

                    <div className='px-10 py-2 border border-1px mx-2'>
                      <p className='flex'> <span><RiNumber3 className='border mr-3 rounded-full w-6 h-6 border-yellow-400 '/></span> Eziline is an independent Pakistan Based company, We are website specialists Operating over 4 years.</p>
                    </div>

                    <div className='px-10 py-2 border border-1px mx-2'>
                      <p className='flex'> <span><RiNumber4 className='border mr-3 rounded-full w-6 h-6 border-yellow-400 '/></span> Eziline is an independent Pakistan Based company, We are website specialists Operating over 4 years.</p>
                    </div>

                    <div className='px-10 py-2 border border-1px mx-2'>
                      <p className='flex'> <span><RiNumber5 className='border mr-3 rounded-full w-6 h-6 border-yellow-400 '/></span> Eziline is an independent Pakistan Based company, We are website specialists Operating over 4 years.</p>
                    </div>
               </div>

               {/* right div  */}
               <div className='flex flex-col gap-3 justify-center items-center w-1/2'>
                   <h1 className='pt-5 text-3xl'>STRENTHS & SKILLS</h1>
                   <p className='px-5 pb-5 pt-5'>Eziline is an independent Pakistan Based company, We are website specialists (web design / dynamic web solution/graphics design / Multimedia development), Operating over 4 years – Eziline has been in profit since the beginning,</p>
              
                  <p className='bg-blue-400 rounded-full w-56 p-1 px-4'>Databases 76% </p>
                  <p className='bg-green-400 rounded-full w-72 p-1 px-4'>Programming 87%
                  </p>
                  <p className='bg-pink-400 rounded-full w-80 p-1 px-4'>Usability 92% </p>
                  <p className='bg-orange-400 rounded-full w-96 p-1 px-4'>Design 99%
                  </p>
               </div>
           </div>

           <div>
            <AboutCounter/>
            {/* <Tfooter/> */}
           </div>

      </>
  );
};

export default About;

