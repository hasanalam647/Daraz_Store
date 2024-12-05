import React, { createContext, useEffect, useState } from "react";


export const UsersContext = createContext();
const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState('')
    const UsersValid = () => {
        const user = JSON.parse(localStorage.getItem('users'));
        setUsers(user)
    }
    useEffect(() => {
        UsersValid()
    }, [])
    const UsersValues = {
        setUsers,
        users,
    }
    return (
        <UsersContext.Provider value={UsersValues}>
            {children}
        </UsersContext.Provider>
    )
}
export { UsersProvider };