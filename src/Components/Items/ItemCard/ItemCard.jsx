import React from 'react'

import "./ItemCard.css"

import "swiper/css";
export default function ItemCard({items}) {
   
  return (
    <>
    <div >

<div className='below-div'>

   <p className='items'>{items}</p> 
   <p className='shops'>Shop</p>
</div>

</div>



    </>
  )
}
