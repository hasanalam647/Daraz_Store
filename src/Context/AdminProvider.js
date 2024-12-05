import React, { createContext, useEffect, useState } from "react";


export const AdminContext = createContext();
const AdminProvider = ({ children }) => {
    const [validAdmin, setValidAdmin] = useState('')
    const AdminValid = () => {
        const adminList = JSON.parse(localStorage.getItem('adminList'));
        setValidAdmin(adminList)
    }
    useEffect(() => {
        AdminValid()
    }, [])
    const AdminValues = {
        setValidAdmin,
        validAdmin,
    }
    return (
        <AdminContext.Provider value={AdminValues}>
            {children}
        </AdminContext.Provider>
    )
}
export { AdminProvider };