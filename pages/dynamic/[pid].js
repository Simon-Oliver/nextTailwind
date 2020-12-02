import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const Dynamic = (props) => {
    const [response, setResponse] = useState({ res: "Test", isLogin: false })
    const router = useRouter()
    const { pid } = router.query

    useEffect(async () => {
        console.log("----->", props)
        setResponse({...response ,...props})
    }, [])

    return (
        <div className="flex items-center justify-center">
            <div class="rounded-lg shadow-lg border p-6 w-64 ">
                <h5 class="text-3xl font-bold mb-4 mt-0">My Title</h5>
                <p class="text-gray-700 text-sm pb-5">Content goes here</p>
                <img class="mx-auto shadow-xl rounded-lg" src={props.data} />
                {response.isLogin ? <p> {`Post: ${response.res}`}</p> : ""}
            </div>
        </div>
    )
}

Dynamic.getInitialProps = async (ctx) => {
    const res = await fetch("http://localhost:3000/api/auth/" + ctx.query.pid)
    const json = await res.json()
    return json
}

export default Dynamic

