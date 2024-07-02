import Link from 'next/link'
import React from 'react'

export function Login() {
  return (
      <Link href= "/" className="px-5 py-2 bg-primary border-2 border-secondary rounded-full text-white text-lg font-bold ">
        Log In
      </Link>
  )
}

export function NavLinks({name, link}) {
  return (
    <Link href={link} className="p-2 mx-4 rounded font-bold font-lg text-primary text-xl">
      {name}
    </Link>
  )

}

export function FilterButton({name}) {
  return(
    <button className='bg-primary border-2 border-secondary rounded-full font-bold px-4 py-2 text-white w-32 m-2 border-2'>
      {name}
    </button>
  )

}
