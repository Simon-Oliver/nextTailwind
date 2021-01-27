import { useRouter } from 'next/router';
import client from '../../client.js'
import BlockContent from '@sanity/block-content-to-react'
import groq from 'groq'
import styles from '../css.module.css';

import React, { useEffect } from 'react'

const Post = (props) => {
    const router = useRouter()
    useEffect(() => {
        console.log(props)
    }, [])

    const overrides = {
        date: props => <p className={styles.date} {...props} />,
        h2: props => <h2 className={styles.subheading1} {...props} />,
        h3: props => <h3 className={styles.subheading2} {...props} />,
    }

    const serializers = {
        listItem: props => props.node.listItem == "number" ? <li className={styles.number} {...props} /> : <li className={styles.bullet} {...props} />,

        types: {
            block: props =>
                // Check if we have an override for the “style”
                overrides[props.node.style]
                    // if so, call the function and pass in the children, ignoring
                    // the other unnecessary props
                    ? overrides[props.node.style]({ children: props.children })

                    // otherwise, fallback to the provided default with all props
                    : BlockContent.defaultSerializers.types.block(props),
        }
    }

    return (
        <div className={styles.blogContainer}>
            <article >
                <h1 className={styles.title}>{props.title.toUpperCase()}</h1>
                <BlockContent
                    blocks={props.body}
                    imageOptions={{ w: 320, h: 240, fit: 'max' }}
                    serializers={serializers}
                    {...client.config()}
                />
            </article>
        </div>
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