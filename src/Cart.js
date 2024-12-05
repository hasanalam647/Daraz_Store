import React, { useContext } from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { CartContext } from './Context/CartProvider';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { RegisterContext } from './Context/RegistrationProvider';


const Cart = () => {
    const { cartItem, setCartItem, loggedInUserId, setCurrentDate, getCurrentDateString, currentDate } = useContext(CartContext);
    const { loginStatus } = useContext(RegisterContext);
    const navigate = useNavigate()

    const handleIncrament = (product) => {
        setCartItem(
            cartItem.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    }

    const handleDelete = (product) => {
        const deleteItem = cartItem.filter(item => item.id !== product.id);
        setCartItem(deleteItem);
    }
    const handleDecrement = (product) => {
        if (product.quantity <= 1) {
            handleDelete(product)
        } else {
            setCartItem(
                cartItem.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
        }
    }
    const calculateItemTotal = (item) => item.price * item.quantity;
    const calculateGrandTotal = () => {
        return cartItem.reduce((total, item) => total + calculateItemTotal(item), 0);
    };
    const handlePlaceOrder = () => {
        if (loginStatus === true) {
            alert('Order Placed successfully')
            setCurrentDate(getCurrentDateString())
            const orderId = Date.now();
            var proarr = [];
            cartItem.forEach(element => {
                proarr.push({
                    "id": element.id,
                    "qty": element.quantity
                })
            })
            const item = {
                orderID: "orderid_" + orderId,
                userID: loggedInUserId,
                products: proarr,
                total: calculateGrandTotal(),
                dated: currentDate
            }
            const existingItems = JSON.parse(localStorage.getItem('OrderList')) || [];
            const updatedItems = [...existingItems, item];
            localStorage.setItem('OrderList', JSON.stringify(updatedItems));
            navigate(-1)
            setCartItem([])
        } else {
            alert('Please login to your account first or sign up now')
            return;
        }
    }
    return (<>
        <div>
            <label className="text-5xl text-orange-500">Your Cart</label>
        </div>
        <div className='m-2'>
            {cartItem.map((item) =>
                <Card key={item.id} className="cart-size shadow-2xl m-3 w-full max-w-[80rem] grid grid-cols-4">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 shrink-0 rounded-r-none"
                    >
                        <img
                            src={item.img}
                            alt="card-image"
                            className="cart-img object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h3" color="gray" className="mt-3 mb-4 uppercase">
                            {item.productName}
                        </Typography>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            Rs. {item.price} /-
                        </Typography>


                    </CardBody>
                    <CardBody >
                        <form className="max-w-xs m-auto">
                            <label className="block mb-9 text-2xl font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                            <div className="relative flex items-center max-w-[8rem] m-auto">
                                <button onClick={() => handleDecrement(item)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                    </svg>
                                </button>
                                <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={item.quantity} disabled></input>
                                <button onClick={() => handleIncrament(item)} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </CardBody>
                    <CardBody>
                        <FontAwesomeIcon onClick={() => handleDelete(item)} icon={faTrashCan} className='float-right' style={{ color: "orange", }} />
                        <Typography variant="h4" color="gray" className="mt-9 mb-4 uppercase">
                            Product Total:
                        </Typography>
                        <Typography variant="h4" color="gray" className="mb-4 uppercase">
                            Rs. {item.price * item.quantity}
                        </Typography>
                    </CardBody>
                </Card>
            )}
        </div>

        {
            cartItem.length >= 1 ?
                <footer className="bg-yellow-300 rounded-lg shadow dark:bg-gray-900 m-4 sticky bottom-0">
                    <div className="w-full max-w-screen-xl mx-auto md:py-4 grid grid-cols-3">
                        <div className='mb-0'>
                            <button onClick={() => handlePlaceOrder()} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 h-14">Place Order</button>
                        </div>
                        <a href="https://flowbite.com/" className="flex items-center pb-2 sm:mb-0 space-x-3 rtl:space-x-reverse m-auto">
                            <img src="https://icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png" className="h-9 mb-2" alt="Flowbite Logo" />
                        </a>
                        <div className='text-2xl mt-4 text-gray-800'>
                            <i>Grand total:</i>    Rs.  <b>{calculateGrandTotal()} /-</b>
                        </div>
                    </div>
                </footer>
                :
                <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 sticky bottom-0">
                    <div className="w-full max-w-screen-xl m-auto p-4 md:py-8">
                        <div className="text-4xl m-auto text-center text-orange-900">
                            Your cart is empty<br />
                            <button onClick={() => navigate("/")} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Shop Now</button>
                        </div>
                    </div>
                </footer>

        }


    </>)
}

export default Cart