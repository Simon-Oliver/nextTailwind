import React, {useEffect, useState} from 'react'

export default function Message(props) {
const [message, setMessage] = useState({})
    

    useEffect(()=>{
        console.log("Message",props)
        const {msg, isSeen, isUser, mid, isLast} = props
        setMessage({msg, isSeen, isUser, mid, isLast})
    },[message])

    return (
        <div
            class={`${message.isUser ? 'col-start-6 col-end-13' : 'col-start-1 col-end-8'} p-3 rounded-lg`}
        >
            <div
                class={`flex ${!message.isUser ? 'flex-row items-center' : 'items-center justify-start flex-row-reverse'
                    }`}
            >
                <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    A
            </div>
                <div
                    class={`relative text-sm ${message.isUser ? 'bg-indigo-100 mr-3' : 'bg-white ml-3'
                        } py-2 px-4 shadow rounded-xl`}
                >
                    <div>{message.msg}</div>
                    {message.isLast && message.isUser? (
                        <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">{message.isSeen ? "Read": "Unread"}</div>
                    ) : (
                            ''
                        )}
                </div>
            </div>
        </div>
    );
}
