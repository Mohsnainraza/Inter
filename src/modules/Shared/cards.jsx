'use client'

const Cards = ({ img, heading }) => {
  return (
    <div className="h-[26rem] mb-[2rem] max-h-[30rem] w-full sm:w-[24rem] md:w-[25rem] rounded-lg bg-[#F4F4F4] flex flex-col text-left">
      <img src={img} alt="" className="h-[15rem] object-cover rounded-t-lg" />
      <div className="flex flex-col justify-between h-full px-4 py-8">
        <h2 className="font-semibold text-[1.3rem] ">{heading}</h2>
        <div className="flex">
          <button className="text-[#1877F2] font-semibold cursor-pointer gap-1 mr-3 mt-8">
            Learn
          </button>
          <img src="icon/arrow-right.svg" className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
