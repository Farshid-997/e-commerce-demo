import React from 'react'
import "./NewArrivalProduct.css"
export default function NewArrivalProduct({ item }) {
    console.log("prod",item)
  return (
    <div>
<div className='product-div'>


<h6 className='p-title'>{item.title}</h6>
      <p className='p-desc'>{item.description.slice(0,15)}</p>
     
      <img src={item.image} alt="p-img"  className='p-img'/>
      <div className='d-flex justify-content-between ps-2 pe-2'>
      <s>RS RS 60.000</s>
      <p className='p-price'>RS {item.price}</p>
    
      </div>
      <button className='add-cart-btn'>Add to cart</button>
     
</div>



    </div>
  )
}
