'use client'

const Card = ({ img, heading, desc, date, type }) => {
  return (
    <div className="h-[10rem] w-[20rem] md:w-[24rem] min-h-[30rem] flex flex-col items-left text-left gap-2">
      <p className="absolute text-[#fff] bg-blue-500 rounded-2xl px-1.5 mt-3 text-center ml-3 w-fit h-[23px] ">
        {type}
      </p>
      <img
        src={img}
        alt=""
        className="h-[15rem] w-full object-cover rounded-t-lg"
      />
      <p className="text-[0.9rem]">{date}</p>
      <h2 className="font-semibold text-[1.3rem]">{heading}</h2>
      <h4>{desc}</h4>
    </div>
  );
};

export default Card;
