'use client'
import { Router, useRouter } from 'next/navigation'
import { register } from '../../lib/data'
import React, {useState} from 'react'

export default function Register() {
  const [formData, setFormData] = useState({email:'', password:'', username: ''})
  const router = useRouter()
  const Submit = (event) => {
    event.preventDefault();
    register(formData).then(() => {
      router.push('/projects');
    });
  }
  return (
    <div className='w-6/12 rounded-xl bg-white mx-auto py-8 max-md:w-full '>
      <form className='flex flex-col mx-auto' onSubmit={Submit} >

        <label className='text-center text-lg font-bold text-primary'>Username</label>
        <input type='text ' id= 'username'
        value={formData.username}
        className='mx-auto w-6/12 border-2 rounded-lg border-secondary mb-4'
        onChange={(e) => setFormData({...formData, username: e.target.value})}/>
        <label className='text-center text-lg font-bold text-primary'>Email</label>
        <input type='text' value = {formData.email}
          id='email'
          className='mx-auto w-6/12 border-2 rounded-lg border-secondary mb-4 '
          onChange={(e) => setFormData({...formData, email: e.target.value})}/>
        <label className='text-center text-lg font-bold text-primary'>Password</label>
        <input type='password'
          value = {formData.password}
          name= 'password1'
          className='mx-auto w-6/12 border-2 rounded-lg border-secondary mb-4 '
          onChange={(e) => setFormData({...formData, password: e.target.value})}/>
        <input type = 'submit' value= 'Register' className=' bg-primary text-white font-bold border-4 border-secondary w-fit px-4 py-2 rounded-full mx-auto'/>
      </form>
    </div>
  )
}
