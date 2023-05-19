import React from 'react'
import ProductCard from './ProductCard'

const OrderTotal = ({products, subTotal, delivOrPickup, setDeliveryCharge, grandTotal, deliveryCharge}) => {
  return (
    <div className='order-total'>
        <div className='step-title'>
            <h2>Order Total</h2>
        </div>
        <div className='product-list'>
          <div className='order-categories'>
            <h3 className='product-title'>product</h3>
            <h3 className='price-title'>price</h3>
            <h3 className='quantity-title'>Qty</h3>
          </div>
            <hr></hr>
            <div>
                {products.map((product) => <ProductCard description={product.description} price={product.price} quantity={product.quantity}/>)}
            </div>
            <hr></hr>
        </div>
        <div className='total-price'>
          <div className='sub-total'>
            <h3>Subtotal</h3>
            <p>{subTotal}</p>
          </div>
          { delivOrPickup ? null : <div className='delivery-charge'>
            <h3>Delivery Charge</h3>
            <input onChange={(e) => setDeliveryCharge(e.target.value)} className='delivery-charge-input'></input>
            <p>{deliveryCharge}</p>
          </div>}
          {/* need to add tax */}
          <div className='grand-total'>
          <h3>Grand Total</h3>
          <p>{grandTotal}</p>
          </div>
        </div>
    </div>
  )
}

export default OrderTotal