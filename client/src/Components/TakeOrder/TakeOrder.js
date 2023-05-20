import React, {useEffect, useState} from 'react'
import CustomerInfo from './CustomerInfo'
import CardMessage from './CardMessage'
import ProductInfo from './ProductInfo'
import OrderTotal from './OrderTotal'
import RecipientInfo from './RecipientInfo'

const TakeOrder = () => {
  const [delivOrPickup, setDelivOrPickup] = useState(true)  //false = delivery
  const [description, setDescription] = useState("")

  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [products, setProducts] = useState([])

  const [subTotal, setSubTotal] = useState(0.00)
  const [deliveryCharge, setDeliveryCharge] = useState(0.00)
  const [grandTotal, setGrandTotal] = useState(0.00)

  const [customerFirstName, setCustomerFirstName] = useState("")
  const [customerLastName, setCustomerLastName] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [customerCompany, setCustomerCompany] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")
  const [customerCity, setCustomerCity] = useState("")
  const [customerState, setCustomerState] = useState("")
  const [customerPostalCode, setCustomerPostalCode] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")


  const [amDelivery, setAmDelivery] = useState(false)
  const [recipientsFirstName, setRecipientsFirstName] = useState("")
  const [recipientsLastName, setRecipientsLastName] = useState("")
  const [recipientsAddressType, setRecipientsAddressType] = useState("")
  const [recipientsCompany, setRecipientsCompany] = useState("")
  const [recipientsAddress, setRecipientsAddress] = useState("")
  const [recipientsCity, setRecipientsCity] = useState("")
  const [recipientsState, setRecipientsState] = useState("")
  const [recipientsPostalCode, setRecipientsPostalCode] = useState("")
  const [recipientsPhone, setRecipientsPhone] = useState("")

  const [cardMessage, setCardMessage] = useState("")

  Date.prototype.toDateInputValue = (function() {
    let local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  });

  let today = new Date().toDateInputValue();
  const [orderDate, setOrderDate] = useState(today)

  function handleAddNewProduct(e) {
    e.preventDefault()
    setProducts([
      ...products,
      {
        description: description,
        price: price,
        quantity: quantity
      }
    ])
    setDescription("")
    setPrice(0)
    setQuantity(0)
  }


  useEffect(() => {
    let currentTotal = 0;
    products.forEach(function (product) {
      currentTotal += product.price * product.quantity
    })
    setSubTotal(currentTotal.toFixed(2))
    let finalTotal = currentTotal + parseInt(deliveryCharge)
    setGrandTotal(finalTotal.toFixed(2))
  }, [products])


  return (
    <div>
      <div className='parent'>
        <div className='input'>
        <input type="text" autocomplete="on" name="text" class="input" placeholder="Employee"/>
        </div>
        <div className='radio-parent'> 
          <div class="radio-inputs">
            <label class="radio">
              <input onClick={() => setDelivOrPickup(false)} type="radio" name="radio"/>
              <span  class="name">Delivery</span>
            </label>
            <label class="radio">
              <input onClick={() => setDelivOrPickup(true)} type="radio" name="radio" checked/>
              <span  class="name">Pickup</span>
            </label>
          </div>
        </div>
      </div>

      <CustomerInfo
        customerFirstName={customerFirstName}
        setCustomerFirstName={setCustomerFirstName}
        customerLastName={customerLastName}
        setCustomerLastName={setCustomerLastName}
        customerEmail={customerEmail}
        setCustomerEmail={setCustomerEmail}
        customerCompany={customerCompany}
        setCustomerCompany={setCustomerCompany}
        customerAddress={customerAddress}
        setCustomerAddress={setCustomerAddress}
        customerCity={customerCity}
        setCustomerCity={setCustomerCity}
        setCustomerState={setCustomerState}
        customerPostalCode={customerPostalCode}
        setCustomerPostalCode={setCustomerPostalCode}
        customerPhone={customerPhone}
        setCustomerPhone={setCustomerPhone}
      />
      {delivOrPickup ? null : <RecipientInfo
        amDelivery={amDelivery} 
        setAmDelivery={setAmDelivery}
        recipientsFirstName={recipientsFirstName}
        setRecipientsFirstName={setRecipientsFirstName}
        recipientsLastName={recipientsLastName}
        setRecipientsLastName={setRecipientsLastName}
        setRecipientsAddressType={setRecipientsAddressType}
        recipientsCompany={recipientsCompany}
        setRecipientsCompany={setRecipientsCompany}
        recipientsAddress={recipientsAddress}
        setRecipientsAddress={setRecipientsAddress}
        recipientsCity={recipientsCity}
        setRecipientsCity={setRecipientsCity}
        setRecipientsState={setRecipientsState}
        recipientsPostalCode={recipientsPostalCode}
        setRecipientsPostalCode={setRecipientsPostalCode}
        recipientsPhone={recipientsPhone}
        setRecipientsPhone={setRecipientsPhone}
      />}
      <br></br>
      <CardMessage 
        cardMessage={cardMessage} 
        setCardMessage={setCardMessage} 
        orderDate={orderDate}
        setOrderDate={setOrderDate}
        />
      <br></br>
      <ProductInfo 
      description={description} 
      setDescription={setDescription} 
      price={price} 
      setPrice={setPrice}
      quantity={quantity}  
      setQuantity={setQuantity}
      handleAddNewProduct={handleAddNewProduct}
      />
      <br></br>
      <OrderTotal deliveryCharge={deliveryCharge} grandTotal={grandTotal} setDeliveryCharge={setDeliveryCharge} delivOrPickup={delivOrPickup} subTotal={subTotal} products={products} />
    </div>
  )
}

export default TakeOrder