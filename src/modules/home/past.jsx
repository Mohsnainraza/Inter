'use client'

import Card from "../Shared/card";
import Link from "next/link";

const Past = () => {
  const btns = [
    "All",
    "Marketing",
    "Finance",
    "Human Resource",
    "Cyber Security",
    "Business Intelligence",
    "IT",
    "More",
  ];
  const events = [
    {
      id: 1,
      date: "Replay",
      heading: "The Evolving Role of Financial Controllers",
      desc: "Financial Controller Leadership Forum: The Evolving Role of Financial Controllers.",
      img: "/company.jpg",
      type: "Finance",
    },
    {
      id: 2,
      date: "Replay",
      heading: "Inside The State of Data Security Report",
      desc: "IT Webinar: Inside The State of Data Security Report",
      img: "/data.jpg",
      type: "Information Technology",
    },
    {
      id: 3,
      date: "Replay",
      heading: "Finance Webinar: Can A Software Vendor Lead Your Finance Innovation?",
      desc: "Finance Webinar: Can A Software Vendor Lead Your Finance Innovation?",
      img: "/devlo.jpg",
      type: "Finance",
    },
  ];
  return (
    
    <div className="mt-12 md:mt-34 text-center text-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Our Past Events
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-14 w-full text-[#868E96] ">
        {btns.map((btn,index) => (
          <button
          key={index}
            className="p-2 rounded-md text-normal border border-black-300 hover:bg-gray-100 hover:cursor-pointer"
            onClick={() => console.log("as")}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-[3rem]">
        {events.map((event) => (
          <Link href='/events'>
          <Card
            img={event.img}
            heading={event.heading}
            desc={event.desc}
            date={event.date}
            type={event.type}
          />
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-[#1877F2] border border-b-1 w-[406px] py-2 font-semibold rounded-md cursor-pointer">
           <Link href="/pastevent">View All Past Events</Link>
        </button>
      </div>
      </div>
    
  );
}

export default Past;