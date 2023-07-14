import React, {useEffect, useState} from 'react'
import Deliveries from './Deliveries'
import Pickups from './Pickups'
import RouteCard from './RouteCard'
import Taken from './Taken'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

const Orders = ({today}) => {
    const [deliveries, setDeliveries] = useState([])
    const [selectedDeliveries, setSelectedDeliveries] = useState([])
    const [pickUps, setPickUps] = useState([])
    const [taken, setTaken] = useState([])
    const [currentCondition, setCurrentCondition] = useState()
    const [temp, setTemp] = useState()
    const [feelsLike, setFeelsLike] = useState()
    const [wind, setWind] = useState()
    const {currentUser} = useContext(UserContext)
    const [orderDate, setOrderDate] = useState(today)
    const url = currentUser ? `https://weatherapi-com.p.rapidapi.com/current.json?q=${currentUser.postal_code}` : null
    const options = {
	    method: 'GET',
        // need to hide this
	    headers: {
		'X-RapidAPI-Key': '2ae9a5ab10msh543f324a932dd06p11fec0jsn2f08bf09f607',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	    }
    };
    const [routeList, setRouteList] = useState([])
    const [routeNumber, setRouteNumber] = useState(1);
    useEffect(() => {
        if (currentUser) {
            fetch( url, options)
            .then(res => res.json())
            .then(data => {
            console.log(data)
            setCurrentCondition(data.current.condition.text)
            setTemp(data.current.temp_f)
            setFeelsLike(data.current.feelslike_f)
            setWind(data.current.wind_mph)
            })
        }
    },[currentUser])
    
    useEffect(() => {
        fetch(`/deliveries/${orderDate}`)
        .then (res => res.json())
        .then(data => setDeliveries(data))
        fetch(`/pickups/${orderDate}`)
        .then (res => res.json())
        .then(data => {
            console.log(data)
            setPickUps(data)
        })
    }, [orderDate])

    function handleRouteCreation() {
        setRouteList(current => [...current, <RouteCard routeNumber={routeNumber} selectedDeliveries={selectedDeliveries} />])
        let deliveryids = [];
        selectedDeliveries.map(del => deliveryids.push(del.id))
        let updatedDeliveries = deliveries.filter(del => !deliveryids.includes(del.id))
        setDeliveries(updatedDeliveries);
        setSelectedDeliveries([])
        setRouteNumber(routeNumber + 1)
    }

    function handleTakenFromPickup(id) {
        console.log("ran")
        let order;
        let newPickups 
        pickUps.forEach((value, index) => {
            if (value.id === id) {
                order = value
                newPickups = pickUps.filter(order => order.id !== id)
            }
        })
        
        setTaken([...taken, order])
        setPickUps(newPickups)
    }

 
    

    
  return (
    <div>
        <div className='weather'>
            <div style={{float: "left", marginLeft: "100px", marginTop: "15px"}}>{currentCondition}</div>
            <div style={{float: "left", marginLeft: "100px", marginTop: "15px"}}>{temp}℉</div>
            <div className='order-screen-date'>
                <input class="input" type='date' value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />
            </div>
            <div style={{float: "right", marginRight: "100px", marginTop: "15px"}}>Feels Like: {feelsLike}℉</div>
            <div style={{float: "right", marginRight: "100px", marginTop: "15px"}}>Wind: {wind}mph</div>
        </div>
        <Deliveries handleRouteCreation={handleRouteCreation} selectedDeliveries={selectedDeliveries} setSelectedDeliveries={setSelectedDeliveries} deliveries={deliveries} />
        <Pickups handleTakenFromPickup={handleTakenFromPickup} pickUps={pickUps}/>
        <Taken taken={taken}/>
        {routeList}
    </div>
  )
}

export default Orders