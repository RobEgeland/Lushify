import React from 'react'

const TakeOrder = () => {
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
              <span class="name">Delivery</span>
            </label>
            <label class="radio">
              <input type="radio" name="radio"/>
              <span class="name">Pickup</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeOrder