import React from 'react'

export function SquareCard(params) {
  return(
 <div className='bg-gray-100 border-2 border-secondary rounded w-90 h-fit hover:shadow hover:shadow-lg hover:shadow;tertiary'>
    <h2 className='bg-primary text-white text-lg px-5 font-bold text-center'> Project Title</h2>
    <div className="w-11/12 h-full flex flex-col jutify-evenly mx-auto">
            <div className='flex-1 mb-4'>
              <p className='w-9/10'>descriptive text that appears a a a a a a a a a a a a a a a a something else can be written here instead of the usual crap that is so terribble</p>
            </div>
            <div className='mb-4'>
              <p className="border-t-2 border-dotted border-black mb-1">Length</p>
              <p className="border-t-2 border-dotted border-black mb-1">Difficulty</p>
            </div>

    </div>

  </div>
  )
 }
export default function Card() {
  return (
    <div className="bg-white p-2 mt-4 rounded w-9/12 border flex justify-between mx-auto border-2 border-black">
        <div className="">
          <h2 className='text-xl'>Title</h2>
          <p>Text that underlines the thing That can be done in such a way that there is an absolute load of text</p>
          <div className="flex justify-evenly">
            <p>Coding</p>
            <p>Running</p>
            <p>Something else</p>
          </div>
        </div>
        <a className = 'bg-maize text-center content-center rounded-2xl' href="/">Add Project</a>
      </div>
  )
}
