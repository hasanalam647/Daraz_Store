import React, { useContext } from 'react'
import './App.css'
import Slider from './Slider';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ProductContext } from './Context/ProductsProvider';
import { CartContext } from './Context/CartProvider';
// import { ProductCls } from './datatype';


const ProductsDisplay = () => {
  const { products } = useContext(ProductContext);
  const { cartItem } = useContext(CartContext);
  const { setCartItem } = useContext(CartContext);

  // useEffect(() => {
  //   var a = new ProductCls({ name: "efg", id: "asd", price: 90 });
  //   if (a.validateProduct()) {
  //     localStorage.setItem("testtiem", JSON.stringify(a));
  //   }
  //   else {
  //     alert("Not valid to add");
  //   }
  // }, [])



  const handleAddToCart = (product) => {
    const isItemInCart = cartItem.find((item) => item.id === product.id)
    if (isItemInCart) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  }
  return (<>
    <Slider />
    <div>
      <div className='mt-10 text-7xl	text-gray-600 text-center'>Hot Sale</div>
      <div className=' ml-2 grid grid-cols-6'>
        {products ? true : [].map((item) =>
          <Card key={item.id} className=" m-auto card_size w-96 grid grid-flow-row row-span-2">
            <CardHeader className='card_img' floated={false}>
              <img src={item.img} />
            </CardHeader>
            <CardBody className="text-center p-0 card_body grid grid-flow-row">
              <div className='m-auto'>
                <Typography color="orange" className="card_name font-semibold" textGradient>
                  {item.productName}
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2 text-sm">
                  Rs. {item.price} /-
                </Typography>

              </div>
              <Button variant="gradient" className='CardBtn' onClick={() => handleAddToCart(item)}>Add to Cart</Button>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  </>);
}




export default ProductsDisplay;