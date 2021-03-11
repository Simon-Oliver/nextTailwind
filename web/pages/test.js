import React, { useState, useEffect, useContext } from 'react';
import Messages from "../components/Message/Messages"
import TestContext from "../components/Context"
import axios from "axios"


export default function Test(props) {

  const [users, setUsers] = useState([
    { uid: 123, name: "Urs", status: "online" },
    { uid: 345, name: "Tom", status: "offline" },
    { uid: 908, name: "James", status: "online" }

  ])

  const context = useContext(TestContext)

  useEffect(() => {
    console.log("Initial Render")
    console.log("Our context ", context)
    return () => {
      cleanup
    }
  }, [])

  const renderUser = () => {
    return users.map(e => {
      return (<div>
        <button
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
        >
          <div
            className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
          >
            {e.name[0]}
          </div>
          <div className="ml-2 text-sm font-semibold">{e.name}</div>
        </button>
        <button
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
        ></button>
      </div>)
    })
  }

  return (
    <div >
      {renderUser()}
    </div>
  )
}