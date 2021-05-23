import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";

const Recepies = () => {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    // fetch to GROK
    //   *=all _type=from the type == ()]{what to pull in}
    sanityClient
      .fetch(
        `*[_type == "recepies"]{
                title,
                description,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                categories,
              }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  if (!allPosts) {
    return (
      <div
        style={{
          height: "92vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    );
  }

  return (
    <div className="article_section_body">
      <div className="site_container">
        <div className="article_container">
          {/* {console.log(allPosts)} */}
          {allPosts &&
            allPosts.map((post, index) => (
              <Link
                to={`/${post.slug.current}`}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <article className="article_card">
                  <figure className="article_image">
                    <img
                      src={post.mainImage.asset.url}
                      alt="Main Article Image"
                    />
                  </figure>
                  <div className="article_content">
                    <div className="card_category">{post.categories}</div>
                    <h3 className="card_title">{post.title}</h3>
                    <p className="card_excerpt">{post.description}</p>
                  </div>
                </article>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recepies;
