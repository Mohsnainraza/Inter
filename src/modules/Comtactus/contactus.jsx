'use client'

import Detail from './details/detail.jsx'
import Form from './details/form.jsx'

export default function Contect() {
  return (
    <>
    <div className="flex justify-center items-center w-full bg-[#EFF6FF] h-[20rem] mt-12">
        <h2 className="font-bold text-3xl md:font-bold md:text-5xl">
          Contant us
        </h2>
      </div>
      <Detail/>
      <Form/>
      </>
  )
}