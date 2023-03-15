import React from 'react'
import TopBar from '../TopBar/TopBar'
import BelowTopBar from '../BelowTopbar/BelowTopBar'
import CarouselItem from '../Carousel/Carousel'
import Items from '../Items/Items'
import NewArrival from '../NewArrival/NewArrival'

export default function Home() {
  return (
    <div>

<TopBar></TopBar>
<BelowTopBar></BelowTopBar>
<CarouselItem/>
<Items/>
<NewArrival/>

    </div>
  )
}
