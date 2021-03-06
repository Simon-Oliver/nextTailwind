import React, { useState } from 'react'

import dynamic from 'next/dynamic'
const QrReader = dynamic(() => import('react-qr-reader'), {
    ssr: false
})

export default function qr() {
    const [result, setResult] = useState([])


    const handleScan = data => {
        if (data) {
            setResult([...result, {
                result: data
            }])
        }
    }
    const handleError = err => {
        console.error(err)
    }

    const renderResult = () => {
        return result.map(e => (<div>{e.result}</div>))
    }


    return (
        <div>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            <p>{renderResult}</p>
        </div>
    )
}


