'use client'

const Detail = () => {
  return (
    <>
      <div className="w-[89%] mx-auto mt-30">
        <h2 className="text-[2.2rem] font-bold">Let's Get in Touch</h2>

        <div className="flex flex-col sm:flex-row mt-[2rem]">
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full bg-[#EFF6FF] w-[3rem] h-[3rem]">
              <img src="/phone.svg" alt="" />
            </div>
            <span className="ml-[2rem]">+1 417-900-3844</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-[2rem]">
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full bg-[#EFF6FF] w-[3rem] h-[3rem]">
              <img src="/email.svg" alt="" />
            </div>
            <span className="ml-[2rem]">contact@pivotal-b2b.com</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-[2rem]">
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full bg-[#EFF6FF] w-[3rem] h-[3rem]">
              <img src="/location.svg" alt="" />
            </div>
            <span className="ml-[2rem] w-[60%]">
              16192 Coastal Highway Lewes, Delaware 19958 USA
            </span>
          </div>
        </div>
      </div>

      <div className="w-full mt-[6rem] md:mt-[20rem]">
        <iframe
          title="Map"
          width="100%"
          height="600"
          src="/map.png"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default Detail;