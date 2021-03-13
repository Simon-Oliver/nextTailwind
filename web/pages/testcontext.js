import React, { useState, useEffect } from 'react'
import { TestContext } from '../components/Context/'
import { ThemeContext } from '../components/Context/'
import Test from "./test"

const ThemeProvider = ThemeContext.Provider
const TestProvider = TestContext.Provider

export default function testcontext() {
    const [data, setData] = useState([
        { uid: 123, name: "Urs", status: "online" },
        { uid: 345, name: "Tom", status: "offline" },
        { uid: 908, name: "James", status: "online" }
    ])

    const theme = {
        background: "green",
        color: "red"
    }

    useEffect(() => {
        console.log("Test Context ------", data)
    }, [data])

    const clickHandler = () => {
        const uid = Number(data[data.length - 1].uid + 1)
        const name = `Name ${uid}`
        const status = "online"

        setData([...data, { uid, name, length }])
    }


    return (
        <div>
            <ThemeProvider value={theme}>
                <TestProvider value={data}>
                    <Test ></Test>
                    <button onClick={clickHandler}>Button</button>
                </TestProvider>
            </ThemeProvider>

        </div >
    )
}
