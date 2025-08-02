'use client'

import Cards from "../Shared/cards"
import Link from "next/link"

const Recommended=()=> {

    const Card = [
        {
            id:1,
            img:"/web.png",
            heading: "When is the Best Day and Time to Host a Webinar",
        },
        {
            id:2,
            img:"/img.jpg",
            heading: "Level Up Your Tech Skills at San Francisco’s Hottest Conferences in 2023",
        },
        {
            id:3,
            img:"/evn.jpg",
            heading: "How To Promote Virtual Events",
        },
    ]

  return (
   <div className="mb-30 mt-12 md:mt-34 text-center text-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Recommeded Blogs
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8 mt-[3rem]">
        
        {Card.map((Card) => (
        //   <Link herf= "/home">
          <Cards
            img={Card.img}
            heading={Card.heading}
          />
        //   </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-[#1877F2] border border-b-1 w-[406px] py-2 font-semibold rounded-md cursor-pointer">View All Blogs</button>
      </div>
    </div>
  )
}

export default Recommended;