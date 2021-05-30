import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
// To display markdown
import BlockContent from "@sanity/block-content-to-react";
// To display images
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";

const SectionWhite = () => {

  const builder = imageUrlBuilder(sanityClient);

  const [misionVision, setMisionVision] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "misionVision"]{
              fieldOne,
              mission,
              fieldTwo,
              vision,
              mainImage{
                    asset->{
                        _id,
                        url
                    },
                },
      }`
      )
      .then((data) => setMisionVision(data[0]))
      .catch(console.error);
  }, []);

  function urlFor(source) {
    return builder.image(source);
  }
    

  return (
    <>
      {misionVision && (
        <>
          <div className="section_white">
            <div className="right_div">
              <div className="width_wrapper">
                {/* <div className="right_medium mision">Misión</div> */}
                <div className="right_small">
                  <h2 className="field_title">{misionVision.fieldOne}</h2>
                  <BlockContent blocks={misionVision.mission} />
                </div>
                <div className="right_small_below">
                  <h2 className="field_title">{misionVision.fieldTwo}</h2>
                  <BlockContent blocks={misionVision.vision} />
                </div>
                {/* <div className="right_medium">Visión</div>
                <div className="right_small">
                  <BlockContent blocks={misionVision.vision} />
                </div> */}
              </div>
            </div>
            <div className="left_div">
              {/* <img src="/images/happy-person.png" alt="" /> */}
              <img
                src={urlFor(misionVision.mainImage.asset.url).width(400)}
                alt="Misión y Visión"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SectionWhite;
