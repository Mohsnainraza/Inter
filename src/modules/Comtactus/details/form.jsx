'use client'

const Form = () => {
  return (
    <div className="bg-[#fff] flex flex-col items-center relative rounded-lg lg:absolute lg:right-[6.5rem] lg:top-[38rem] mt-[6rem] md:mt-[0rem] w-[92%] sm:w-[35rem] ml-[1rem] md: pb-[6rem] :md">
      <h2 className="text-[2.2rem] font-bold mt-5"> Send a message</h2>
      <div className="flex flex-col mt-[2rem]">
        <div className="flex flex-col w-[20rem] mb-5">
          <label className="text-[1rem] font-medium ml-1 mb-1 text-[#0F172A]">
            Full name
          </label>
          <input
            type="text"
            placeholder="Full name"
            className="bg-[#ffffff] w-full h-[2.7rem] border-[#CBD5E1] rounded-md outline-1 p-1 px-2.5"
          />
        </div>
        <div className="flex flex-col w-[20rem] mb-5">
          <label className="text-[1rem] font-medium ml-1 mb-1 text-[#0F172A]">
            Company name
          </label>
          <input
            type="text"
            placeholder="Company name"
            className="bg-[#ffffff] w-full h-[2.7rem] border-[#CBD5E1] rounded-md outline-1 p-1 px-2.5"
          />
        </div>
        <div className="flex flex-col w-[20rem] mb-5">
          <label className="text-[1rem] font-medium ml-1 mb-1 text-[#0F172A]">
            Work email
          </label>
          <input
            type="text"
            placeholder="Work email"
            className="bg-[#ffffff] w-full h-[2.7rem] border-[#CBD5E1] rounded-md outline-1 p-1 px-2.5"
          />
        </div>
        <div className="flex flex-col w-[20rem] mb-5">
          <label className="text-[1rem] font-medium ml-1 mb-1 text-[#0F172A]">
            Phone no
          </label>
          <input
            type="number"
            placeholder="Phone no"
            className="bg-[#ffffff] w-full h-[2.7rem] border-[#CBD5E1] rounded-md outline-1 p-1 px-2.5"
          />
        </div>
        <div className="flex flex-col w-[20rem] mb-2">
          <label className="text-[1rem] font-medium ml-1 mb-1 text-[#0F172A]">
            Message
          </label>
          <textarea
            type="text"
            placeholder="Message"
            className="bg-[#ffffff] w-full h-[4.2rem] border-[#CBD5E1] rounded-md outline-1 p-1 px-2.5"
          />
        </div>
      <div>
        <input type="checkbox" className="mr-2 mt-5 ml-2" />Accept terms and condition
        <button className="w-full bg-[#1877F2] mt-3 rounded-md p-2 text-[#fff] cursor-pointer">Submit</button>
      </div>
      </div>
    </div>
  );
};
export default Form;