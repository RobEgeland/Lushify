import React, {useState} from 'react'

const CardMessage = () => {
    Date.prototype.toDateInputValue = (function() {
        let local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });

    let today = new Date().toDateInputValue();
    const [orderDate, setOrderDate] = useState(today)
    
    


    return (
        <div className='card-message'>
            <div className='step-title'>
                <h2>Card Message</h2>
            </div>
            <div className='message'>
                <textarea class="input" placeholder='Message' rows="10" cols="50"/>
            </div>
            <div className='order-date'>
                <label>Delivery/Pickup Date: </label>
                <input class="input" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} type='date' />
            </div>
        </div>
    )
}

export default CardMessage