import React from 'react'
import { assets } from '../assets/assets'
import { Navigate, useNavigate } from 'react-router-dom';

const Banner = () => {
    const Navigate = useNavigate();
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

        {/* left side starts */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>

            {/* main-banner heading starts */}
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                <p className=''>Book Appointment</p>
                <p className='mt-4 lg-text-4xl'>With 100+ Trusted Doctors</p>
            </div>

            {/* main-banner heading ends */}

            
            <button onClick={ () => {Navigate('/login'); scrollTo(0, 0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8
             py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create Account</button>
            </div>

         {/* left side end */}



        {/* right side */}
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="appointment" srcset="" />
        </div>

        {/* right side end */}

    </div>
  )
}

export default Banner