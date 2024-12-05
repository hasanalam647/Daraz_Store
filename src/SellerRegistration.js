import React, { useContext, useState } from "react";
import './App.css';
import { SellerContext } from "./Context/SellerProvider";
import { Select, Option } from "@material-tailwind/react";
import Modal from "./Components/Modal";

const SellerRegistration = () => {
    const [sellerFName, setSellerFName] = useState('');
    const [sellerLName, setSellerLName] = useState('');
    const [sellerStoreName, setSellerStoreName] = useState('');
    const [sellerId, setSellerId] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [sellerContact, setSellerConatact] = useState('');
    const [sellerCity, setSellerCity] = useState('');
    const [sellerAddress, setSellerAddress] = useState('');
    const [formError, setFormError] = useState('');
    const [sellerPassword, setSellerPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { sellerCityOptions, setShowModal } = useContext(SellerContext)
    const handleSellerFName = (e) => {
        const value = e.target.value;
        setSellerFName(value);
    };
    const handleSellerLName = (e) => {
        const value = e.target.value;
        setSellerLName(value);
    };

    const handleSellerStoreName = (e) => {
        const value = e.target.value;
        setSellerStoreName(value);
    };

    const handleSellerId = (e) => {
        const value = e.target.value;
        setSellerId(value);
    };
    const handleSellerAddress = (e) => {
        const value = e.target.value;
        setSellerAddress(value);
    };
    const handleSellerEmail = (e) => {
        const value = e.target.value;
        setSellerEmail(value);
    };
    const handleSellerContact = (e) => {
        const value = e.target.value;
        setSellerConatact(value);
    };
    const handleSellerPassword = (e) => {
        const value = e.target.value;
        if (/[@$&*#!$~]/.test(value) && value.length >= 8 && /\d/.test(value)) {
            setSellerPassword(value);
            setPasswordError('');
        } else {
            setSellerPassword(value);
            setPasswordError('Password must contain alteast 1 number, atleast one of the following characters: @, $, &, * and greater than 8');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordError.length >= 1) {
            setFormError('Please correct the errors before submitting.');
            return;
        } else {

            const ProductSellerId = Date.now();
            const item = {
                id: ProductSellerId,
                fName: sellerFName,
                lName: sellerLName,
                address: sellerAddress,
                CNIC: sellerId,
                city: sellerCity,
                store: sellerStoreName,
                email: sellerEmail,
                contact: sellerContact,
                password: sellerPassword,
                allow: false
            }
            const existingItems = JSON.parse(localStorage.getItem('SellerList')) || [];
            const updatedItems = [...existingItems, item];
            localStorage.setItem('SellerList', JSON.stringify(updatedItems));
            setSellerFName('')
            setSellerLName('')
            setSellerAddress('')
            setSellerCity('')
            setSellerId('')
            setSellerStoreName('')
            setSellerEmail('')
            setSellerConatact('')
            setSellerPassword('')
            setShowModal(true)
        }

    };


    return (<>

        <h1 className='text-6xl mb-10	text-gray-600 text-center'>"Become a Seller and start bussiness with us"</h1>
        <div className="m-auto mb-10 max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register Your Store</h5>
                <div className="grid grid-cols-2 ">
                    <div className="mt-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input
                            type=""
                            name=""
                            id=""
                            className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Ahmed"
                            value={sellerFName}
                            onChange={handleSellerFName}
                        ></input>
                    </div>
                    <div className="mt-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input
                            type=""
                            name=""
                            id=""
                            value={sellerLName}
                            onChange={handleSellerLName}
                            className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="shaikh"
                        ></input>
                    </div>

                    <div className="mt-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CNIC number</label>
                        <input
                            type=""
                            name=""
                            id=""
                            value={sellerId}
                            onChange={handleSellerId}
                            className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="42101-**********"
                        ></input>
                    </div>
                    <div className="form" style={{ marginTop: '21px' }}>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                        <Select onChange={(e) => setSellerCity(e)} className="black" label='Enter Your City' >
                            {sellerCityOptions.map((item) =>
                                <Option key={item.id} value={item.city}>{item.city}</Option>
                            )}

                        </Select>
                    </div>
                    <div className="mt-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input
                            type=""
                            name=""
                            id=""
                            value={sellerAddress}
                            onChange={handleSellerAddress}
                            className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="A-4/ 1, Street-9 Sector 11L (North Karachi)"
                        ></input>
                    </div>
                    <div className="mt-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conatact No.</label>
                        <input
                            type="tel"
                            name=""
                            id="phone"
                            value={sellerContact}
                            onChange={handleSellerContact}
                            placeholder="+92 *********"
                            className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        ></input>
                    </div>
                    <div className="mt-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Store name</label>
                        <input
                            type=""
                            name=""
                            id=""
                            value={sellerStoreName}
                            onChange={handleSellerStoreName}
                            className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Shaikh Brothers LTD"
                        ></input>
                    </div>
                    <div className="mt-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={sellerEmail}
                            onChange={handleSellerEmail}
                            className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                        ></input>
                    </div>
                    <div className="mt-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password </label>
                        <input
                            type=""
                            name=""
                            id=""
                            value={sellerPassword}
                            onChange={handleSellerPassword}
                            className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Suggest strong password"
                        ></input>
                        {passwordError && <div className="text-red-500 text-sm">{passwordError}</div>}
                    </div>
                    {formError && <div className="text-red-500 text-sm mb-2">{formError}</div>}
                    <button type="submit" className="form w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ marginTop: '49px' }}>Register</button>
                </div>
            </form>
            <div>
                <Modal />
            </div>
        </div>

    </>)
}
export default SellerRegistration;