import React, { useEffect, useState } from 'react'
import axios from "axios"

import Message from "./Message"

export default function Messages(props) {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        console.log("Added new messages")
        setMessages((prevState) => [...props.messages])
    })

    useEffect(() => {
        const lastMsg = messages.slice(-1)[0]
        console.log("This is the last msg", messages, lastMsg)
        axios.post(`http://localhost:8000/seen/${props.uid}`, { ...lastMsg });
    }, [messages])

    const renderMessage = (oldMsg = []) => {
        const msg = oldMsg.map((e) => {
            if (e.uid === props.uid) {
                return { ...e, isUser: true };
            } else {
                return { ...e, isUser: false };
            }
        });

        return msg.map((e, i) => {
            return (
                <Message
                    msg={e.msg}
                    isSeen={e.isSeen}
                    isUser={e.isUser}
                    mid={e.mid}
                    isLast={messages.length-1 == i ? true: false}
                />
            );
        });
    };


    return (
        <div>
            <div class="wd-auto grid grid-cols-12 gap-y-2">{renderMessage(messages)}</div>
        </div>
    )
}
