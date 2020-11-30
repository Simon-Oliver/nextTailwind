import React, { useState } from 'react';

export default function Test(props) {
    return (
        <div className="flex items-center justify-center">
            <div class="bg-gray-50 rounded-lg shadow-lg border p-6 w-64 ">
                <h5 class="text-3xl font-bold mb-4 mt-0">My Title</h5>
                <p class="text-gray-700 text-sm pb-5">Content goes here</p>
                <img class="mx-auto shadow-xl rounded-lg" src={props.data} />
            </div>
        </div>
    )
}