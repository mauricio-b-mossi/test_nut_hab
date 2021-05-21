import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
// To display markdown
import BlockContent from '@sanity/block-content-to-react'
// To display images
import imageUrlBuilder from '@sanity/image-url'
import {Link} from 'react-router-dom'


const SectionWhiteAbout = () => {

  const builder = imageUrlBuilder(sanityClient);

  const [aboutUs, setAboutUs] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "aboutUs"]{
              title,
              subtitle,
              body,
              mainImage{
                    asset->{
                        _id,
                        url
                    },
                },
      }`
      )
      .then((data) => setAboutUs(data[0]))
      .catch(console.error);
  }, [])

  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <div className="section_white_about">
      <a
        id="about_page"
        style={{ listStyle: "none", textDecoration: "none", color: "black" }}
      >
        {aboutUs && (
          // aboutUs.map((about) =>
          <>
            <div className="about_right_div">
              <img
                src={urlFor(aboutUs.mainImage.asset.url).width(400)}
                alt="About Us image"
              />
            </div>
            <div className="about_left_div">
              <div className="width_wrapper">
                <div className="about_left_big">{aboutUs.title}</div>
                <div className="about_left_medium">{aboutUs.subtitle}</div>
                <div className="about_left_small">
                  <BlockContent blocks={aboutUs.body} className='block'/>
                </div>
              </div>
            </div>
          </>
        )}
      </a>
    </div>
  );
};

export default SectionWhiteAbout;
