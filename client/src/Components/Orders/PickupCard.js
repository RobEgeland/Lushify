import React from 'react'

const PickupCard = ({customerFname, customerLname, customerPhone, customerEmail, total, products}) => {
    console.log(products)
    const productList = products.map(product => <li>{product.description} {product.quantity}</li>)

    const productStyle = {
        float: "right",
        "list-style-type": "none",
        "margin-right": "60px"
    }
  return (
    <div className='delivery-card'>
      {/* <label class="checkBox">
        <input onClick={() => {
          setSelected(!selected)}} id="ch1" type="checkbox"/>
        <div class="transition"></div>
      </label> */}
      <h4>{customerFname} {customerLname}</h4>
      <h4>{customerPhone}</h4>
      <h4 >{customerEmail}</h4>
      <ul style={productStyle}>{productList}</ul>
      <h4 style={{float: "right"}}>Total: {total}$</h4>
    </div>
  )
}

export default PickupCard