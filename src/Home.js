import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import ProductsDisplay from './ProductsDisplay';
const Home = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}

export default Home