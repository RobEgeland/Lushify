import React from 'react'

const CustomerInfo = ({
  customerFirstName,
  setCustomerFirstName,
  customerLastName,
  setCustomerLastName,
  customerEmail,
  setCustomerEmail,
  customerCompany,
  setCustomerCompany,
  customerAddress,
  setCustomerAddress,
  customerCity,
  setCustomerCity,
  setCustomerState,
  customerPostalCode,
  setCustomerPostalCode,
  customerPhone,
  setCustomerPhone
}) => {
  return (
    <div>
      <form>
        <div className='customer-info'>
          <div className='step-title'>
            <h2>Customer Info</h2>
          </div>
          <div className='inputs-parent'>
            
            <table className='customer-table' cellSpacing={"50px"}>
              <tr>
                {/* <td></td> */}
                <td><input required="" placeholder="Search Customer" type="text" class="customer-search"/></td>
                
              </tr>
              <tr>
                <td><input value={customerFirstName} onChange={(e) => setCustomerFirstName(e.target.value)} required="" placeholder="First Name" type="text" class="input"/></td>
                <td><input value={customerLastName} onChange={(e) => setCustomerLastName(e.target.value)} required="" placeholder="Last Name" type="text" class="input"/></td>
                <td><input value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required="" placeholder="Email" type="text" class="input"/></td>
              </tr>
              <tr>
                <td><input value={customerCompany} onChange={(e) => setCustomerCompany(e.target.value)} required="" placeholder="Company" type="text" class="input"/></td>
                <td><input value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} required="" placeholder="Address" type="text" class="input"/></td>
                <td><input value={customerCity} onChange={(e) => setCustomerCity(e.target.value)} required="" placeholder="City" type="text" class="input"/></td>
              </tr>
              <tr>

                <td><select onChange={(e) => setCustomerState(e.target.value)} class="input">
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
                <td><input value={customerPostalCode} onChange={(e) => setCustomerPostalCode(e.target.value)} required="" placeholder="Postal Code" type="text" class="input"/></td>
                <td><input value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} required="" placeholder="Phone" type="text" class="input"/></td>
              </tr>
            </table>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CustomerInfo