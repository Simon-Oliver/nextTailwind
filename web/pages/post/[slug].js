import { useRouter } from 'next/router';
import client from '../../client.js'
import BlockContent from '@sanity/block-content-to-react'
import groq from 'groq'

import React, { useEffect } from 'react'

const Post = (props) => {
    const router = useRouter()
    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <article>
            <h1>{props.title}</h1>
            <BlockContent
                blocks={props.body}
                imageOptions={{ w: 320, h: 240, fit: 'max' }}
                {...client.config()}
            />
        </article>
    )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name,
    "categories": categories[]->title,
    body
  }`

Post.getInitialProps = async (ctx) => {
    const { slug = "" } = ctx.query
    return await client.fetch(query, { slug })
}

export default Post