import React from 'react'
import { assets } from '../assets/assets'

const Footi = () => {
  return (
    <div className='md:mx-10'>

        {/*  footer starts from here */}
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* left section */}
      <div >
        <img className='mb-5 w-40' src={assets.logo} alt="logo" />
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      {/* left section ends here */}


      {/* mid section */}
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
        </ul>
      </div>

     {/* mid section ends here */}


      {/* right section */}
      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>nawazthezaifre@gmail.com</li>
        </ul>
      </div>

     {/* right section ends here */}

    </div>

    {/* main- footer closed */}
    

    {/* copyRight starts from here */}
        <div>
           <hr />
           <p className='py-5 text-sm text-center'>Copyright 2024 @ mohdNawaz.dev - All Right Reserved.</p>

        </div>
        
      {/* copyRight ends from here */}
    </div>
  )
}

export default Footi




