import React, {useEffect, useState} from 'react'
import CustomerInfo from './CustomerInfo'
import CardMessage from './CardMessage'
import ProductInfo from './ProductInfo'
import OrderTotal from './OrderTotal'
import RecipientInfo from './RecipientInfo'

const TakeOrder = () => {
  const [delivOrPickup, setDelivOrPickup] = useState(true)  //false = delivery
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [products, setProducts] = useState([])

  const [subTotal, setSubTotal] = useState(0.00)
  const [deliveryCharge, setDeliveryCharge] = useState(0.00)
  const [grandTotal, setGrandTotal] = useState(0.00)

  const [amDelivery, setAmDelivery] = useState(false);

  function handleAddNewProduct(e) {
    e.preventDefault()
    setProducts([
      ...products,
      {
        description: description,
        price: price,
        quantity: quantity
      }
    ])
    setDescription("")
    setPrice(0)
    setQuantity(0)
  }


  useEffect(() => {
    let currentTotal = 0;
    products.forEach(function (product) {
      currentTotal += product.price * product.quantity
    })
    setSubTotal(currentTotal.toFixed(2))
    let finalTotal = currentTotal + parseInt(deliveryCharge)
    setGrandTotal(finalTotal.toFixed(2))
  }, [products])


  return (
    <div>
      <div className='parent'>
        <div className='input'>
        <input type="text" autocomplete="on" name="text" class="input" placeholder="Employee"/>
        </div>
        <div className='radio-parent'> 
          <div class="radio-inputs">
            <label class="radio">
              <input type="radio" name="radio"/>
              <span onClick={() => setDelivOrPickup(false)} class="name">Delivery</span>
            </label>
            <label class="radio">
              <input type="radio" name="radio" checked/>
              <span onClick={() => setDelivOrPickup(true)} class="name">Pickup</span>
            </label>
          </div>
        </div>
      </div>

      <CustomerInfo />
      {delivOrPickup ? null : <RecipientInfo amDelivery={amDelivery} setAmDelivery={setAmDelivery} />}
      <br></br>
      <CardMessage />
      <br></br>
      <ProductInfo 
      description={description} 
      setDescription={setDescription} 
      price={price} 
      setPrice={setPrice}
      quantity={quantity}  
      setQuantity={setQuantity}
      handleAddNewProduct={handleAddNewProduct}
      />
      <br></br>
      <OrderTotal deliveryCharge={deliveryCharge} grandTotal={grandTotal} setDeliveryCharge={setDeliveryCharge} delivOrPickup={delivOrPickup} subTotal={subTotal} products={products} />
    </div>
  )
}

export default TakeOrder