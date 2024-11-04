import { createContext, useEffect, useState } from "react";
// import { doctors } from "../assets/assets"; in this we are fetching the data from our internal folder but now we are fetching data from backend 

import axios from "axios"
import { toast } from "react-toastify";
export const AppContext = createContext()


const AppContextProvider = (props) => {

    const currencySymbol = '₹'
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([])


    //  Here we are going to store userAuthenticaion token 
    const [token, setToken]  =  useState(localStorage.getItem('token')?localStorage.getItem('token'):false)

    const [userData, setUserData] = useState(false)

    //  in this we will call api and we will get the data from it 
    const getDoctorsData = async() => {
    try {
            const {data} = await axios.get(backendUrl + '/api/doctors/list')
            // if data.success is we are going to store in state variable 
            if(data.success){
                setDoctors(data.doctors)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }

    }



    //--> loading user profile data 
    const loadUserProfileData = async() => {
        try {

            const {data} = await axios.get(backendUrl + '/api/user/get-profile', {headers:{token}})
            if(data.success){
                setUserData(data.userData)
            }else{
                console.log(error);
                toast.error(data.message)
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


    const value = {
        doctors,getDoctorsData,
         currencySymbol,
         token, setToken,
         backendUrl, userData, setUserData,
         loadUserProfileData
    }


    useEffect( ()=> {
        getDoctorsData()
    }, [])


    useEffect( () => {
        if(token){
            loadUserProfileData();
        }else{
            setUserData(false)
        }
    },[token])

  

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider