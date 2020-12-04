import React, { useState } from 'react';

export default function Test(props) {
    return (
        <div >
            <img class="mx-auto shadow-xl rounded-lg" src={props.data} />
        </div>
    )
}