'use client'


 function Footer() {
  return (
    
     <footer className='text-black w-full mt-0 bg-gray-100 px-6 py-8'>
        <div className='flex flex-col lg:flex-row justify-center lg:justify-evenly gap-8 max-w-7xl mx-auto'>
          <div className='list-none max-w-xs '>
            <img className='mb-6' src='/logo.png' alt="company logo" />
            <li className='font-medium text-sm line-clamp-3'>The leading Events Platform to Explore,
               RSVP & Attend executive forums,Webinars & conferences focused
               on B2B Technology</li>
            <img className='mt-6 ' src='/Vector.png' alt="social icon" />
          </div>
          <div className='list-none'>
            <li className='font-bold mb-3'>To know More</li>
            <li className='font-semimedium mb-2'>Events</li>
            <li className='font-semimedium mb-2'>Resources</li>
            <li className='font-semimedium mb-2'>About US</li>
            <li className='font-semimedium mb-2'>Contant Us</li>
          </div>
          <div className='list-none'>
            <li className='font-bold mb-3'>It may Interest You</li>
            <li className='font-semimedium mb-2'> Cookies policy </li>
            <li className='font-semimedium mb-2'>Terms of use</li>
            <li className='font-semimedium mb-2'>do not sell my personal information</li>
          </div>
        </div>
        <div className='border-t mt-20 flex justify-center'>
          <p className='font-medium mt-6 md: ml-3'>© 2023 TopTech Events by Pivotal B2B LLC . All rights reserved</p>
        </div>
      </footer>


  )
}

export default Footer