import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
// To display markdown
import BlockContent from '@sanity/block-content-to-react'
// To display images
import ImageUrlBuilder from '@sanity/image-url'


const SectionWhiteAbout = () => {

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
  return (
    <>
      {console.log(aboutUs)}
      {aboutUs &&
        // aboutUs.map((about) => 
        (
          <div className="section_white_about">
            <div className="about_right_div">
              <img src={aboutUs.mainImage.asset.url} alt="About Us image" />
            </div>
            <div className="about_left_div">
              <div className="about_left_big">{aboutUs.title}</div>
              <div className="about_left_medium">{aboutUs.subtitle}</div>
              <div className="about_left_small">
              <BlockContent
                blocks={aboutUs.body}/>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default SectionWhiteAbout;
