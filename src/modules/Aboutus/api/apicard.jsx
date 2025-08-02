'use client'

const ApiCard = ({icon,heading, desc}) => {
  return (
    <div className="h-[10rem] w-full sm:w-[24rem] md:w-[25rem] flex flex-col items-left text-left gap-2 mt-30 ml-6">
      <img src={icon} alt="" className="h-13 w-13 " />
      <h2 className="font-semibold text-[1.3rem]">{heading}</h2>
      <h4>{desc}</h4>
    </div>
  )
}

export default ApiCard