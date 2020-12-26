import React, { useState, useEffect } from 'react';
import Messages from "../components/Message/Messages"
import axios from "axios"

export default function Test(props) {
    const [messages, setMessages] = useState([
        { msg: "Hi! How are you?", isUser: true, id: 123, isRead: true },
        { msg: "Good how are you?", isUser: false, id: 123 },
        { msg: "Very goood! I have a great job opportunity for you. Interested?", isUser: true, id: 123, isRead: true },
        { msg: "Shoot!", isUser: false, id: 123, isRead: false },
        { msg: "Lorem ipsum", isUser: true, id: 123, isRead: true },
    ])

    const uid = "123"

    useEffect(() => {
        console.log("Test add message", messages)
    
    }, [messages])


    return (
        <div >
            <Messages
                messages={messages}
                uid={uid}
            ></Messages>
            <button onClick={()=> {
                 axios.post('http://localhost:8000/seen', { seen: "1235" });
                // let newMsg = [...messages, { msg: "1234", isUser: true, id: 123, isRead: true }]
                // setMessages(newMsg)
            }}>Add Message</button>
        </div>
    )
}