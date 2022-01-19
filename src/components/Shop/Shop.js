import React from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { useEffect, useState } from 'react/cjs/react.development';
const Shop = () => {

    const [products, setProducts] = useState([]);
    
    

    useEffect(()=>{
        fetch('products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    const [cart, setCart] = useState([])

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        
    }

    return (
        <div className='p-5'>
            <div className='row'>
                <div className='col-md-9'>
                {/* products load section */}
                    <div className='d-flex row '>
                         {
                             products.map(product => <Products key = {product.key} product={product} handleAddToCart={handleAddToCart}></Products>)
                         }
                    </div>
                </div>
                <div className='col-md-3'>
                {/* products price calculation section */}
                     <Cart cart={cart} key={cart.key}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;