'use client'

import Speakercard from "./speaker/speakercard.jsx";
import Banner from "./slugs/banner.jsx";
import Overview from "./slugs/overview.jsx";
import Register from "./slugs/register.jsx";
import Detail from './slugs/details.jsx'

const Events = () => {
  const speakercard = [
    {
      id: 1,
      img: '/speakers/1.png',
      name: 'Michael Mance',
      desc: 'Vice President of Corporate Finance',
      companyname: 'Baha Mar',
      iconimg: '/Vector.png'
    }
  ]
  return (
    <>
      <Banner/>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-20 ml-2">
        <Overview/>
        <Register/>
      </div>
      <Detail/>
    </>
  );
};

export default Events;