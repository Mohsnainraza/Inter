'use client'

import Speakercard from "../speaker/speakercard";

const Detail = () => {
  const speakercard = [
    {
      id: 1,
      img: "/speakers/1.png",
      name: "Michael Mance",
      desc: "Vice President of Corporate Finance",
      companyname: "Baha Mar",
      iconimg: "/Vector.png",
    },
     {
      id: 2,
      img: "/speakers/2.png",
      name: "Michael Mance",
      desc: "Vice President of Corporate Finance",
      companyname: "Baha Mar",
      iconimg: "/Vector.png",
    },
     {
      id: 3,
      img: "/speakers/3.png",
      name: "Michael Mance",
      desc: "Vice President of Corporate Finance",
      companyname: "Baha Mar",
      iconimg: "/Vector.png",
    },
     {
      id: 4,
      img: "/speakers/4.png",
      name: "Michael Mance",
      desc: "Vice President of Corporate Finance",
      companyname: "Baha Mar",
      iconimg: "/Vector.png",
    },
     {
      id: 5,
      img: "/speakers/5.png",
      name: "Michael Mance",
      desc: "Vice President of Corporate Finance",
      companyname: "Baha Mar",
      iconimg: "/Vector.png",
    },



  ];
  return (
    <div className="bg-[#FAFAFA] w-full pb-[6rem]">
      <div className="w-[89%] mx-auto mt-[rem]">
        <h2  className="text-center text-[2.2rem] font-bold pt-[5rem]">Speaker</h2>
        <div className="gap-20 mt-[3rem] flex flex-wrap items-center justify-center">
            {speakercard.map((speakercard)=>(
            <Speakercard
            img={speakercard.img}
            name={speakercard.name}
            desc={speakercard.desc}
            companyname={speakercard.companyname}
            iconimg={speakercard.iconimg}
            />
            ))}

        </div>
        <h2 className="text-center text-[2.2rem] font-bold pt-[5rem]">Sponsors</h2>
        <div className="gap-20 flex flex-wrap flex-row items-center justify-around mt-8">
            <img src="/sponers/1.png" className="w-[11rem] pt-7" />
            <img src="/sponers/2.png" className="w-[11rem]" />
            <img src="/sponers/3.png" className="w-[11rem]" />
        </div>
        <h2 className="text-center text-[2.2rem] font-bold pt-[6rem]">
            Organizers
        </h2>
        <div className="flex items-center justify-center mt-12">
        <img src="/sponers/4.png" className=" w-[11rem] h-[rem]" />
      </div>
      </div>
    </div>
  );
};
export default Detail;