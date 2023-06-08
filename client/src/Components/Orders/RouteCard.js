import React, {useEffect, useState} from 'react'
import RoutedDeliveryCard from './RoutedDeliveryCard'

const RouteCard = ({selectedDeliveries, routeNumber}) => {
    const [deliveryList, setDeliveryList] = useState([])
    const [amDeliveryList, setAmDeliveryList] = useState([])
    let deliveries;
    let amDeliveries;
    useEffect(() => {
        setAmDeliveryList([])
        setDeliveryList([])
        if (selectedDeliveries) {
            selectedDeliveries.map(del => {
                if (del.am_delivery === true) {
                    setAmDeliveryList(current => [...current, del])
                } else {
                    setDeliveryList(current => [...current, del])
                }
            });
        }
    }, [selectedDeliveries]);

    if (deliveryList.length > 0) {
        deliveries = deliveryList.map(delivery => (
            <RoutedDeliveryCard
                key={delivery.id}
                id={delivery.id}
                recipientFname={delivery.recipient_first_name}
                recipientLname={delivery.recipient_last_name}
                recipientPhone={delivery.recipient_phone}
                address={delivery.address}
                city={delivery.city}
                postalCode={delivery.postal_code}
                am_delivery={delivery.am_delivery}
            />
    ))}

    if (amDeliveryList.length > 0) {
        amDeliveries = amDeliveryList.map(delivery => (
            <RoutedDeliveryCard
                key={delivery.id}
                id={delivery.id}
                recipientFname={delivery.recipient_first_name}
                recipientLname={delivery.recipient_last_name}
                recipientPhone={delivery.recipient_phone}
                address={delivery.address}
                city={delivery.city}
                postalCode={delivery.postal_code}
                am_delivery={delivery.am_delivery}
            />
    ))}
    
    return (
        <div className='delivery-info'>
            <h2>Route {routeNumber}</h2>   
            <br></br>
            <div className='delivery-list'>
                {amDeliveries}
                {deliveries}
            </div>  
        </div>
    )
}

export default RouteCard