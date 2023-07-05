import React from 'react'
import PickupCard from './PickupCard'

const Pickups = ({pickUps}) => {

  const pickupList = pickUps.map(pickup =>
  
  <PickupCard 
    customerFname={pickup.customer_first_name}
    customerLname={pickup.customer_last_name}
    customerPhone={pickup.customer_phone}
    customerEmail={pickup.customer_email}
    total={pickup.grand_total}
    products={pickup.products}
  />)
  return (
    <div className='delivery-info'>
      <h2>Pickups</h2>
      <br></br>
      <div className='delivery-list'>
        {pickupList}
      </div>
    </div>
  )
}

export default Pickups