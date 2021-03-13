import React, { useState, useEffect, useContext } from 'react';
import Messages from "../components/Message/Messages"
import { TestContext } from "../components/Context"
import { ThemeContext } from "../components/Context"
import axios from "axios"


export default function Test(props) {

  const users = useContext(TestContext)
  const theme = useContext(ThemeContext)

  useEffect(() => {
    console.log(theme)
  })

  const renderUser = (data) => {
    return data.map(e => {
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
      {renderUser(users)}
    </div>
  )
}