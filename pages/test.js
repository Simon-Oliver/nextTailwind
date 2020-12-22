import React, { useState } from 'react';

export default function Test(props) {
    let messages = [
        { msg: "Hi! How are you?", isUser: true, id: 123 },
        { msg: "Good how are you?", isUser: false, id: 123 },
        { msg: "Very goood! I have a great job opportunity for you. Interested?", isUser: true, id: 123 },
        { msg: "Shoot!", isUser: false, id: 123 },
        { msg: "Lorem ipsum", isUser: true, id: 123 },
    ]

    const renderMessage = () => {
        var previousNotUserMsg, index = messages.length - 1;
        for (; index >= 0; index--) {
            if (messages[index].isUser == false) {
                previousNotUserMsg = index;
                break;
            }
        }

        messages[previousNotUserMsg].isLast = true

        return messages.map((e, i) => {


            return (
                <div class={`${e.isUser ? "col-start-6 col-end-13" : "col-start-1 col-end-8"} p-3 rounded-lg`}>
                    <div class={`flex ${!e.isUser ? "flex-row items-center":"items-center justify-start flex-row-reverse"}`}>
                        <div
                            class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                            A
          </div>
                        <div
                            class={`relative text-sm ${e.isUser ? "bg-indigo-100 mr-3" : "bg-white ml-3"} py-2 px-4 shadow rounded-xl`}
                        >
                            <div>
                                {e.msg}
                            </div>
                            {e.isLast ? (<div
                                class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                            >
                                Seen
                            </div>) : ""}
                        </div>
                    </div>
                </div>

            )
        });
    }

    return (
        <div class="wd-auto grid grid-cols-12 gap-y-2">
            {renderMessage()}
        </div>
    )
}