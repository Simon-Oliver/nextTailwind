import React, { useState, useEffect } from 'react';
import Messages from "../components/Message/Messages"
import axios from "axios"

export default function Test(props) {

    const [users, setUsers] = useState([
        {uid:123, name:"Urs", status:"online"},
        {uid:345, name:"Tom", status:"offline"},
        {uid:908, name:"James", status:"online"}
        
    ])
   
    useEffect(() => {
       console.log("Initial Render")
        return () => {
            cleanup
        }
    },[])

    const renderUser = () => {
        return users.map(e=> {
            return(<div>{e.name}</div>)
        })
    }

    return (
        <div >
            {renderUser()}
        </div>
    )
}