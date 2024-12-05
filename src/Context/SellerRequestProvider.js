import React, { createContext, useEffect, useState } from "react";


export const SellerRequestContext = createContext();
const SellerRequestProvider = ({ children }) => {
    const [sellerList, setSellerList] = useState([])
    const validSellers = () => {
        const sellerListFromStorage = JSON.parse(localStorage.getItem('SellerList'));
        setSellerList(sellerListFromStorage)
    }
    useEffect(() =>{
        validSellers()
    },[])
    const SellerValues = {
        setSellerList,
        sellerList,
        validSellers
    }
    return (
        <SellerRequestContext.Provider value={SellerValues}>
            {children}
        </SellerRequestContext.Provider>
    )
}
export { SellerRequestProvider };