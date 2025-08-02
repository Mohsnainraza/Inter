'use client'

import Banner from "@/modules/home/banner"
import  {Upcomingevents}  from "@/modules/home/Upcomingevents"
import Past from "@/modules/home/past"
import Recommended from "@/modules/home/recommended"

const Home = () => {
  return (
    <div>
    <Banner/>
    <Upcomingevents/>
    <Past/>
    <Recommended/>

    </div>

  )
}

export default Home