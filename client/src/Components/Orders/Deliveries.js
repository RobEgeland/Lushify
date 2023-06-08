import React, { useEffect, useState } from 'react'
import DeliveryCard from './DeliveryCard'

const Deliveries = ({deliveries}) => {
  const [amDeliveries, setAmDeliveries] = useState([])
  const [regDeliveries, setRegDeliveries] = useState([])
  const [selectedDeliveries, setSelectedDeliveries] = useState([])
  let deliveryList;
  let amDeliveryList;

  useEffect(() => {
    setAmDeliveries([])
    setRegDeliveries([]);
    if (deliveries) {
      deliveries.map(del => {
        if (del.am_delivery === true) {
          setAmDeliveries(current => [...current, del]);
        } else {
          setRegDeliveries(current => [...current, del]);
        }
      });
    }
  }, [deliveries]);
  if (regDeliveries.length > 0) {
    deliveryList = regDeliveries.map(delivery => (
      <DeliveryCard
        key={delivery.id}
        id={delivery.id}
        recipientFname={delivery.recipient_first_name}
        recipientLname={delivery.recipient_last_name}
        recipientPhone={delivery.recipient_phone}
        address={delivery.address}
        city={delivery.city}
        postalCode={delivery.postal_code}
        am_delivery={delivery.am_delivery}
        handleSelectedDeliveryAddition={handleSelectedDeliveryAddition}
        handleSelectedDeliveryRemoval={handleSelectedDeliveryRemoval}
      />
    ));
  } else {
    deliveryList = <div>No regular deliveries available.</div>;
  }
  if (amDeliveries.length > 0) {
    amDeliveryList = amDeliveries.map(delivery => (
      <DeliveryCard
        key={delivery.id}
        id={delivery.id}
        recipientFname={delivery.recipient_first_name}
        recipientLname={delivery.recipient_last_name}
        recipientPhone={delivery.recipient_phone}
        address={delivery.address}
        city={delivery.city}
        postalCode={delivery.postal_code}
        am_delivery={delivery.am_delivery}
        handleSelectedDeliveryAddition={handleSelectedDeliveryAddition}
        handleSelectedDeliveryRemoval={handleSelectedDeliveryRemoval}

      />
    ));
  } else {
    amDeliveryList = <div>No A.M. deliveries available.</div>;
  }

  function handleSelectedDeliveryAddition(id, am_delivery) {
  
    let currentdelivery;
    if(am_delivery === true) {
      currentdelivery = amDeliveries.find(del => del.id === id)
    }else {
      currentdelivery = regDeliveries.find(del => del.id === id)
    }
    setSelectedDeliveries(current => [...current, currentdelivery])
  }

  function handleSelectedDeliveryRemoval(id) {
    const updatedDeliveries = selectedDeliveries.filter(del => del.id !== id)
    setSelectedDeliveries(updatedDeliveries)
  }


  
  return (
    <div className='delivery-info'>
      <h2>Deliveries</h2>
      <br></br>
      <div className='delivery-list'>
        {amDeliveryList}
        {deliveryList}
      </div>
      
    </div>
  )
}

export default Deliveries