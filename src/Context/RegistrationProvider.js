import React, { createContext, useEffect, useState } from "react";


export const RegisterContext = createContext();
const RegistrationProvider = ({ children }) => {
    const [validUsers, setValidUsers] = useState('')
    const [userNameDisplay, setUserNameDisplay] = useState('')
    const [userEmailDisplay, setUserEmailDisplay] = useState('')
    const [loginStatus, setLoginStatus] = useState(false)
    const UserValid = () => {
        const usersList = JSON.parse(localStorage.getItem('users'));
        setValidUsers(usersList)
    }
    const UserNameCheck = () => {
        const user = sessionStorage.getItem('loginName');
        const email = sessionStorage.getItem('useremail');
        setUserNameDisplay(user)
        setUserEmailDisplay(email)
    }
    const loginStatusCheck = () =>{
        setLoginStatus(false)
        sessionStorage.clear();
    }
    useEffect(() => {
        UserValid()
    }, [])
    useEffect(() => {
        UserNameCheck()
    }, [loginStatus])
    return (
        <RegisterContext.Provider value={{loginStatusCheck,userEmailDisplay,setUserNameDisplay, setValidUsers, validUsers,loginStatus,setLoginStatus ,userNameDisplay,UserNameCheck}}>
            {children}
        </RegisterContext.Provider>
    )
}
export { RegistrationProvider };