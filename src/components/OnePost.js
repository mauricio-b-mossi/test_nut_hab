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
            <div></div>
        )
    }

    return (
      <div className="individual_container">
        <div className="about_left_div">
          <div className="width_wrapper">
            {post && (
              <>
                {" "}
                <div className="internal_wrapper">
                  <div className="post_title">{post.title}</div>
                  <img
                    src={urlFor(post.mainImage.asset.url).width(600)}
                    alt="Article Image"
                    className="img_article_size"
                  />
                  <div className="about_left_small">
                    <BlockContent blocks={post.body} className="post_body" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
}

export default OnePost
