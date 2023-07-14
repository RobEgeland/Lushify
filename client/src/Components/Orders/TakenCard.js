import React, {useState} from 'react'

const TakenCard = ({id, customerFname, customerLname, customerPhone, customerEmail, total, products}) => {
  
    const [status, setStatus] = useState("Taken/Delivered")

//   useEffect(() => {
//     if(status === "Taken/Delivered") {
//       handleTakenFromPickup(id)
//     }
//   }, [status])


    const productList = products.map(product => <li>{product.description} {product.quantity}</li>)

    const productStyle = {
        float: "right",
        "list-style-type": "none",
        "margin-right": "60px"
    }
    return (
        <div className='delivery-card'>
        <select onChange={(e) => setStatus(e.target.value)} className='status-dropdown'> 
            <option value="taken-delivered">Taken/Delivered</option> 
            <option value="order-recieved">Order Recieved</option> 
            <option value="design-complete">Design Complete</option> 
        </select>
        <h4>{customerFname} {customerLname}</h4>
        <h4>{customerPhone}</h4>
        <h4 >{customerEmail}</h4>
        <ul style={productStyle}>{productList}</ul>
        <h4 style={{float: "right"}}>Total: {total}$</h4>
        </div>
    )
  
}

export default TakenCard