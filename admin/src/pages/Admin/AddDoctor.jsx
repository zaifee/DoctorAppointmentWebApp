import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/adminContext";
import {toast} from 'react-toastify'
import axios from "axios"

const AddDoctor = () => {

  const [docImage, setDocImage] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 year')
  const [fee, setFee] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('General physician')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const {backEndUrl, aToken} = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    


    try {
      if(!docImage){
        return toast.error("Image Not Selected")
      }

      // adding all form data 
      const formData = new FormData();

      // provide the same name of image that you have gave during multer config
      formData.append('image', docImage); // assuming 'image' is the name expected by the server
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fee', Number(fee))
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      // converting the object data into the string
      formData.append('address', JSON.stringify({line1:address1, line2:address2}))
      console.log("Sending req to backend...")

      // logging form data 
      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
        
      })

      // console.log("Backend URL:", backEndUrl);
      console.log("Token URL:", aToken);
     


      const {data} = await axios.post(backEndUrl + '/api/admin/add-doctor', formData, {headers: {aToken}}) 
      // // const {data} = await axios.post(`${backendUrl}/api/admin/add-doctor`, formData, {headers: {atoken}});
      // const { data } = await axios.post(
      //   backEndUrl + '/api/admin/add-doctor', 
      //   formData, 
      //   { headers: { Authorization: `Bearer ${aToken}` } }
      // );
      
      
      console.log("Request sent ", data)
      
      if(data.success){
        toast.success(data.message)
        setDocImage(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFee('')

      }else{
        toast.error(data.message)
      }
      console.log("Req recevied..")

    }
     catch (error) {
      toast.error(error.message)
      console.log(error);
        
    }

  };


  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      {/* Main div starts from here */}

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        {/* Upload section start */}
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-image">
            <img className="w-16 bg-gray-100 rounded-full cursor-pointer" src={docImage ? URL.createObjectURL(docImage): assets.upload_area} alt="upload_area" />
          </label>
          <input onChange={(e)=> setDocImage(e.target.files[0])} type="file" id="doc-image" hidden />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>
        {/* Upload section end */}


        {/*----------- name and other things starts from here-------------- */}
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">

         {/*----------- left side starts----------------*/}

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor name</p>
              <input onChange={(e)=> setName(e.target.value)} value={name} className="border rounded px-3 py-2" type="text" placeholder="Name" required />
            </div>

            <div  className="flex-1 flex flex-col gap-1" >
              <p>Doctor Email</p>
              <input  onChange={(e)=> setEmail(e.target.value)} value={email} className="border rounded px-8 py-2" type="email" placeholder="Email" required />
            </div>

            <div  className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <input  onChange={(e)=> setPassword(e.target.value)} value={password}  className="border rounded  px-8 py-2" type="password" placeholder="Password" required />
            </div>

            <div  className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select  onChange={(e)=> setExperience(e.target.value)} value={experience} className="border rounded px-8 py-2" name="" id="">
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            <div  className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input  onChange={(e)=> setFee(e.target.value)} value={fee} className="border rounded px-8 py-2" type="number" placeholder="fees" required />
            </div>
          </div>

          {/*----------- left side end----------------*/}

          {/* ------Right side start-------- */}
          <div  className="flex-1 flex flex-col gap-1">
            <div  className="w-full lg:flex-1 flex flex-col gap-4">
              <p>Speciality</p>
              <select  onChange={(e)=> setSpeciality(e.target.value)} value={speciality} className="border rounded px-8 py-2"  name="" id="">
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div   className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input onChange={(e)=> setDegree(e.target.value)} value={degree} className="border rounded px-8 py-2" type="text" placeholder="Education" required />
            </div>

            <div  className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input  onChange={(e)=> setAddress1(e.target.value)} value={address1} className="border rounded px-8 py-2"  type="text" placeholder="address 1" required />
              <input  onChange={(e)=> setAddress2(e.target.value)} value={address2} className="border rounded px-8 py-2"  type="text" placeholder="address 2" required />
            </div>

          </div>
          

          {/* right side div ends here */}
             </div>

            <div>
            <p  className="mt-4 mb-2">About Doctors</p>
            <textarea  onChange={(e)=> setAbout(e.target.value)} value={about} className="w-full px-2 pt-2 border rounded" placeholder="write about doctor" rows={5} required />
          </div>
          <button type="submit" className="bg-primary px-10 py-3 mt-4 text-white rounded-full">Add Doctor</button>

          {/* Main div ends here */}
      </div>


    </form>
  );
};

export default AddDoctor;
