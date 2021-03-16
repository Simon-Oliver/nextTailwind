import React, { useState, useEffect, useContext } from 'react';
import Messages from "../components/Message/Messages"
import { TestContext } from "../components/Context"
import { ThemeContext } from "../components/Context"
import styles from '../styles/Home.module.css'
import axios from "axios"


export default function Test(props) {

  const { data, setData } = useContext(TestContext)
  const theme = useContext(ThemeContext)

  useEffect(() => {
    console.log(theme)
  })

  const renderUser = (el) => {
    console.log(el)
    return el.map(e => {
      return (<div>
        <button
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
        >
          <div
            className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
          >
            {e.boxName[0]}
          </div>
          <div className="ml-2 text-sm font-semibold">{e.boxName}</div>
        </button>
        <button
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
        ></button>
      </div>)
    })
  }

  return (
    <div className={theme ? styles.dark : ""}>
      {renderUser(data)}
    </div>
  )
}