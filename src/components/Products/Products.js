import React from 'react';
import './Product.css';

const Products = props => {

const {name,img,price, shipping} = props.product;



return (

<div className='col-md-6'>

<div className="card mb-3 shadow-lg bg-body rounded border border-0 p-1" id='products-card'>
  <div className="row g-0">
    <div className="col-md-5">
      <img src={img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <p className="card-title text-success fw-bold">{name}</p>
        <p className="card-text fw-bold">Price: ${price}</p>
        <p className="card-text fw-bold">Shipping-Cost: ${shipping}</p>
        <button onClick={()=>props.handleAddToCart(props.product)} type="button" className="btn btn-warning text-light">Buy Now</button>
      </div>
    </div>
  </div>
</div>

</div>

);
};

export default Products;