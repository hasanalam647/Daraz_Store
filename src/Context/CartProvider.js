import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();
const CartProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([]);
    const [loggedInUserId, setLoggedInUserId] = useState('')
    const [currentDate, setCurrentDate] = useState(getCurrentDateString())

    const userIdGetter = () => {
        const listArr = sessionStorage.getItem('userId');
        setLoggedInUserId(listArr)
    }
    function getCurrentDateString() {
        const date = new Date().getDate() 
        const month = new Date().getMonth() + 1 
        const year = new Date().getFullYear() 
        const hours = new Date().getHours() 
        const min = new Date().getMinutes() 
        const sec = new Date().getSeconds() 
        return date + '/' + month + '/' + year + '    ' + hours + ':' + min + ':' + sec
    }
    useEffect(() => {
        userIdGetter()
        getCurrentDateString()
    }, [])
    const cartState = {
        cartItem,
        setCartItem,
        loggedInUserId,
        setCurrentDate,
        currentDate,
        getCurrentDateString
    }
    return (
        <CartContext.Provider value={cartState}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider