'use client'

import Card from "../shared/card.jsx";
import { MdSearch } from "react-icons/md";
import Link from "next/link";


const Comingevents = () => {
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
      date: "10 January 2025",
      heading: "Trends Shaping Digital Marketing in 2025",
      desc: "An in-depth webinar on the latest tools and strategies revolutionizing digital marketing.",
      img: '/cards/marketing1.png',
      type: "Marketing",
    },
    {
      id: 2,
      date: "22 February 2025",
      heading: "Email Marketing That Converts",
      desc: "Discover best practices to boost engagement and ROI from email campaigns.",
      img: '/cards/marketing2.png',
      type: "Marketing",
    },
    {
      id: 3,
      date: "18 March 2025",
      heading: "Building a Brand Through Storytelling",
      desc: "Learn how top marketers craft compelling brand stories that resonate.",
      img: '/cards/marketin3.png',
      type: "Marketing",
    },
    {
      id: 4,
      date: "30 September 2000",
      heading: "The Evolving Role of Financial Controllers",
      desc: "Financial Controller Leadership Forum: The Evolving Role of Financial Controllers.",
      img: "/company.jpg",
      type: "Finance",
    },
    {
      id: 5,
      date: "27 April 2025",
      heading: "Mastering Financial Risk Management",
      desc: "Techniques and tools for evaluating and mitigating financial risks.",
      img: "/cards/finance2.png",
      type: "Finance",
    },
    {
      id: 6,
      date: "06 Decmber 2000",
      heading:"Finance Webinar: Can A Software Vendor Lead Your Finance Innovation?",
      desc: "Finance Webinar: Can A Software Vendor Lead Your Finance Innovation?",
      img: "/devlo.jpg",
      type: "Finance",
    },

    {
      id: 7,
      date: "15 February 2025",
      heading: "Future of Work: HR Strategies for 2025",
      desc: "Exploring hybrid models, remote culture, and employee well-being.",
      img:'/cards/Human1.jpg',
      type: "Human Resource",
    },
    {
      id: 8,
      date: "10 April 2025",
      heading: "HR Tech Trends You Need to Know",
      desc: "Discover the tools transforming talent acquisition and retention.",
      img:'/cards/Human2.jpg',
      type: "Human Resource",
    },
    {
      id: 9,
      date: "21 May 2025",
      heading: "Leadership Development in Modern HR",
      desc: "Building resilient leadership pipelines in a changing workplace.",
      img: '/cards/human3.jpg',
      type: "Human Resource",
    },

    {
      id: 10,
      date: "02 March 2025",
      heading: "Defending Against Ransomware Attacks",
      desc: "Best practices for strengthening organizational cyber defenses.",
      img: '/cards/cyber1.jpg',
      type: "Cyber Security",
    },
    {
      id: 11,
      date: "25 April 2025",
      heading: "Zero Trust Architecture Explained",
      desc: "Implementing zero trust in large-scale IT environments.",
      img: "/cards/cyber2.jpg",
      type: "Cyber Security",
    },
    {
      id: 12,
      date: "13 May 2025",
      heading: "Insider Threats: Mitigation Strategies",
      desc: "How to identify and prevent security breaches from within.",
      img: '/cards/cyber3.png',
      type: "Cyber Security",
    },

    {
      id: 13,
      date: "01 March 2025",
      heading: "Next-Gen BI: Predictive Analytics in Action",
      desc: "Using data models to drive business strategy and innovation.",
      img: '/cards/business1.png',
      type: "Business Intelligence",
    },
    {
      id: 14,
      date: "19 April 2025",
      heading: "Dashboards That Drive Decisions",
      desc: "Designing intuitive dashboards that provide real-time insights.",
      img: '/cards/business2.png',
      type: "Business Intelligence",
    },
    {
      id: 15,
      date: "05 May 2025",
      heading: "From Data to Value: BI Use Cases",
      desc: "Real-world examples of BI driving business performance.",
      img: '/cards/business3.png',
      type: "Business Intelligence",
    },

    {
      id: 16,
      date: "08 February 2025",
      heading: "Modernizing Legacy Systems",
      desc: "Strategies for cloud migration and infrastructure updates.",
      img: '/data.jpg',
      type: "Information Technology",
    },
    {
      id: 17,
      date: "28 March 2025",
      heading: "DevOps at Scale",
      desc: "Integrating CI/CD pipelines and agile delivery in large teams.",
      img: '/cards/it2.png',
      type: "Information Technology",
    },
    {
      id: 18,
      date: "16 May 2025",
      heading: "The Rise of AIOps",
      desc: "How AI is transforming IT operations and monitoring.",
      img: '/cards/it3.png',
      type: "Information Technology",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[100%] h-[24rem] bg-[#EFF6FF] text-centersm:h-[22rem] text-center  md:h-[28rem]">
        <h1 className="font-bold text-[1.3rem] mt-20 sm:text-[1.7rem] md:text-[3.7rem]">
          Exclusive Executive Events
        </h1>
        <div className="flex flex-col mt-4 md:flex-row items-center justify-center w-[80%] md:w-[60%] ">
          <input
            placeholder="Search Events"
            className="w-full  h-9 sm:w-[28rem] lg:h-9 rounded-md  p-4 sm:rounded-r-none focus-visible:outline-none"
          />
          <select className="flex justify-between items-center text-[#6B6B6B] w-full  md:border-l-[0.1rem] md:w-[12rem] rounded-none hover:bg-[#fafafa] h-9">
            <option>All</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Human Resource</option>
            <option>Cyber Security</option>
            <option>Bussiness Intelligence</option>
            <option>IT</option>
            <option>More</option>
          </select>
          <button
            className="bg-[#1877F2] w-full sm:w-[34px] hover:bg-[#1877F2] sm:rounded-r-md flex items-center justify-center rounded-l-none h-9 py-2 px-1 text-2xl "
            // onClick={() => setName(each)}
          >
            <MdSearch className="text-white" />
          </button>
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
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-14 w-full text-[#868E96] ">
          {btns.map((btn) => (
            <button
              className="p-2 rounded-md text-normal border border-black-300 hover:bg-gray-100 hover:cursor-pointer"
              // onClick={() => setSelectedType(btn)}
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
        {/* <div className="flex flex-wrap justify-center gap-8 mt-[3rem]">
          {events.map((event) => (
            <Link to="/upcomingevents">
              <Card
                img={event.img}
                heading={event.heading}
                desc={event.desc}
                date={event.date}
                type={event.type}
              />
            </Link>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Comingevents;