import React, { useEffect, useState } from 'react'
import axios from "axios"

import Message from "./Message"

export default function Messages(props) {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        console.log("Added new messages")
        setMessages(props.messages)

        const lastMsg = messages.slice(-1)[0]
        console.log("This is the last msg", messages, lastMsg)
        if (lastMsg && lastMsg.isSeen === false) {
            console.log("Request, Seen")
            axios.post(`http://localhost:8000/seen/${props.uid}`, { ...lastMsg });
        }
    })

    const renderMessage = (oldMsg = []) => {

        // Checks if the message was send by the actual user and add property isUser
        const msg = oldMsg.map((e) => {
            if (e.uid === props.uid) {
                return { ...e, isUser: true };
            } else {
                return { ...e, isUser: false };
            }
        });

        return msg.map((e, i) => {
            // Have to map the read notfication in messages to make sure it behaves correctly
            return (
                <>
                    <Message
                        msg={e.msg}
                        isSeen={e.isSeen}
                        isUser={e.isUser}
                        mid={e.mid}
                        isLast={messages.length - 1 == i ? true : false}>
                        <>
                            {messages.length - 1 == i && e.isUser ? (
                                <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">{e.isSeen ? "Read" : "Unread"}</div>
                            ) : (
                                    ''
                                )}
                        </>
                    </Message>
                </>
            );
        });
    };


    return (
        <div>
            <div class="wd-auto grid grid-cols-12 gap-y-2">{renderMessage(messages)}</div>
        </div>
    )
}
