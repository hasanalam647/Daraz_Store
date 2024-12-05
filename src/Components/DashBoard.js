import React from 'react'
import { NavLink } from 'react-router-dom'

const DashBoard = () => {
  return (
    <div>
      <div className='bg-cyan-700 w-full text-white pl-10 h-16'>
        <p className='float-left text-3xl mt-4'>Daraz DashBoard</p>
        <ul className='inline-flex mt-7 float-right gap-10 mr-8'>
          <li className=' text-lg'><NavLink to='sellerRequest'>Seller Requests</NavLink></li>
          <li className=' text-lg'><NavLink to='pastOrdersTable'>Orders</NavLink></li>
          <li className=' text-lg'><NavLink to='productList'>All Products</NavLink></li>
          <li className=' text-lg'> <NavLink to='users'>Users</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
export default DashBoard