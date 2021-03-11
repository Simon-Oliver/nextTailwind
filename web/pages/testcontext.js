import React, { useState, useEffect } from 'react'
import TestContext from '../components/Context/'
import Test from "./test"

const TestProvider = TestContext.Provider

export default function testcontext() {
    const [data, setData] = useState([
        { id: 1, name: 'thing 1', length: 5 },
        { id: 2, name: 'thing 2', length: 2 },
        { id: 3, name: 'thing 3', length: 6 },
        { id: 4, name: 'thing 4', length: 10 },
        { id: 5, name: 'thing 5', length: 1 }
    ])

    useEffect(() => {
        console.log("Test Context ------", data)
    }, [data])

    const clickHandler = () => {
        const id = Number(data[data.length - 1].id + 1)
        const name = `thing ${id}`
        const length = Math.floor(Math.random() * 11)

        setData([...data, { id, name, length }])
    }


    return (
        <div>
            <TestProvider value={data}>
                <Test ></Test>
                <button onClick={clickHandler}>Button</button>
            </TestProvider>
        </div >
    )
}
