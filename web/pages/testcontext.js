import React from 'react'
import { TestProvider } from '../components/Context/'
import Test from "./test"

export default function testcontext() {
    const data = [
        { id: 1, name: 'thing 1', length: 5 },
        { id: 2, name: 'thing 2', length: 2 },
        { id: 3, name: 'thing 3', length: 6 },
        { id: 4, name: 'thing 4', length: 10 },
        { id: 5, name: 'thing 5', length: 1 }
    ]



    return (
        <div>
            <TestProvider value={data}>
                <Test ></Test>
            </TestProvider>
        </div>
    )
}
