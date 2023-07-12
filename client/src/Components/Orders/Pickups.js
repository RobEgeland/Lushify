import React from 'react'
import PickupCard from './PickupCard'

const Pickups = ({pickUps}) => {

  let pickupList;
  
  if (pickUps) {
    console.log("ran")
    pickupList = pickUps.map(pickup =>
  
    <PickupCard 
    key={pickup.id}
    customerFname={pickup.customer_first_name}
    customerLname={pickup.customer_last_name}
    customerPhone={pickup.customer_phone}
    customerEmail={pickup.customer_email}
    total={pickup.grand_total}
    products={pickup.products}
    />)
  } else {
    pickupList = <div>No Pickups available.</div>;
  }
  
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