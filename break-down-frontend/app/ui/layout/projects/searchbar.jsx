import React from  'react'

export default function Searchbar
() {
  return (
    <div className='flex justify-between'>
      <form action="post" className='w-full flex justify-center'>
        <input type='text' name='search' className='w-9/12 border rounded-lg -mr-2 '/>
        <input type='submit' className='bg-maize p-2 rounded border' value='Search'/>
      </form>
    </div>
  )
}
