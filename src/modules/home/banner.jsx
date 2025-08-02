'use client'

const Banner = () => {
  return (
    <>
      
      <div className="text-center mt-34 text-black">
        <h1 className=" text-5xl md:text-8xl font-bold mb-9">
          The Leading <span className="text-blue-500"> Events </span> Platform
        </h1>
        <p className="text-2xl font-light">
          Explore,RSVP & Attend Excutive Forums, Webinars & Conferences focused
          on B2B Tecnology
        </p>
      </div>
      <div
        className="bg-slate-400 min-h-[26rem] pb-[2rem] sm: w-[90%] mx-auto sm: sm:w-[85%] rounded-2xl mt-[6rem] bg-no-repeat bg-cover bg-center after:content-[''] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-gradient-to-r after:from-blue-500 after:via-blue-500 after:to-transparent after:rounded-2xl  "
        style={{
          backgroundImage: `url(/company.jpg)`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="pl-[2rem] md:pl-[4rem] text-[white] relative z-40">
          <div className="pt-[2rem] md:pt-[3rem] items-left flex flex-row">
            <img src="/icon/calendar-range.svg" className="w-5 h-5" />
            <h3 className="text-[#fff] text-[0.8rem] sm:text-[1rem]  rounded-full text-center w-max px-3">
              28 November 2023
            </h3>
          </div>
          <h2 className="text-[1.3rem] sm:text-[1.7rem] md:text-[2.5rem] 2xl:leading-[3.5rem] font-extrabold w-[60%] sm:w-[50%] mt-[2rem] md:leading-[3rem] ">
            The Evolving Role of Financial Controllers
          </h2>
          <div>
            <h3 className="text-[1.1rem] 2xl:text-[1.3rem] font-medium pt-[2rem] md:pt-[2rem]">
              Financial Controller Leadership Forum: The Evolving Role of
              Financial Controllers.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;