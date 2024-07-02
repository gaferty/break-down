import React from  'react'

export default function Searchbar() {
  return (
    <div className='flex justify-between'>
      <form action="post" className='w-full flex justify-center'>
        <input type='text' name='search' className='w-9/12 border border-4 border-secondary indent-3 rounded-full -mr-10 text-lg text-gray-800 '/>
        <input type='submit' className='bg-primary text-white font-bold py-2 px-6 rounded-r-full border-t-4 border-b-4 border-r-4 border-secondary' value='Search'/>
      </form>
    </div>
  )
}
