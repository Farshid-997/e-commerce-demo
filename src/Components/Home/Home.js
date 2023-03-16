import React from 'react'
import TopBar from '../TopBar/TopBar'
import BelowTopBar from '../BelowTopbar/BelowTopBar'
import CarouselItem from '../Carousel/Carousel'
import Items from '../Items/Items'
import NewArrival from '../NewArrival/NewArrival'
import Footer from '../Footer/Footer.jsx'
import BelowFooter from '../BelowFooter/BelowFooter'

export default function Home() {
  return (
    <div>

<TopBar></TopBar>
<BelowTopBar></BelowTopBar>
<CarouselItem/>
<Items/>
<NewArrival/>
<Footer></Footer>
<BelowFooter></BelowFooter>

    </div>
  )
}
