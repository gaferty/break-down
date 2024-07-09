import Link from 'next/link'
import React from 'react'
import { Login, NavLinks } from './Buttons'
export default function Navigation() {
  return (
    <div className = "flex justify-around mb-10 bg-white p-2">
      <div className=" w-full flex">
      <div className='flex-1 flex justify-end'>
        <NavLinks name='Home' link= "/"/>
        <NavLinks name='Projects' link= "/projects"/>
        <NavLinks name = 'Create' link = '/create'/>
      </div>
      <div className='flex-1 flex justify-end ml-auto'>
        <Login />
      </div>
      </div>
    </div>
  )
}
