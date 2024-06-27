import React from 'react'

export default function Card() {
  return (
    <div className="bg-white p-2 mt-4 rounded w-9/12 border flex justify-between mx-auto">
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
