import React, {useState, useEffect} from 'react'


const DeliveryCard = ({recipientFname, recipientLname, recipientPhone, address, city, postalCode, am_delivery, id, handleSelectedDeliveryAddition, handleSelectedDeliveryRemoval}) => {
  const [selected, setSelected] = useState(false)
  useEffect(() => {
    if(selected === true) {
      handleSelectedDeliveryAddition(id, am_delivery)
    }else {
      handleSelectedDeliveryRemoval(id)
    }
  }, [selected])
  return (
    <div className='delivery-card'>
      <label class="checkBox">
        <input onClick={() => {
          setSelected(!selected)}} id="ch1" type="checkbox"/>
        <div class="transition"></div>
      </label>
      <h4>{recipientFname} {recipientLname}</h4>
      <h4>{recipientPhone}</h4>
      <h4 >{address}</h4>
      <h4 style={{float: "right"}}>{city}</h4>
      <h4 style={{float: "right"}}>{postalCode}</h4>
      {am_delivery ? <h4><b>AM Delivery</b></h4> : null}
    </div>
  )
}

export default DeliveryCard