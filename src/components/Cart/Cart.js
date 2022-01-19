import React from 'react';
import './Cart.css';


const Cart = props => {
    const {cart} = props;

    let total = 0;
    let delivery = 0;
    let grandTotal = 0
    cart.map( pd => {
        const {price, shipping} = pd;
        total = total + price;
        delivery = delivery + shipping;
        
        grandTotal = grandTotal + price + shipping ;
    })

    return (
        <div>
            

            <div className="card text-center shadow-lg bg-body border border-0 rounded-3" id='product-cart'>
                <div className="card-body">
                    <h5 className="card-title text-success fw-bold fs-3"><i className="fas fa-shopping-cart"> </i>{cart.length}</h5>
                    <p className="card-text fw-bold">Items: ${total.toFixed(2)}</p>
                    <p className="card-text fw-bold">Delivery: ${delivery.toFixed(2)}</p>
                    <p className="card-text fw-bold">Total: ${grandTotal.toFixed(2)}</p>
                    <a href="#" className='order-button'>Order</a>
                </div>
            </div>
        </div>
    );
};

export default Cart;