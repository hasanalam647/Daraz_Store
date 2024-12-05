import React, { useContext } from 'react'
import { SellerRequestContext } from '../Context/SellerRequestProvider'

const SellerRequests = () => {
    const { sellerList } = useContext(SellerRequestContext)
    return (
        <>
            <div className='text-2xl text-blue-gray-700 p-6 bg-blue-gray-50'>List Of Canidiates Request To Be A Seller </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-3 py-3">
                                Requests ID
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Seller Name
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Store Name
                            </th>
                            <th scope="col" className="px-3 py-3">
                                CNIC no.
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Address/City
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Contact no.
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Allow seller
                            </th>
                        </tr>
                    </thead>

                    <tbody >
                        {
                            sellerList.map((item) =>
                                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.id}
                                    </th>
                                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.fName} {item.lName}
                                    </th>
                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.store}
                                    </td>
                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.CNIC}
                                    </td>
                                    <td className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.address} / {item.city}
                                    </td>
                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.email}
                                    </td>
                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.contact}
                                    </td>
                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button>Allow</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SellerRequests