import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductsProvider'

const ProductListAdmin = () => {
  const { products } = useContext(ProductContext)
  return (
    <div>
      <div className='text-2xl text-blue-gray-700 p-6 bg-blue-gray-50'>Products On App </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3">
                Product ID
              </th>
              <th scope="col" className="px-3 py-3">
                Product Name
              </th>
              <th scope="col" className="px-3 py-3">
                Product Type
              </th>
              <th scope="col" className="px-3 py-3">
                Store Name
              </th>
              <th scope="col" className="px-3 py-3">
                price
              </th>
              <th scope="col" className="px-3 py-3">
                Store Email
              </th>
              <th scope="col" className="px-3 py-3">
                Contact no.
              </th>
              <th scope="col" className="px-3 py-3">
                Product Remove
              </th>
            </tr>
          </thead>

          <tbody >
            {
              products.map((item) =>
                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.id}
                  </th>
                  <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.productName
                    }
                  </th>
                  <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.productType}
                  </td>
                  <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name} Store
                  </td>
                  <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.price}
                  </td>
                  <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.email}
                  </td>
                  <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.contact}
                  </td>
                  <td className="px-3 py-4 font-medium text-cyan-900 whitespace-nowrap dark:text-white">
                    <button>Remove</button>
                  </td>
                </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductListAdmin