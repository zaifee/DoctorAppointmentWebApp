import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const MyAppointment = () => {
  // Here we are displaying only doctors data using app context 
  const {backendUrl, token, getDoctorsData} = useContext(AppContext)

  const [appointments, setAppointment] = useState([])
  const months = ["" , "", "Jan", "Feb", "Mar", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  
  const slotDateFormat = (slotDate) => {
    let dateArray = slotDate.split('_');
    let day = dateArray[0];
    let monthIndex = Number(dateArray[1]);  // Adjusting for array starting at 0
    let year = dateArray[2];
    return day + " " + months[monthIndex] + " " + year;
  };
  
  const navigate = useNavigate();



// dispaly the user appointment data 
  const getUserAppointment = async(req, res) => {
      try {

        const {data} = await axios.get(backendUrl + '/api/user/appointments', {headers:{token}})

          if(data.success){
            setAppointment(data.appointments.reverse());
            console.log(data.appointments)
          }
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
 };

const cancelAppointment = async(appointmentId) => {
  try {
    // console.log(appointmentId);
    
    const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment', {appointmentId}, {headers:{token}})
    
    if(data.success){
      toast.error('Appointment Cancelled Successfully')      
      // toast.success(data.message);
      getUserAppointment();
      getDoctorsData();
      
    }else{
      toast.error(data.message)
    }

  } catch (error) {
    console.log(error);
    toast.error(error.message)
    
  }


};

const initPay = (order) => {
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: 'Appointment Payment',
    description: 'Appointment payment',
    order_id: order.id,
    receipt: order.receipt,
    handler: async(response) => {
      console.log(response);
     
      try {

        const {data} = await axios.post(backendUrl + '/api/user/verifyPayment', response, {headers: {token}});
        if(data.success){
          getUserAppointment()
          navigate('/my-appointments')
        }
        
      } catch (error) {
        
      }
    }
  }

  const rzp = new window.Razorpay(options);
  rzp.open();
}

const appointmentRazorpay = async(appointmentId) => {
  try {

    const {data} = await axios.post(backendUrl + '/api/user/payment-razorpay', {appointmentId}, {headers:{token}});

    if(data.success){
      initPay(data.order)
    }
    
  } catch (error) {
    console.log(error);
    toast.error(error.message)
    
  }
}


 useEffect ( () => {
  if(token){
    getUserAppointment()
  }
 }, [token])

  return (
    <div className='pb-3 mt-12 font-medium text-zinc-700 border-b'>
      <p>My Appointments</p>
      <div >
        {appointments.map( (item, index) => (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
              {/* image div */}
              <div>
                <img className='w-32 bg-indigo-50' src={item.docData.image} alt="" />
              </div>
              {/* paragr div */}
              {/* flex-1 takes the available space in the row */}
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-700 font-medium mt-1'>{item.docData.name}</p>
                <p>{item.docData.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                <p className='text-xs'>{item.docData.address.line1}</p>
                <p className='text-xs'>{item.docData.address.line2}</p>
                <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & time:</span>
              {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
              </div>

            {/* in this div we will add structure so that we can make the above component responsive */}
              <div></div>

            {/* buttons */}
              <div className='flex flex-col gap-2 justify-end'>
              {!item.cancelled && item.payment && !item.isCompleted && <buttton className='sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50 text-center'>Paid</buttton>}
               {!item.cancelled && !item.payment && !item.isCompleted &&  <button onClick={() => appointmentRazorpay(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white
                transition-all duration-300'>Pay Online</button>}
                {!item.cancelled && !item.isCompleted &&  <button onClick={ () => cancelAppointment(item._id)}  className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white
                transition-all duration-300'>Cancel Appointment</button>}
                {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled </button>}
                {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 text-green-500'>Completed</button>}
              </div>

          </div>
        ))}                    
      </div>

    </div>
  )
}

export default MyAppointment