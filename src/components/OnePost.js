import React, {useEffect, useState} from 'react'
import sanityClient from '../client.js'
import { useParams } from 'react-router-dom'
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";



const OnePost = () => {

    const builder = imageUrlBuilder(sanityClient);

    const [post, setPost] = useState(null)
    const{slug} = useParams()

    useEffect(() => {
        sanityClient
          .fetch(
            `*[slug.current == $slug]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                },
                body,
            }`,
            { slug }
          )
          .then((data) => setPost(data[0]))
          .catch(console.error);
    }, [slug])

    function urlFor(source) {
      return builder.image(source);
    }

    if (!post) {
        return (
            <div>Loading</div>
        )
    }

    return (
      <div className="individual_container">
        <div className="width_wrapper">
          {post && (<> <div className="post_title">{post.title}</div>
          <img
                src={urlFor(post.mainImage.asset.url).width(600)}
                alt="Article Image" className='img_article_size'
              />
        <BlockContent blocks={post.body} className='post_body'/>
          </>)}
        </div>
      </div>
    );
}

export default OnePost
