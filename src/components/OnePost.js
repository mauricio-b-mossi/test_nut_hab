import React, {useEffect, useState} from 'react'
import sanityClient from '../client'
import {useParams} from 'react-router-dom'


const OnePost = () => {

    const [post, setPost] = useState(null)
    const{slug} = useParams()

    useEffect(() => {
        sanityClient.fetch(
            `*[slug.current == $slug]{
                title,
                slug,
                mainImage{
                    assets->{
                        _id,
                        url
                    }
                },
                body,
            }`,
            { slug }
        ).then((data)=>setPost(data[0])).catch(console.error)
    }, [slug])
    return (
        <div>
            {post.title}
        </div>
    )
}

export default OnePost
