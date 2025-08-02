'use client'

const Speakercard = ({img,name,desc,iconimg,companyname}) => {
  return (
    <div className="w-[28rem] h-[28rem] bg-[#F4F4F4] rounded-md">
      <div className='flex items-center justify-center w-full mt-12 h-[12rem] rounded-full overflow-hidden'>
        <img src={img} className="w-[12rem] h-[12rem] object-cover rounded-full" />
        </div>
        <h2
          className="text-[1.2rem] font-bold mt-[3rem] px-6">
          {name}
        </h2>
        <p className="text-[#6B6B6B] px-6 mt-[0.8rem] text-[0.9rem]">
          {desc}
        </p>
        <div className='flex flex-row items-center justify-between mt-2'>
        <p className='text-[#6B6B6B] px-6 mt-[0.8rem] text-[0.9rem]'>{companyname}</p>
        <img src={iconimg} className="mt-6 pr-4" />
    </div>
    </div>
  )
}
export default Speakercard