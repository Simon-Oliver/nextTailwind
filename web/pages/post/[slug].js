import { useRouter } from 'next/router';
import client from '../../client.js'

import React, { useEffect } from 'react'

const Post = (props) => {
    const router = useRouter()
    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <article>
            <h1>{router.query.slug}</h1>
        </article>
    )
}

Post.getInitialProps = async (ctx) => {
    const { slug = "" } = ctx.query
    return await client.fetch(`*[_type == "post"]`)
}

export default Post