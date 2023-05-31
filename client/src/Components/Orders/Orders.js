import React, {useEffect, useState} from 'react'
import Deliveries from './Deliveries'
import Pickups from './Pickups'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

const Orders = () => {
    const [deliveries, setDeliveries] = useState([])
    const [pickUps, setPickUps] = useState([])
    const [currentCondition, setCurrentCondition] = useState()
    const [temp, setTemp] = useState()
    const [feelsLike, setFeelsLike] = useState()
    const [wind, setWind] = useState()
    const {currentUser} = useContext(UserContext)
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${currentUser.postal_code}`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2ae9a5ab10msh543f324a932dd06p11fec0jsn2f08bf09f607',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
    useEffect(() => {
        fetch( url, options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCurrentCondition(data.current.condition.text)
            setTemp(data.current.temp_f)
            setFeelsLike(data.current.feelslike_f)
            setWind(data.current.wind_mph)
        })
    },[currentUser])

    useEffect(() => {
        fetch('/deliveries')
        .then (res => res.json())
        .then(data =>setDeliveries(data))
        fetch('/pickups')
        .then (res => res.json())
        .then(data => setPickUps(data))
    }, [])

    
  return (
    <div>
        <div className='weather'>
            <div style={{float: "left", marginLeft: "150px", marginTop: "15px"}}>{currentCondition}</div>
            <div style={{float: "left", marginLeft: "150px", marginTop: "15px"}}>{temp}℉</div>
            <div style={{float: "right", marginRight: "100px", marginTop: "15px"}}>Feels Like: {feelsLike}℉</div>
            <div style={{float: "right", marginRight: "130px", marginTop: "15px"}}>Wind: {wind}mph</div>
        </div>
        <Deliveries deliveries={deliveries} />
        <Pickups pickUps={pickUps}/>
    </div>
  )
}

export default Orders