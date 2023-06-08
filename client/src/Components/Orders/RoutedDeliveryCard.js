import React from 'react'

const RoutedDeliveryCard = ({recipientFname, recipientLname, recipientPhone, address, city, postalCode, am_delivery, id}) => {
  return (
    <div className='delivery-card'>
        <h4>{recipientFname} {recipientLname}</h4>
        <h4>{recipientPhone}</h4>
        <h4 >{address}</h4>
        <h4 style={{float: "right"}}>{city}</h4>
        <h4 style={{float: "right"}}>{postalCode}</h4>
        {am_delivery ? <h4><b>AM Delivery</b></h4> : null}
    </div>
  )
}

export default RoutedDeliveryCard