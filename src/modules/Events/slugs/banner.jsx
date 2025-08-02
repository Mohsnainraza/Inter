'use client'

const Banner = () => {
  return (
    <div
        className="bg-slate-400 pb-[2rem] sm: w-[90%] mx-auto sm:w-[85%] md:h-[35rem] rounded-2xl mt-[6rem] bg-no-repeat bg-cover bg-center after:rounded-2xl lg:h-[30rem]"
        style={{
          backgroundImage: `url(/banner.png)`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="pl-[2rem] md:pl-[4rem] text-[white]">
          <h3 className="absolute text-[#000] bg-[#fff] rounded-2xl px-2.5 py-1 mt-10 text-center w-[10rem] h-[30px] text-[13px] sm:w-[13rem] sm:text-[15px] sm:h-[32px]">
            Information Technology
          </h3>
          <div className="pt-30 pb-9">
            <h2 className="text-[1.3rem] sm:text-[1.7rem] md:text-[2.5rem] 2xl:leading-[3.5rem] font-extrabold w-[60%] sm:w-[50%] mt-[2rem] md:leading-[3rem] ">
              The Evolving Role of Financial Controllers
            </h2>
            <p className="pt-10">
              Financial Controller Leadership Forum: The Evolving Role of
              Financial Controllers.
            </p>
          </div>
          <div className="pt-[2rem] md:pt-[3rem] items-left flex flex-row">
            <img src="/icon/calendar-range.svg" className="w-5 h-5" />
            <h3 className="text-[#fff] text-[0.8rem] sm:text-[1rem]  rounded-full text-center w-max px-3">
              28 November 2023 | 2:00 PM ET - 3:00 PM ET
            </h3>
          </div>
        </div>
      </div>
  )
}
export default Banner