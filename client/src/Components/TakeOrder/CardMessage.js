import React, {useState} from 'react'

const CardMessage = ({cardMessage, setCardMessage, orderDate, setOrderDate}) => {
    
    
    


    return (
        <div className='card-message'>
            <div className='step-title'>
                <h2>Card Message</h2>
            </div>
            <div className='message'>
                <textarea value={cardMessage} onChange={(e) => setCardMessage(e.target.value)} spellCheck={true} class="input" placeholder='Message' rows="10" cols="50"/>
            </div>
            <div className='order-date'>
                <label>Delivery/Pickup Date: </label>
                <input class="input" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} type='date' />
            </div>
        </div>
    )
}

export default CardMessage