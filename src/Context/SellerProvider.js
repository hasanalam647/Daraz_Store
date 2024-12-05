import React, { createContext } from "react";


export const SellerContext = createContext();
const SellerProvider = ({ children }) => {
    
    const [showModal, setShowModal] = React.useState(false);
    const sellerCityOptions = [
        {
            city: "Karachi",
            province: "Sindh",
            id: 1
        },
        {
            city: "Lahore",
            province: "Punjab",
            id: 2
        },
        {
            city: "Faisalabad",
            province: "Punjab",
            id: 3
        },
        {
            city: "Rawalpindi",
            province: "Punjab",
            id: 4
        },
        {
            city: "Islamabad",
            province: "Islamabad Capital Territory",
            id: 5
        },
        {
            city: "Multan",
            province: "Punjab",
            id: 6
        },
        {
            city: "Peshawar",
            province: "Khyber Pakhtunkhwa",
            id: 7
        },
        {
            city: "Quetta",
            province: "Balochistan",
            id: 8
        },
        {
            city: "Sialkot",
            province: "Punjab",
            id: 9
        }
    ]
    
    return (
        <SellerContext.Provider value={{ sellerCityOptions, setShowModal,showModal }}>
            {children}
        </SellerContext.Provider>
    )
}
export { SellerProvider };