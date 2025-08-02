'use client'

import ApiCard from "./api/apicard.jsx";

const About = () => {
  const cd = [
    {
      id: 1,
      heading: "Great Speaker",
      icon: "/mic.svg",
      desc: "How you transform your businessas technology, consumer, habits industry dynamic",
    },
    {
      id: 2,
      heading: "New People",
      icon: "/people.svg",
      desc: "How you transform your business as technology, consumer, habits industry dynamic",
    },
    {
      id: 3,
      heading: "Networking",
      icon: "/network.svg",
      desc: "How you transform your business as technology, consumer, habits industry dynamic",
    },
    {
      id: 4,
      heading: "Have Fun",
      icon: "/fun.svg",
      desc: "How you transform your businessas technology, consumer, habits industry dynamic",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center w-full bg-[#EFF6FF] h-[20rem] mt-12">
        <h2 className="font-bold text-3xl md:font-bold md:text-5xl">
          About us
        </h2>
      </div>
      <h1 className="font-semibold text-3xl ml-5 md:font-semibold md:text-4xl md:ml-16 mt-8">
        Why attend TOP Tech Events?
      </h1>

      <div className="flex flex-wrap justify-center gap-8 mt-[3rem]">
        {cd.map((cd) => (
          <ApiCard heading={cd.heading} desc={cd.desc} icon={cd.icon} />
        ))}
      </div>

      <div className="flex flex-col justify-center items-center bg-[#EFF6FF] h-[20rem] mt-20 mb-30">
        <h2 className="font-semibold text-3xl md:font-bold md:text-4xl ml-6 mb-8">
          Connect with your peers and learn new things
        </h2>
        <button className="bg-[#1877F2] rounded-md p-2.5 text-[#fff] w-[140px] cursor-pointer">
          Browse Events
        </button>
      </div>
    </>
  );
};

export default About;