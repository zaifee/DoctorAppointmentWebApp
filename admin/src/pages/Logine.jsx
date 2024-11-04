import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { AdminContext } from '../context/adminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { data } from 'autoprefixer'
import { DoctorContext } from '../context/DoctorContext'
const Logine = () => {

  const [state, setState] = useState('Admin')
  //making two state to store email and password 
  const [email, setEmail] = useState('')
  const [password, setPassword]  = useState('')

  const {setAToken, backEndUrl} = useContext(AdminContext)
  const {setDToken} = useContext(DoctorContext)


  const onSubmitHandler = async(event) => {

    event.preventDefault();

    try {
      if(state === 'Admin'){
        //if state equal to admin we wil call admin login else doctor login api
        const {data} = await axios.post(backEndUrl + '/api/admin/login', {email, password})
        // const { data } = await axios.post(`${backEndUrl}/api/admin/login`, { email, password });


        if(data.success){
          // before setting token we will store token in local storage so that admin will be login in
          localStorage.setItem('aToken',data.token)
          setAToken(data.token);
          toast.success("Login Successful")
          
        }else{
          toast.error(data.message);
  
        }

      }else{

        const {data} = await axios.post(backEndUrl + '/api/doctors/login', {email,password})  
        if(data.success){
          // before setting token we will store token in local storage so that admin will be login in
          localStorage.setItem('dToken',data.token)
          setDToken(data.token);
          toast.success("Login Successful")
          console.log(data.token);
          

      }else{
        toast.error(data.message);

      }
    }
   }
    catch (error) {
      console.log("Error during login: ", error);
      
    }
  
  }



  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center '>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className='text-primary'> {state}  </span> Login</p>
        <div className='w-full'>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] w-full p-2 mt-1 rounded' type="email" required />
        </div>

        <div  className='w-full'>
          <p>Passowrd</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] w-full p-2 mt-1 rounded' type="password" required />
        </div>

        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
        {
          state === 'Admin'
          ? <p>Doctor Login? <span className='text-primary underline cursor-pointer' onClick={() => setState('Doctor')}>Click here</span></p>
          : <p>Admin Login? <span className='text-primary underline cursor-pointer' onClick={()=> setState('Admin')}>Click here</span></p>
        }
      </div>
    </form>
  )
}


export default Logine