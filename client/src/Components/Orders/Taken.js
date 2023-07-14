import React from 'react'
import TakenCard from './TakenCard'


const Taken = ({taken}) => {
    let takenList;
    if (taken) {
        takenList = taken.map(order =>

        <TakenCard 
        key={order.id}
        id={order.id}
        customerFname={order.customer_first_name}
        customerLname={order.customer_last_name}
        customerPhone={order.customer_phone}
        customerEmail={order.customer_email}
        total={order.grand_total}
        products={order.products}
        />)
      } else {
        takenList = <div>No Pickups available.</div>;
      }
  return (
    <div className='delivery-info'>
        <h2>Taken/Delivered</h2>
        <br></br>
        <div className='delivery-list'>
            <h1>{takenList}</h1>
        </div>
    </div>
  )
}

export default Taken