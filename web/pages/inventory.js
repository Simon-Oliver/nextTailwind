import React, { useState, useEffect } from 'react'
import { TestContext } from '../components/Context/'
import { ThemeContext } from '../components/Context/'
import Test from "./test"

const ThemeProvider = ThemeContext.Provider
const TestProvider = TestContext.Provider

export default function testcontext() {
    const [data, setData] = useState([
        { id: 1, boxName: "Box q", content: [{ itemId: 1, itemName: "Item 1", weight: 500, value: 50 }] }
    ])

    useEffect(() => {
        console.log("Initial inventory render")
        fetch("/api/inventory", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ name: "test" }) // body data type must match "Content-Type" header
        });
    }, [])

    const contextValue = { data, setData }

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        console.log("Test Context ------", data)
    }, [data])

    const clickHandler = () => {
        const uid = Number(data[data.length - 1].uid + 1)
        const name = `Name ${uid}`
        const status = "online"

        setData([...data, data[0]])
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }


    return (
        <div>
            <TestProvider value={contextValue}>
                <Test ></Test>
                <button onClick={clickHandler}>Button</button>
            </TestProvider>
        </div >
    )
}
