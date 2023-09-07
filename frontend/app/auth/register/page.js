"use client"
import React, { useState } from 'react'
import "../../globals.css"
import Link from "next/link"
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const page = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    const [username, setusername] = useState("");

    const router = useRouter();

    async function registerUser(event) {
      event.preventDefault();
      const email = event.target[0].value;
      const name = event.target[1].value;
      const username = event.target[2].value;
      const password = event.target[3].value;

      if(!email || !name || !username || !password ){
        toast.error("Fill in all required fields !!! ")
      }
      else{
        try {
          const response = await axios.post('http://localhost:3001/auth/register', {
            email,
            name,
            username,
            password,
          }).then((response) => {
            toast.success("Registered Successfully !! ")
            setTimeout(() => {
              router.push("/auth/login")
            }, 1500);
          })
          .catch((error) => {
            console.log(error);
          })
        } 
        catch (error) {
          console.log(error);
        }
      }
    }

   // write code to check if email already exists in database
   if(email){
    axios.post('http://localhost:3001/auth/checkemail', {
      email,
    }).then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
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

          <form className='flex gap-2 flex-col' onSubmit={registerUser}>
            <input type="text"
              placeholder='Email'
              value={email}
              className='p-1 placeholder-slate-950 bg-stone-100 outline-0 border text-sm font-thin'
              onChange={(e) => setemail(e.target.value)}
            />
            <input type="text"
              placeholder='Full name'
              value={name}
              className='p-1 placeholder-slate-950 bg-stone-100 outline-0 border text-sm font-thin'
              onChange={(e) => setname(e.target.value)}
            />

            <input type="text"
              placeholder='username'
              value={username}
              className='p-1 placeholder-slate-950 bg-stone-100 outline-0 border text-sm font-thin'
              onChange={(e) => setusername(e.target.value)}
            />
            <input type="password"
              placeholder='Password'
              value={password}
              className='p-1 placeholder-slate-950 bg-stone-100 outline-0 text-sm border font-thin'
              onChange={(e) => setpassword(e.target.value)}
            />
            <button type="submit"
              value="Sign up"
              className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'
            >Register</button>
          </form>

          <div class="flex items-center">
            <div class="h-px bg-gray-300 flex-grow"></div>
            <div class="px-3 text-gray-500">OR</div>
            <div class="h-px bg-gray-300 flex-grow"></div>
          </div>

          <a href="" 
          className='flex items-center mx-auto text-sm text-blue-700'><img className='mr-1 w-6 h-6' src="https://cdn-teams-slug.flaticon.com/google.jpg" />Log in with Google</a>

        </div>

        <div className='w-72 text-sm text-blue-950 flex border ml-left-50 mt-3 p-4'>
          <p className='text-neutral-950 font-normal mr-1' >Already have an account?</p>
          <Link href = "/auth/login" className='text-blue-500 hover:cursor-pointer'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default page