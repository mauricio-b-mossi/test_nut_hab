import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
// To display markdown
import BlockContent from "@sanity/block-content-to-react";
// To display images
import imageUrlBuilder from "@sanity/image-url";
import arrowL from '../images/arrowL.png'
import arrowR from '../images/arrowR.png'
import { Carousel } from "react-bootstrap";



const SectionWhite = () => {

  const builder = imageUrlBuilder(sanityClient);
  const [display, setDisplay] = useState(true)
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

  function nextSlide() {
    setDisplay((current)=>!current)
  }

  const mision = document.querySelector('.right_small_small')
  
  
    
  // gsap.from(".right_small_small", {duration: 1, opacity: 0, ease: 'bounce'});

  return (
    <>
      {misionVision && (
        <>
          <div className="section_white">
            <div className="right_div">
              <div className="width_wrapper">
                {/* <div className="width_wrapper_wrapper"> */}
                <Carousel style={{ minHeight: "70vh" }} interval='50000'>
                  <Carousel.Item>
                    <div className="right_small_small mision">
                      <h2 className="field_title">{misionVision.fieldOne}</h2>
                      <BlockContent blocks={misionVision.mission} />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="right_small_small">
                      <h2 className="field_title">{misionVision.fieldTwo}</h2>
                      <BlockContent blocks={misionVision.vision} />
                    </div>
                  </Carousel.Item>
                </Carousel>

                {/* <img src={arrowL} className="arrowL" />
                  {display ? (
                    <div className="right_small_small">
                      <h2 className="field_title">{misionVision.fieldOne}</h2>
                      <BlockContent blocks={misionVision.mission} />
                    </div>
                  ) : (
                    <div className="right_small_small">
                      <h2 className="field_title">{misionVision.fieldTwo}</h2>
                      <BlockContent blocks={misionVision.vision} />
                    </div>
                  )}
                  <img src={arrowR} className="arrowR" onClick={nextSlide}/> */}

                {/* <div className="right_medium">Visión</div>
                <div className="right_small">
                  <BlockContent blocks={misionVision.vision} />
                </div> */}
                {/* </div> */}
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
