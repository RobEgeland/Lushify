import React, { useEffect, useState } from 'react'
import DeliveryCard from './DeliveryCard'

const Deliveries = ({deliveries}) => {
  const [amDeliveries, setAmDeliveries] = useState([])
  const [regDeliveries, setRegDeliveries] = useState([])

  useEffect(() => {
    deliveries.map(del => {
      if (del.am_deliveries === true) {
        setAmDeliveries(current => [...current, del])
      }else {
        setRegDeliveries(current => [...current, del])
      }
    })
  },[])
  
  return (
    <div className='customer-info'>
      {amDeliveries.map(delivery => <DeliveryCard recipientFname={delivery.recipient_first_name} recipientLname={delivery.recipient_last_name}/>)}
      {regDeliveries.map(delivery => <DeliveryCard recipientFname={delivery.recipient_first_name} recipientLname={delivery.recipient_last_name}/>)}

    </div>
  )
}

export default Deliveries