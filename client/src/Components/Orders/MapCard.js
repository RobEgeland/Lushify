import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapCard = ({ deliveryList, amDeliveryList, mapOn }) => {
    const [address, setAddress] = useState([]);
    const [markers, setMarkers] = useState([]);
    const [urlAddress, setUrlAddress] = useState([])

    useEffect(() => {
        setAddress([]);

        amDeliveryList.forEach((del) => {
            setAddress((current) => [...current, `${del.address} ${del.city} ${del.postal_code}`]);
        });

        deliveryList.forEach((del) => {
            setAddress((current) => [...current, `${del.address} ${del.city} ${del.postal_code}`]);
        });
    
    }, [amDeliveryList, deliveryList]);
    useEffect(() => {
        const splitAddresses = []
            address.map(address => splitAddresses.push(address.split(" ").map(add => add +  "%20").join(" ").replaceAll(" ", "")))
            console.log(splitAddresses)
            setUrlAddress(splitAddresses)
    }, [address])

    useEffect(() => {

        // const url =  'https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=201%20s%20I%20Oka%20ave%20Mount%20Prospect%20IL&language=en';
        const options = {
	        method: 'GET',
	        headers: {
		        'X-RapidAPI-Key': '2ae9a5ab10msh543f324a932dd06p11fec0jsn2f08bf09f607',
		        'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
	        }
        }

        const fetchGeocode = async (address) => {
            const url = `https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=${address}IL&language=en`;
            const response = await fetch(url, options);
            const data = await response.json();
            return data.results.map(result => result.geometry.location);
        };

        const processGeocodes = async () => {
            if (urlAddress.length === 0) return; // No addresses to process
        
            const geocodePromises = urlAddress.map(fetchGeocode);
            const markerPositions = await Promise.all(geocodePromises);
        
            setMarkers(markerPositions.flat());
        };

        if (mapOn) {
            processGeocodes();
        }
        
    }, [mapOn, urlAddress])


    const mapContainerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: 42.153206513625285,
        lng: -88.1346040867516,
    };


    return (
        <div>
            {markers ? (
                <LoadScript googleMapsApiKey="AIzaSyBZBRz5afRga5Te7dGcp_L6gLV-THF5PMo">
                    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
                        {markers.map((marker, index) => (
                            <Marker key={index} position={{lat: marker.lat, lng: marker.lng
                            }} />
                        ))}
                    </GoogleMap>
                </LoadScript>
            ) : (
                <div>Loading map...</div>
            )}
        </div>
    );
};

export default MapCard;
