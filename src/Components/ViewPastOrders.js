import React, { useContext, useEffect, useState } from 'react'
import { PastOrderContext } from '../Context/PastOrderProvider'
import { ProductContext } from '../Context/ProductsProvider';

const ViewPastOrders = () => {
    const { orders, OrderCheck, setOrderProducts, orderProducts } = useContext(PastOrderContext)
    const { products } = useContext(ProductContext);
    const [showModal, setShowModal] = useState(false);
    const handleViewOrder = (order) => {
        const orderProductArr = order.products;
        const productFind = [];

        for (let j = 0; j < orderProductArr.length; j++) {
            const orderProductId = orderProductArr[j].id;
            const orderProductQty = orderProductArr[j].qty;
            const foundProduct = products.find(product => product.id === orderProductId);
            if (foundProduct) {
                const clonedProduct = { ...foundProduct, qty: orderProductQty };
                productFind.push(clonedProduct);
            }
        }

        if (productFind.length > 0) {
            setOrderProducts(productFind);
            setShowModal(true);
        }
    }
    useEffect(() => {
        OrderCheck()
    }, [])
    return (
        <>


            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Your Orders ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date and time of Order
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Order Tracker
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                view Orders
                            </th>
                        </tr>
                    </thead>
                    {
                        orders.map((order) =>
                            <tbody key={order.orderID}>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {order.orderID}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {order.dated}
                                    </th>
                                    <td className="px-6 py-4">
                                        Pending
                                    </td>
                                    <td className="px-6 py-4">

                                        Rs. {order.total}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => { handleViewOrder(order); setShowModal(true) }}>View</button>
                                    </td>
                                </tr>

                            </tbody>
                        )}
                </table>
            </div>
            <>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Product List
                                        </h3>
                                    </div>
                                    {/*body*/}
                                    <div className='overflow-y-scroll h-60 m-0'>

                                        {
                                            orderProducts.map((item) =>
                                                <div key={item.id} className="relative p-6 flex text-xl font-semibold shadow-slate-300 text-cyan-900 ">
                                                    <img src={item.img} style={{ height: '90px', width: '100px' }} />
                                                    <p style={{ width: "200px" }} className='px-6 m-auto'>{item.productName}</p>
                                                    <p style={{ width: "200px" }} className='px-6 m-auto'>Price<br />
                                                        <span className='text-sm'>
                                                            Rs.{item.price}
                                                        </span>
                                                    </p>
                                                    <p className='px-6 m-auto' style={{ width: "200px" }}>Quantity:<br /><span className='text-sm'> {item.qty}</span></p>
                                                    <p className='px-6 m-auto' style={{ width: "200px" }}>Product Total<br /><span className='text-sm'>Rs.{item.qty * item.price}</span></p>
                                                </div>
                                            )}
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center m-auto p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </>
        </>
    )
}

export default ViewPastOrders