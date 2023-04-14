import React, {useState} from 'react'
import NewPickupForm from './CustomerInfo'
import CardMessage from './CardMessage'
import ProductInfo from './ProductInfo'
import OrderTotal from './OrderTotal'

const TakeOrder = () => {
  const [delivOrPickup, setDelivOrPickup] = useState(false)  //false = delivery
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [products, setProducts] = useState([])

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


  return (
    <div>
      <div className='parent'>
        <div className='input'>
        <input type="text" autocomplete="on" name="text" class="input" placeholder="Employee"/>
        </div>
        <div className='radio-parent'> 
          <div class="radio-inputs">
            <label class="radio">
              <input type="radio" name="radio" checked/>
              <span onClick={() => setDelivOrPickup(false)} class="name">Delivery</span>
            </label>
            <label class="radio">
              <input type="radio" name="radio"/>
              <span onClick={() => setDelivOrPickup(true)} class="name">Pickup</span>
            </label>
          </div>
        </div>
      </div>

      <NewPickupForm />
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
      <OrderTotal products={products} />
    </div>
  )
}

export default TakeOrder