import React, { useState, createContext, useEffect } from "react";


export const ProductContext = createContext();
export const OptionContext = createContext();
const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const ProductAdded = () => {
        const listArr = JSON.parse(localStorage.getItem('Products'));
        setProducts(listArr)
    }

    const proState = {
        products,
        setProducts,
        ProductAdded
    }
    useEffect(() => {
        ProductAdded()
    }, [])

    const options = [
        {
            value: 'furniture',
            label: 'Furniture',
            id: '1'
        }, {
            value: 'electric ',
            label: 'Electric Devices',
            id: '2'
        }, {
            value: 'groucries',
            label: 'Groucries',
            id: '3'
        }, {
            value: 'electronic ',
            label: 'Electronics Accesories',
            id: '4'

        }, {
            value: 'health',
            label: 'Health & Care',
            id: '5'
        }, {
            value: 'kids',
            label: 'Kids Items',
            id: '6'
        }, {
            value: 'mens',
            label: 'Mens Fashion',
            id: '7'
        }, {
            value: 'womens',
            label: 'Womens Fashion',
            id: '8'
        }, {
            value: 'mother care',
            label: 'Mother and Baby',
            id: '9'
        }, {
            value: 'sports',
            label: 'Sports Items',
            id: '10'
        }
    ]

    return (
        <ProductContext.Provider value={proState}>
            <OptionContext.Provider value={{ options }}>


                {children}
            </OptionContext.Provider>
        </ProductContext.Provider>
    )
}
export { ProductsProvider };