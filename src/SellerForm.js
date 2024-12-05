import React, { useContext, useState } from "react";
// import { groupedButtons } from "./groupButtons";
// import { ButtonGroup, Button } from "@material-tailwind/react";
import './App.css';
import { Select, Option } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { OptionContext, ProductContext } from "./Context/ProductsProvider";




const SellerForm = () => {
    const [productName, setProductName] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [contact, setConatact] = useState('');
    const [bussiness, setBussiness] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('')
    const { ProductAdded } = useContext(ProductContext);
    const { options } = useContext(OptionContext);
    const navigate = useNavigate()
    const handleProductName = (e) => {
        const value = e.target.value;
        setProductName(value);
    };
    const handleImg = (e) => {
        const value = e.target.value;
        setImg(value);
    };
    const handlePrice = (e) => {
        const value = e.target.value;
        setPrice(value);
    };
    const handleUserName = (e) => {
        const value = e.target.value;
        setUserName(value);
    };
    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };
    const handleContact = (e) => {
        const value = e.target.value;
        setConatact(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = Date.now();
        const item = {
            id: userId,
            name: userName,
            productName: productName,
            img: img,
            price: price,
            productType: bussiness,
            contact: contact,
            email: email,
        }
        const existingItems = JSON.parse(localStorage.getItem('Products')) || [];
        const updatedItems = [...existingItems, item];
        localStorage.setItem('Products', JSON.stringify(updatedItems));
        navigate(-1)
        setProductName('')
        setImg('')
        setPrice('')
        setConatact('')
        setBussiness('')
        setUserName('')
        setEmail('')
        ProductAdded()


    };


    return (<>
        <div className="mt-10 mb-10">

            <h1 className='text-6xl mb-10	text-gray-600 text-center'>"Become a Seller and start bussiness with us"</h1>
            <div className="m-auto max-w-fit  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register Your product</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product name</label>
                        <input
                            type=""
                            name=""
                            id=""
                            className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Sofa"
                            value={productName}
                            onChange={handleProductName}
                            required></input>
                    </div>
                    <div className="grid grid-cols-2 ">
                        <div className="mr-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Img URL</label>
                            <input
                                type=""
                                name=""
                                id=""
                                value={img}
                                onChange={handleImg}
                                className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="https://static-01.daraz.pk/p/f4c96f7ad712d7362e62bf1416148bf2.png"
                                required></input>
                        </div>
                        <div className="m-auto">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product type</label>
                            <Select onChange={(e) => setBussiness(e)} className="black form " label="Select Product type">
                                {options.map((item) =>
                                    <Option key={item.id} value={item.value}>{item.label}</Option>
                                )}
                            </Select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                            <input
                                type=""
                                name=""
                                id=""
                                value={userName}
                                onChange={handleUserName}
                                className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Ahmed Shaikh"
                                required></input>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input
                                type="price"
                                name="price"
                                id="price"
                                value={price}
                                onChange={handlePrice}
                                className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="1200"
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
                                className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="name@company.com"
                                required></input>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conatact No.</label>
                            <input
                                type="tel"
                                name=""
                                id="phone"
                                value={contact}
                                onChange={handleContact}
                                className="form bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="+92 *********"
                                required></input>
                        </div>
                    </div>
                    <button type="submit" className="form w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Done</button>

                </form>



            </div >

        </div>
    </>)
}
export default SellerForm;