import React from 'react'
import ProductCard from './ProductCard'

const OrderTotal = ({products}) => {
  return (
    <div className='order-total'>
        <div className='step-title'>
            <h2>Order Total</h2>
        </div>
        <div className='product-list'>
            <hr></hr>
            <div>
                {products.map((product) => <ProductCard description={product.description} price={product.price} quantity={product.quantity}/>)}
            </div>
            <hr></hr>
        </div>
    </div>
  )
}

export default OrderTotal