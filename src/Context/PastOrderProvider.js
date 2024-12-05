import React, { createContext, useEffect, useState } from "react";


export const PastOrderContext = createContext();
const PastOrderProvider = ({ children }) => {

    const [orderProducts, setOrderProducts] = useState([])
    const [orders, setOrders] = useState([]);
    const OrderCheck = () => {
        const listArr = JSON.parse(localStorage.getItem('OrderList'));
        setOrders(listArr)
    }
    useEffect(() => {
        OrderCheck()
    }, [])
    const navValues = {
        orders,
        setOrders,
        OrderCheck,
        setOrderProducts,
        orderProducts
    }
    return (
        <PastOrderContext.Provider value={navValues}>
            {children}
        </PastOrderContext.Provider>
    )
}
export { PastOrderProvider };