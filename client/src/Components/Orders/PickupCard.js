import React, {useState, useEffect} from 'react'

const PickupCard = ({handleTakenFromPickup, id, customerFname, customerLname, customerPhone, customerEmail, total, products, status}) => {
  const [orderStatus, setOrderStatus] = useState(status)

  useEffect(() => {
    if(status === "taken-delivered") {
      console.log('ran')
      handleTakenFromPickup(id)
    }
  }, [status])

    console.log(products)
    const productList = products.map(product => <li>{product.description} {product.quantity}</li>)

    const productStyle = {
        float: "right",
        "list-style-type": "none",
        "margin-right": "60px"
    }
  return (
    <div className='delivery-card'>
      <select onChange={(e) => setOrderStatus(e.target.value)} className='status-dropdown'> 
        <option value="order-recieved">Order Recieved</option> 
        <option value="design-complete">Design Complete</option> 
        <option value="taken-delivered">Taken/Delivered</option> 
      </select>
      <h4>{customerFname} {customerLname}</h4>
      <h4>{customerPhone}</h4>
      <h4 >{customerEmail}</h4>
      <ul style={productStyle}>{productList}</ul>
      <h4 style={{float: "right"}}>Total: {total}$</h4>
    </div>
  )
}

export default PickupCard