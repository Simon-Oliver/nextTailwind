import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import client from '../client.js'
import BlockContent from '@sanity/block-content-to-react'
import groq from 'groq'
import styles from './css.module.css';
import Link from "next/link"
import moment from "moment"


import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
}


const Post = (props) => {
    const [imgUrl, setImgUrl] = useState("")
    const [category, setCategory] = useState('Food')

    const router = useRouter()
    useEffect(() => {
        console.log(props)
        console.log(category)
    }, [])

    useEffect(() => {
        const imgBuilder = imageUrlBuilder({
            projectId: "6btzanu1",
            dataset: 'production',
        })
        setImgUrl(imgBuilder.image(props.mainImage).width(2000).height(800))

    }, [props.mainImage])

    useEffect(() => {
        console.log(category)
    }, [category])

    const onBtnClick = (e) => {
        e.preventDefault()
        setCategory(e.target.innerHTML)
    }

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


    const renderPosts = (posts) => {
        const imgBuilder = imageUrlBuilder({
            projectId: "6btzanu1",
            dataset: 'production',
        })
        let filtered = Object.keys(posts).map(k => {
            return posts[k]
        }).filter(e => e.categories.includes(category))

        console.log("filtered array", filtered)

        return filtered.map((e) => {
            return (
                <Link href={`/post/${e["slug"].current}`}><a>
                    <div className={styles.postCard}>
                        <img className={styles.imgPosts} src={imgBuilder.image(e["mainImage"]).width(300).height(300)} />
                        <div class={styles.postBody}>
                            <p className={styles.postTitle}>{e["title"]}</p>
                            <p className={styles.postDate}>{moment(e.publishedAt).format("DD.MM.YYYY HH:mm ")}</p>
                        </div>
                    </div>
                </a></Link>
            )
        })
    }


    return (
        <div>
            <nav className={styles.navBar}>
                <button className={category == "Food" ? `${styles.tagBtn} ${styles.tagActive}` : `${styles.tagBtn}`} onClick={e => onBtnClick(e)} >Food</button>
                <button className={category == "Design" ? `${styles.tagBtn} ${styles.tagActive}` : `${styles.tagBtn}`} onClick={e => onBtnClick(e)}>Design</button>
            </nav>
            <div className={styles.blogContainer}>

                {renderPosts(props)}
            </div>
        </div>
    )
}

const query = groq`*[_type == "post"]{body, mainImage,slug,title,publishedAt,"categories": categories[]->title}`


//`*[_type == "post"]`

Post.getInitialProps = async (ctx) => {
    const { slug = "" } = ctx.query
    return await client.fetch(query)
}

export default Post