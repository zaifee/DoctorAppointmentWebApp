import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currency = '₹'




    const calculateAge = (dob) => {
        const today = new Date()
        const birthDate = new Date(dob)

        let age = today.getFullYear()- birthDate.getFullYear()
        return age
    }

    const months = ["" , "", "Jan", "Feb", "Mar", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  
  const slotDateFormat = (slotDate) => {
    let dateArray = slotDate.split('_');
    let day = dateArray[0];
    let monthIndex = Number(dateArray[1]);  // Adjusting for array starting at 0
    let year = dateArray[2];
    return day + " " + months[monthIndex] + " " + year;
  };
  


    const value = {
        calculateAge,
        slotDateFormat,
        currency
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider