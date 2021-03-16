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
            <ThemeProvider value={darkMode}>
                <TestProvider value={contextValue}>
                    <Test ></Test>
                    <button onClick={clickHandler}>Button</button>
                    <button onClick={toggleDarkMode}>Toggle</button>
                </TestProvider>
            </ThemeProvider>
        </div >
    )
}
