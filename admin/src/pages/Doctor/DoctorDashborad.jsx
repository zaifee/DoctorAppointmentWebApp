import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const DoctorDashborad = () => {
  const { getDashData, dashData, setDashData, dToken, completeAppointment, cancelAppointment } = useContext(DoctorContext);
  const { currency, slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  // when we have dashData then only return will execute
  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div
            className="flex items-center gap-2 bg-white p-4 min-w-52 rounded
         border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all"
          >
            <img className="w-14" src={assets.earning_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {currency} {dashData.earning}
              </p>
              <p className="text-gray-400">Earnings</p>
            </div>
          </div>
          {/* 2 starts from here  */}
          <div
            className="flex items-center gap-2 bg-white p-4 min-w-52 rounded
         border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all"
          >
            <img className="w-14" src={assets.appointments_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.appointments}
              </p>
              <p className="text-gray-400">Appointments</p>
            </div>
          </div>

          {/* 3 starts from here  */}
          <div
            className="flex items-center gap-2 bg-white p-4 min-w-52 rounded
         border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all"
          >
            <img className="w-14" src={assets.patients_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.patients}
              </p>
              <p className="text-gray-400">Patients</p>
            </div>
          </div>
        </div>

        {/* latest appointments */}
        <div className='bg-white'>
      <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border'>
        <img src={assets.list_icon} alt="" />
        <p className='font-semibold'>Lastest Bookings</p>
      </div>

      <div className='pt-4 border border-b-0'>
        {
          dashData.latestAppointment.map( (item, index) => (
            <div className='flex items-center px-6 py-3 gap-3 hover:bg-gray-100'  key={index}>
              <img className='w-10 rounded-full' src={item.userData.image} alt="" />
              <div className='flex-1 text-sm'>
                <p className='text-gray-800 font-medium'>{item.userData.name}</p>
                <p className='text-gray-600'>{slotDateFormat(item.slotDate)}</p>
              </div>

              {/* icons logic  */}
              {
              item.cancelled ?  //yaha mistake kiye thi cancelled small aana tha
                <p className="text-red-400 text-xs font-medium">Cancelled</p>
               : item.isCompleted ? 
                <p className="text-green-500 text-xs font-medium">Completed</p>
               : 
                <div className="flex">
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    className="w-10 cursor-pointer"
                    src={assets.cancel_icon}
                    alt="cancelIcon"
                  />
                  <img
                    onClick={() => completeAppointment(item._id)}
                    className="w-10 cursor-pointer"
                    src={assets.tick_icon}
                    alt="tickIcon"
                  />
                </div>
               //if isCompleted false this will execute
            }
         

            </div>
          ))

        }
      </div>
    </div>

      
     
      </div>
      
    )
  );
};

export default DoctorDashborad;
