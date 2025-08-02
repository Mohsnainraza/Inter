'use client'

const Register = () => {
  return (
    <div className="bg-[#fff] flex flex-col items-center rounded-lg lg:right-[6.5rem] lg:top-[38rem] mt-[rem] md:mt-[0rem] w-[92%] sm:w-[35rem] :md">
          <h2 className="text-[2.2rem] font-bold mt-5">Reserve your spot</h2>
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
                Company
              </label>
              <input
                type="text"
                placeholder="Company"
                className="bg-[#ffffff] w-full h-[2.7rem] border-[#CBD5E1] rounded-md outline-1 p-1 px-2.5"
              />
            </div>
            <div className="flex flex-col w-[20rem] mb-5">
              <label className="text-[1rem] font-medium ml-1 mb-1 text-[#0F172A]">
               Email
              </label>
              <input
                type="text"
                placeholder="email"
                className="bg-[#ffffff] w-full h-[2.7rem] border-[#CBD5E1] rounded-md outline-1 p-1 px-2.5"
              />
            </div>
              <button className="w-full bg-[#1877F2] mt-3 rounded-md p-2 text-[#fff] cursor-pointer">
                Register
              </button>
          </div>
        </div>
  )
}
export default Register