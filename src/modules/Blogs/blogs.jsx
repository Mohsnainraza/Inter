'use client'

import Cards from "../shared/cards.jsx";

const Blogs = () => {
  const Card = [
    {
      id: 1,
      img: "/web.png",
      heading: "When is the Best Day and Time to Host a Webinar",
      button: "Learn more →",
    },
    {
      id: 2,
      img: "/img.jpg",
      heading:
        "Level Up Your Tech Skills at San Francisco's Hottest Conferences in 2023",
      button: "Learn more →",
    },
    {
      id: 3,
      img: "/evn.jpg",
      heading: "How To Promote Virtual Events",
      button: "Learn more →",
    },
  ];
  return (
    <>
      <div className="text-center w-full -h-[20rem] pb-26 mt-9 bg-[#EFF6FF]">
        <h2 className="font-bold text-3xl md:font-bold md:text-5xl pt-36 ">
          Blogs
        </h2>
        <p className="mt-5 font-normal">
          Don't miss out on these valuable blogs to know more about the industry
          leaders and gain insights into the latest trends and innovations.
        </p>
      </div>

      <div className="mt-12 mb-20 md:mt-34 text-center text-black">
        <div className="flex flex-wrap justify-center gap-8 mt-[3rem]">
          {Card.map((Card) => (
              <Cards
                img={Card.img}
                heading={Card.heading}
                button={Card.button}
              />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-[3rem]">
          {Card.map((Card) => (
              <Cards
                img={Card.img}
                heading={Card.heading}
                button={Card.button}
              />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;