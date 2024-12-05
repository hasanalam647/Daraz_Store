'use client';

import { Navbar, NavbarBrand } from 'flowbite-react';
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './Context/CartProvider';
import { RegisterContext } from './Context/RegistrationProvider';

function Nav() {

    const { cartItem } = useContext(CartContext);
    const {loginStatusCheck, setLoginStatus, loginStatus, userNameDisplay, UserNameCheck, userEmailDisplay } = useContext(RegisterContext);
    const navigate = useNavigate()
    const noOfProducts = () => {
        const idOfElement = document.getElementById('lblCartCount')
        for (var i = 0; i <= cartItem.length; i++) {
            idOfElement.innerHTML = i;

        }
    }
    const checkForSessionValue = () => {

        if (userNameDisplay !== null && userNameDisplay.length >= 1) {
            setLoginStatus(true)
        }
    }
    useEffect(() => {
        checkForSessionValue()
        UserNameCheck()
    }, [userNameDisplay])
    useEffect(() => {
        noOfProducts()
    }, [cartItem])
    return (
        <>


            <Navbar className='bg-yellow-400' fluid rounded>
                <NavbarBrand href="" className='logo'>
                    <img src="https://icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png" className="mr-3 h-7 sm:h-9" alt="Flowbite React Logo" />
                </NavbarBrand>
                <NavLink to="home">
                    <FontAwesomeIcon icon={faHouse} style={{ color: "ffffff", }} />
                </NavLink>
                <div className='srch'>
                    <input
                        type=""
                        name=""
                        id=""
                        className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Search in Daraz"
                        required />
                    <FontAwesomeIcon className='mt-2 srch-btn' icon={faSearch} style={{ height: '22px' }} />
                </div>
                <div className="flex md:order-2">
                    <div className='cartBtn '>

                        <NavLink to="cart">
                            <FontAwesomeIcon icon={faShoppingCart} className='btn-cart' style={{ color: "#ffffff", }} />
                        </NavLink>
                        <span className='badge' id='lblCartCount'></span>
                    </div>
                    <NavLink to="sellerInfo">
                        <button type="button" className="mt-4 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Become a seller</button>
                    </NavLink>
                    {
                        loginStatus === true ?

                            <span className='flex'>
                                <div className="mt-5 mr-1 relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 avatar_Rap" >
                                    <svg className="avatar_img absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                </div>
                                <div className="dropdown mt-6 ">
                                    <button type="button" className="mt-0 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm m-auto p-1 dark:focus:ring-yellow-900">{userNameDisplay}</button>
                                    <div className="dropdown-content pt-4">
                                        <p>{userNameDisplay}</p>
                                        <p className='text-xs'>{userEmailDisplay}</p>
                                        <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
                                        <Link to="pastOrdersTable"><p className='text-sm float-left ml-3'>Past Orders</p></Link><br />
                                        <button className='float-left' onClick={() => loginStatusCheck()}><p className='text-sm float-left ml-3'>Log Out</p></button>
                                    </div>
                                </div>
                            </span>

                            :

                            <div>
                                <button onClick={() => navigate('login')} type="button" className="mt-4 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Log In</button>
                                <button onClick={() => navigate('register')} type="button" className="mt-4 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Sign Up</button>
                            </div>
                    }
                </div>
            </Navbar>
        </>
    );
}
export default Nav;