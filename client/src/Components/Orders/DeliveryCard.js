import React from 'react'

const DeliveryCard = ({recipientFname, recipientLname, recipientPhone, address, city, postalCode}) => {
  return (
    <div className='delivery-card'>
      <label class="checkBox">
        <input id="ch1" type="checkbox"/>
        <div class="transition"></div>
      </label>
      <h4>{recipientFname}</h4>
      <h4>{recipientLname}</h4>
      <h4>{recipientPhone}</h4>
      <h4 style={{float: "right"}}>{address}</h4>
      <h4 style={{float: "right"}}>{city}</h4>
      <h4 style={{float: "right"}}>{postalCode}</h4>
    </div>
  )
}

export default DeliveryCard