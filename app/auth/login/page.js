"use client"
import React, { useState } from 'react'
import '../../globals.css'
import Link from 'next/link'


const page = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    async function LoginUser(event) {
      event.preventDefault()
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
  
      const data = await response.json()
      if(data.user){
        alert("Login Successful")
      }
      else{
        alert("Please check your username and password")
      }
    }

  return (
    <div className='flex items-center w-full h-screen'>
      <div className="left">
        <img className='h-72 ml-48' 
        src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW"/>
      </div>
      <div className="right">
        <div className='w-72 flex flex-col gap-4 border ml-left-50 mt-20 p-8'>
          <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png" 
          className='w-3/4 mx-auto' />

          <form className='flex gap-2 flex-col' onSubmit={LoginUser}>
            <input type="text" 
            placeholder='Email' 
            value={email}
            className='p-1 placeholder-slate-950 bg-stone-100 outline-0 border text-sm font-thin' 
            onChange={(e) => setemail(e.target.value)}
            />
            <input type="password" 
            placeholder='Password' 
            value={password}
            className='p-1 placeholder-slate-950 bg-stone-100 outline-0 text-sm border font-thin' 
            onChange={(e) => setpassword(e.target.value)}
            />
            <button type="submit" 
            value="Log In" 
            className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md' 
            >Login</button>
          </form>

          <div class="flex items-center">
            <div class="h-px bg-gray-300 flex-grow"></div>
            <div class="px-3 text-gray-500">OR</div>
            <div class="h-px bg-gray-300 flex-grow"></div>
          </div>

          <a href="" 
          className='flex items-center mx-auto text-sm text-blue-700'><img className='mr-1 w-6 h-6' src="https://cdn-teams-slug.flaticon.com/google.jpg" />Log in with Google</a>

          <a href="" className='mx-auto text-sm text-blue-950 font-thin'>Forgot password?</a>
        </div>

        <div className='w-72 text-sm text-blue-950 flex border ml-left-50 mt-3 p-4'>
          <p className='text-neutral-950 font-normal mr-1' >Don't have an account?</p>
          <Link href = "/auth/register" className='text-blue-500 hover:cursor-pointer'>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default page