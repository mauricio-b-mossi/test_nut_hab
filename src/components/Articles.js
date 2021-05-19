import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import {Link} from 'react-router-dom'

const Articles = () => {

  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    // fetch to GROK
    //   *=all _type=from the type == ()]{what to pull in}
    sanityClient
      .fetch(
        `*[_type == "post"]{
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
    return <div>Loading...</div>
  }
  
  return (
    <div className="article_section_body">
      <div className="site_container">
        <div className="article_container">
          {console.log(allPosts)}
          {allPosts &&
            allPosts.map((post, index) => (
              <Link to={`/${post.slug}`} key={index} style={{textDecoration: 'none'}}>
                <article className="article_card">
                  <figure className="article_image">
                    <img
                      src={post.mainImage.asset.url}
                      alt="Main Article Image"
                    />
                  </figure>
                  <div className="article_content">
                    <div className="card_category">
                      {post.categories}
                    </div>
                    <h3 className="card_title">{ post.title }</h3>
                    <p className="card_excerpt">
                      {post.description}
                    </p>
                  </div>
                </article>
              </Link>
  ))}
          {/* {allPosts &&
            allPosts.map((post, index) => (
              <Link to={`/${post.slug}`} key={post.index}>
                <article className="article_card">
                  <figure className="article_image">
                    <img
                      src={post.mainImage.asset.url}
                      alt="Main Article Image"
                    />
                  </figure>
                  <div className="article_content">
                    <div className="card_category">
                      {post.categories.current}
                    </div>
                    <h3 className="card_title">{ post.title.current }</h3>
                    <p className="card_excerpt">
                      {post.description.current}
                    </p>
                  </div>
                </article>
              </Link>
            ))} */}
          {/* <article className="article_card">
            <figure className="article_image">
              <img src="/images/diabetes_ribbonbg.jpg" alt="" />
            </figure>
            <div className="article_content">
              <a href="#" className="card_category">
                Health
              </a>
              <h3 className="card_title">Looking After Your Health</h3>
              <p className="card_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt suscipit deleniti libero eaque molestias possimus, ea,
                eum dolorum animi iste repellat consequatur molestiae vel omnis
                quod architecto! Nesciunt, in repellendus?
              </p>
            </div>
          </article> */}
          {/* <article className="article_card">
            <figure className="article_image">
              <img src="/images/diabetes_ribbonbg.jpg" alt="" />
            </figure>
            <div className="article_content">
              <a href="#" className="card_category">
                Health
              </a>
              <h3 className="card_title">Looking After Your Health</h3>
              <p className="card_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt suscipit deleniti libero eaque molestias possimus, ea,
                eum dolorum animi iste repellat consequatur molestiae vel omnis
                quod architecto! Nesciunt, in repellendus?
              </p>
            </div>
          </article>
          <article className="article_card">
            <figure className="article_image">
              <img src="/images/diabetes_ribbonbg.jpg" alt="" />
            </figure>
            <div className="article_content">
              <a href="#" className="card_category">
                Health
              </a>
              <h3 className="card_title">Looking After Your Health</h3>
              <p className="card_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt suscipit deleniti libero eaque molestias possimus, ea,
                eum dolorum animi iste repellat consequatur molestiae vel omnis
                quod architecto! Nesciunt, in repellendus?
              </p>
            </div>
          </article>
          <article className="article_card">
            <figure className="article_image">
              <img src="/images/diabetes_ribbonbg.jpg" alt="" />
            </figure>
            <div className="article_content">
              <a href="#" className="card_category">
                Health
              </a>
              <h3 className="card_title">Looking After Your Health</h3>
              <p className="card_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt suscipit deleniti libero eaque molestias possimus, ea,
                eum dolorum animi iste repellat consequatur molestiae vel omnis
                quod architecto! Nesciunt, in repellendus?
              </p>
            </div>
          </article>
          <article className="article_card">
            <figure className="article_image">
              <img src="/images/diabetes_ribbonbg.jpg" alt="" />
            </figure>
            <div className="article_content">
              <a href="#" className="card_category">
                Health
              </a>
              <h3 className="card_title">Looking After Your Health</h3>
              <p className="card_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt suscipit deleniti libero eaque molestias possimus, ea,
                eum dolorum animi iste repellat consequatur molestiae vel omnis
                quod architecto! Nesciunt, in repellendus?
              </p>
            </div>
          </article>
          <article className="article_card">
            <figure className="article_image">
              <img src="/images/diabetes_ribbonbg.jpg" alt="" />
            </figure>
            <div className="article_content">
              <a href="#" className="card_category">
                Health
              </a>
              <h3 className="card_title">Looking After Your Health</h3>
              <p className="card_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt suscipit deleniti libero eaque molestias possimus, ea,
                eum dolorum animi iste repellat consequatur molestiae vel omnis
                quod architecto! Nesciunt, in repellendus?
              </p>
            </div>
          </article>
          <article className="article_card">
            <figure className="article_image">
              <img src="/images/diabetes_ribbonbg.jpg" alt="" />
            </figure>
            <div className="article_content">
              <a href="#" className="card_category">
                Health
              </a>
              <h3 className="card_title">Looking After Your Health</h3>
              <p className="card_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt suscipit deleniti libero eaque molestias possimus, ea,
                eum dolorum animi iste repellat consequatur molestiae vel omnis
                quod architecto! Nesciunt, in repellendus?
              </p>
            </div>
          </article>
          <article className="article_card">
            <figure className="article_image">
              <img src="/images/diabetes_ribbonbg.jpg" alt="" />
            </figure>
            <div className="article_content">
              <a href="#" className="card_category">
                Health
              </a>
              <h3 className="card_title">Looking After Your Health</h3>
              <p className="card_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt suscipit deleniti libero eaque molestias possimus, ea,
                eum dolorum animi iste repellat consequatur molestiae vel omnis
                quod architecto! Nesciunt, in repellendus?
              </p>
            </div>
          </article>
          <article className="article_card">
            <figure className="article_image">
              <img src="/images/diabetes_ribbonbg.jpg" alt="" />
            </figure>
            <div className="article_content">
              <a href="#" className="card_category">
                Health
              </a>
              <h3 className="card_title">Looking After Your Health</h3>
              <p className="card_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt suscipit deleniti libero eaque molestias possimus, ea,
                eum dolorum animi iste repellat consequatur molestiae vel omnis
                quod architecto! Nesciunt, in repellendus?
              </p>
            </div>
          </article>
          <article className="article_card">
            <figure className="article_image">
              <img src="/images/diabetes_ribbonbg.jpg" alt="" />
            </figure>
            <div className="article_content">
              <a href="#" className="card_category">
                Health
              </a>
              <h3 className="card_title">Looking After Your Health</h3>
              <p className="card_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt suscipit deleniti libero eaque molestias possimus, ea,
                eum dolorum animi iste repellat consequatur molestiae vel omnis
                quod architecto! Nesciunt, in repellendus?
              </p>
            </div>
          </article> */}
        </div>
      </div>
    </div>
  );
};

export default Articles;
