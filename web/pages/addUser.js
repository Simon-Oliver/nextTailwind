import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import axios from 'axios'
import Pusher from 'pusher-js'
const uuid = require('uuid').v4;


export default function login() {
    const [form, setForm] = useState({ name: "", status: "" });
    const [response, setResponse] = useState({ res: "" })

    // useEffect(async () => {
    //   let count = 0
    //  try{
    //   let res = await fetch("/api/polling", {
    //     method: "Put",
    //     body: JSON.stringify({count:count})
    //   })
    //   let data = await res.json()
    //   setResponse(data)
    //   count++
    //  } catch(e){
    //   console.log("Client error -----", e)
    //  }
    // })



    let onSubmit = async (e) => {
        e.preventDefault()
        const id = uuid()
        axios.post(`http://localhost:8000/user/${id}`, { name: form.name, status: form.status });
        Router.push(`/chat/${id}`)

    }

    let onChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        console.log(e.target.value)
    }

    return (
        <div>
            <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8">
                    <form onChange={(e) => onChange(e)} onSubmit={(e) => onSubmit(e)} class="mt-8 space-y-6" action="#" method="POST">
                        <div class="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label for="name" class="sr-only">Email address</label>
                                <input value={form.email} id="name" name="name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"></input>
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                Join Chat
        </button>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    )

}