import React, { useState } from 'react';

export default function login(){
    const [form, setForm] = useState({email:"", password:""});
    const [qr, setQr] = useState({loaded:false,code:""})

    let onSubmit = async (e) =>{
        e.preventDefault()
        let res = await fetch("/api/hello",{
          method: "Put",
          body: JSON.stringify(form)
        })
        let data = await res.json()
        setQr({code: data.code, loaded: true})
        console.log("Submited",form, "Data",data)
    }

    let onChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setForm({...form,[name]:value})
        console.log(e.target.value)
    }

    return(
        <div>
            
            <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"></img>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          start your 14-day free trial
        </a>
      </p>
    </div>
    <form onChange={(e)=>onChange(e)} onSubmit={(e)=> onSubmit(e)} class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"></input>
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input value={form.email} id="email-address" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"></input>
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input value={form.pw} id="password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"></input>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"></input>
          <label for="remember_me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>

      <img src={qr.code}/>

        </div>
    )

}