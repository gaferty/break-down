'use client'
import React, {useState} from 'react'
import { getJwt } from '../../lib/data';
import '../../styles/session.module.scss'

export default function Login() {
  const [formData, setformData] = useState({username:'', password: ''})
  const submit = (event) => {
    event.preventDefault()
    getJwt(formData)
  };
   return (
  <div className="flex flex-col justify-center bg-white py-20 rounded-2xl mr-10" >
    <form className="flex flex-col justify-center" onSubmit={submit}>
      <label className="text-center text-lg font-bold text-primary mb-2">Username</label>
      <input type="text"
        className="mb-4 p-2 w-6/12 text-center mx-auto border-2 border-secondary rounded-lg"
        value={formData.username}
        onChange = {(e) => setformData({...formData, username: e.target.value})}></input>
      <label className="text-center text-lg font-bold text-primary mb-2">Password</label>
      <input type="password"
        value={formData.password}
        className="mb-4 p-2 w-6/12 text-center mx-auto border-2 border-secondary rounded-lg"
        onChange = {(e) => setformData({...formData, password: e.target.value})}/>
      <input type="submit" className="bg-primary mx-auto text-white border-4 w-fit px-5 py-2 rounded-full border-secondary" value = "Log In"/>
    </form>
  </div>
)};
