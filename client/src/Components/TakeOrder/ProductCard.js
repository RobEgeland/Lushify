import React from 'react'

const ProductCard = ({description, price, quantity}) => {
  return (
    <div>
        <table className='product-table' cellSpacing={"15px"}>
            <tr>
                <td className='desc-card'>{description}</td>
                <td className='price-card'>{price}</td>
                <td className='quant-card'>{quantity}</td>
            </tr>
        </table>
    </div>
  )
}

export default ProductCard