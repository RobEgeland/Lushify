import React, {useState} from 'react'
import NewPickupForm from './CustomerInfo'
import CardMessage from './CardMessage'
import ProductInfo from './ProductInfo'

const TakeOrder = () => {
  const [delivOrPickup, setDelivOrPickup] = useState(false)  //false = delivery


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
      <ProductInfo />
    </div>
  )
}

export default TakeOrder