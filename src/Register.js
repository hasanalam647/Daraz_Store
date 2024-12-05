import React, { useState } from "react";
// import { groupedButtons } from "./groupButtons";
// import { ButtonGroup, Button } from "@material-tailwind/react";
import './App.css';
import { useNavigate } from "react-router-dom";


const Registration = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setConatact] = useState('');
    const [formError, setFormError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate()
    const handleFName = (e) => {
        const value = e.target.value;
        setFName(value);
    };
    const handleLName = (e) => {
        const value = e.target.value;
        setLName(value);
    };
    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };
    const handleContact = (e) => {
        const value = e.target.value;
        setConatact(value);
    };
    const handlePassword = (e) => {
        const value = e.target.value;
        if (/[@$&*#!$~]/.test(value) && value.length >= 8 && /\d/.test(value)) {
            setPassword(value);
            setPasswordError('');
        } else {
            setPassword(value);
            setPasswordError('Password must contain alteast 1 number, atleast one of the following characters: @, $, &, * and greater than 8');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordError.length >= 1) {
            setFormError('Please correct the errors before submitting.');
            return;
        } else {

            const userId = Date.now();
            const item = {
                id: "userid_" + userId,
                fName: fName,
                lName: lName,
                email: email,
                contact: contact,
                password: password,
                block: false
            }
            const existingItems = JSON.parse(localStorage.getItem('users')) || [];
            const updatedItems = [...existingItems, item];
            localStorage.setItem('users', JSON.stringify(updatedItems));
            // const adminitem = {
            //     id: "adminId_" + userId,
            //     email: "admin@gmail.com",
            //     password: "admin!123",
            //     check: false
            // }
            // const adminexistingItems = JSON.parse(localStorage.getItem('adminList')) || [];
            // const adminupdatedItems = [...adminexistingItems, adminitem];
            // localStorage.setItem('adminList', JSON.stringify(adminupdatedItems));
            setFName('')
            setLName('')
            setEmail('')
            setConatact('')
            setPassword('')
            navigate(-1)
        }
    };


    return (<>
        <div className="mt-10 mb-10 m-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register now</h5>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input
                        type=""
                        name=""
                        id=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Ahmed"
                        value={fName}
                        onChange={handleFName}
                        required></input>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <input
                        type=""
                        name=""
                        id=""
                        value={lName}
                        onChange={handleLName}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="shaikh"
                        required></input>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleEmail}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required></input>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password </label>
                    <input
                        type=""
                        name=""
                        id=""
                        value={password}
                        onChange={handlePassword}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Suggest strong password"
                        required></input>
                    {passwordError && <div className="text-red-500 text-sm">{passwordError}</div>}
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conatact No.(not recomended)</label>
                    <input
                        type="tel"
                        name=""
                        id="phone"
                        value={contact}
                        onChange={handleContact}
                        placeholder="+92 *********"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required></input>
                </div>
                {formError && <div className="text-red-500 text-sm mb-2">{formError}</div>}
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
            </form>
        </div>
    </>)
}
export default Registration;