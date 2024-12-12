import React from 'react'
import ubaid from '../assets/ubaid.jpg'
const Tfooter = () => {
    return (
        <div className='flex flex-col lg:flex-row w-full pt-20 pb-20'>
            <div className='px-10 '>
                <h3 className='text-3xl pb-6 '>About</h3>
                <p className=''>Tech House Having 100+ Quality Products and Innovations at national and international markets. Rated as Best Software House in Region</p>
                <div className='flex gap-6 pt-7'>
                    <img
                        className='w-20 h-20 rounded-full'
                        src={ubaid} alt="" />

                    <img
                        className='w-20 h-20 rounded-full'
                        src={ubaid} alt="" />

                    <img
                        className='w-20 h-20 rounded-full'
                        src={ubaid} alt="" />
                </div>
            </div>

            <div className='w-1/3 px-10 pt-10 pb-10'>
                <h2 className='text-3xl'>Recent Posts</h2>
                <div className='flex gap-5 items-center pt-3 pb-3'>
                    <div>
                        <img
                            className='w-20 h-20 rounded-full'
                            src={ubaid} alt="" />
                    </div>
                    <div>
                        <p>16th Anniversary</p>
                        <p>February 4, 2024</p>
                    </div>


                </div>

                <div className='flex gap-5 items-center pt-3 pb-3'>
                    <div>
                        <img
                            className='w-20 h-20 rounded-full'
                            src={ubaid} alt="" />
                    </div>
                    <div>
                        <p>16th Anniversary</p>
                        <p>February 4, 2024</p>
                    </div>

                </div>

                <div className='flex gap-5 items-center pt-3 pb-3'>
                    <div>
                        <img
                            className='w-20 h-20 rounded-full'
                            src={ubaid} alt="" />
                    </div>
                    <div>
                        <p>16th Anniversary</p>
                        <p>February 4, 2024</p>
                    </div>


                </div>
            </div>

            <div className='px-10'>
                <h2 className='text-3xl pb-6'>Contact</h2>
                <p className='pb-3'> PK Office<span className=''>: 304-G, Amna Plaza Pesh Rd Rawalpindi</span></p>
                <p className='pb-3'>US Office <span>: 16192 Coastal Highway Lewes, DE</span></p>
                <p className='pb-3'> UK Office<span>: Intl. House, 776-778 Barking Rd London</span></p>
                <p className='pb-3'> FR Office<span>:5 avenue Pierre Salvi 95500 Gonesse Paris</span></p>
                <p className='pb-3'>Ph : +92 51 5491184 / +92 51 8772888</p>
                <p className='pb-3'>Email : info[@]eziline.com</p>
            </div>
        </div>
    )
}

export default Tfooter
