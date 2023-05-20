import React from 'react'

const RecipientInfo = ({
    amDelivery, 
    setAmDelivery,
    recipientsFirstName,
    setRecipientsFirstName,
    recipientsLastName,
    setRecipientsLastName,
    setRecipientsAddressType,
    recipientsCompany,
    setRecipientsCompany,
    recipientsAddress,
    setRecipientsAddress,
    recipientsCity,
    setRecipientsCity,
    setRecipientsState,
    recipientsPostalCode,
    setRecipientsPostalCode,
    recipientsPhone,
    setRecipientsPhone
}) => {
  return (
    <div>
        <form>
            <div className='customer-info'>
                <div className='step-title'>
                    <h2>Recipent Info</h2>
                </div>
                <div className='inputs-parent'>
                <div class="toggler">
                        <h3>A.M. Delivery?</h3>
                        <input onClick={() => setAmDelivery(!amDelivery)} id="toggler-1" name="toggler-1" type="checkbox" value="1"/>
                        <label for="toggler-1">
                            <svg class="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                <polyline class="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                            </svg>
                            <svg class="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                <line class="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                                <line class="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                            </svg>
                        </label>
                    </div>
                    <table className='customer-table' cellSpacing={"50px"}>
                        <tr>
                            <td><input value={recipientsFirstName} onChange={(e) => setRecipientsFirstName(e.target.value)} required="" placeholder="First Name" type="text" class="input"/></td>
                            <td><input value={recipientsLastName} onChange={(e) => setRecipientsLastName(e.target.value)} required="" placeholder="Last Name" type="text" class="input"/></td>
                            <td><select onChange={(e) => {setRecipientsAddressType(e.target.value)}} className='input'>
                                    <option value="" disabled selected hidden>Address Type...</option>
                                    <option>Home</option>
                                    <option>Business</option>
                                    <option>Apartment</option>
                                    <option>School</option>
                                    <option>Hospital</option>
                                </select></td>
                        </tr>
                        <tr>
                            <td><input value={recipientsCompany} onChange={(e) => setRecipientsCompany(e.target.value)} placeholder="Company" type="text" class="input"/></td>
                            <td><input value={recipientsAddress} onChange={(e) => setRecipientsAddress(e.target.value)} required="" placeholder="Address" type="text" class="input"/></td>
                            <td><input value={recipientsCity} onChange={(e) => setRecipientsCity(e.target.value)}  required="" placeholder="City" type="text" class="input"/></td>
                        </tr>
                        <tr>
                            <td><select onChange={(e) => setRecipientsState(e.target.value)} class="input">
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                            </select></td>
                            <td><input value={recipientsPostalCode} onChange={(e) => setRecipientsPostalCode(e.target.value)} required="" placeholder="Postal Code" type="text" class="input"/></td>
                            <td><input value={recipientsPhone} onChange={(e) => setRecipientsPhone(e.target.value)} required="" placeholder="Phone" type="text" class="input"/></td>
                        </tr>
                    </table>
                </div>
            </div>
        </form>
    </div>
  )
}

export default RecipientInfo