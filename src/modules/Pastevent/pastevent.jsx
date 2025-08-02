'use client'

import { MdSearch } from "react-icons/md";
import Card from "../shared/card.jsx";
import Link from "next/link";

const Pastevent = () => {
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
      heading:
        "Finance Webinar: Can A Software Vendor Lead Your Finance Innovation?",
      desc: "Finance Webinar: Can A Software Vendor Lead Your Finance Innovation?",
      img: "/devlo.jpg",
      type: "Finance",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[100%] h-[24rem] bg-[#EFF6FF] text-centersm:h-[22rem] text-center  md:h-[28rem]">
        <h1 className="font-bold text-[1.3rem] mt-20 sm:text-[1.7rem] md:text-[3.7rem]">
          Exclusive Executive Events
        </h1>
        <div className="flex flex-col mt-4 sm:flex-row items-center gap-2 sm:gap-0 ">
          <input
            placeholder="Search Events"
            className="w-full h-9 sm:w-[28rem] lg:h-9 rounded-md border-0 p-4 sm:rounded-r-none focus-visible:outline-none "
          />
          <select className="flex justify-between items-center  text-[#6B6B6B] w-[85px] md:border-l-[0.1rem] md:w-[12rem] rounded-none hover:bg-[#fafafa] h-9">
            <option>All</option>
          </select>
          <i className="bg-[#1877F2]  hover:bg-[#1877F2] sm:rounded-r-md sm:w-[34px] rounded-l-none h-9 py-2 px-1 text-2xl ">
            <MdSearch />
          </i>
        </div>
        <div className="md:flexflex-col items-center py-16">
          <button className="bg-blue-500 mr-5 py-3 px-3 rounded-md text-[#fff] font-medium cursor-pointer">
            Upcoming Events
          </button>
          <button className="bg-[#ffffff] py-3 px-3 rounded-md font-medium cursor-pointer">
            Past Events
          </button>
        </div>
      </div>

      <div className="mt-12 md:mt-34 text-center text-black">
        <div className="flex flex-wrap items-center justify-center gap-14 w-full text-[#868E96] ">
          {btns.map((btn) => (
            <button
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
      </div>
    </>
  );
};

export default Pastevent