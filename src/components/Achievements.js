import React, {useState, useEffect} from 'react'
import { Carousel } from 'react-bootstrap'
import sanityClient from "../client.js";
// To display markdown
import BlockContent from "@sanity/block-content-to-react";
// To display images
import imageUrlBuilder from "@sanity/image-url";



const Achievements = () => {

  const builder = imageUrlBuilder(sanityClient);
    // const [width, setWidth] = useState(null)

    // const slider = document.querySelector(".carousel_main");

    
    
    // function size() {
    //     setWidth(window.innerWidth)
    //     if (width > 999) {
    //         slider.classList.remove("slider-active");
    //     }
    // }
    


    // window.addEventListener('resize', size)
//   const builder = imageUrlBuilder(sanityClient);

  const [achievement, setAchievement] = useState(null);
  const [mobile, setMobile] = useState(null)

    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "achievements"]{
              title,
              body,
              mainImage{
                    asset->{
                        _id,
                        url
                    },
                },
      }`
        )
        .then((data) => setAchievement(data))
        .catch(console.error);
    }, []);
    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "achievements_mobile"]{
              title,
              body,
              mainImage{
                    asset->{
                        _id,
                        url
                    },
                },
      }`
        )
        .then((data) => setMobile(data))
        .catch(console.error);
    }, []);
  
  function urlFor(source) {
    return builder.image(source);
  }
  
  if (!achievement) {
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
    <>
      <div className="carousel_wrapper">
        <Carousel className="carousel_main compuCarousel">
          {achievement &&
            achievement.map((ach, index) => (
              <Carousel.Item className="carousel_item">
                <img
                  className="d-flex w-100 img_darken"
                  src={urlFor(ach.mainImage.asset.url).size(640, 360)}
                  alt="First slide"
                />
                <Carousel.Caption className="center_info">
                  <h3>{ach.title}</h3>
                  <p>
                    <BlockContent blocks={ach.body} />
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      </div>

      <Carousel className="carousel_main mobileCarousel">
        {achievement &&
          achievement.map((ach, index) => (
            <Carousel.Item className="carousel_item">
              <img
                className="d-flex w-100 img_darken"
                src={urlFor(ach.mainImage.asset.url).size(1080, 1920)}
                alt="First slide"
              />
              <Carousel.Caption className="center_info">
                <h3>{ach.title}</h3>
                <p>
                  <BlockContent blocks={ach.body} />
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>

      {/* <div className='no_show'>
        <Carousel className="carousel_main">
          {achievement &&
            achievement.map((ach, index) => (
              <Carousel.Item className="carousel_item">
                <img
                  className="d-flex w-100 img_darken"
                  src={urlFor(ach.mainImage.asset.url).size(640, 360)}
                  alt="First slide"
                />
                <Carousel.Caption className="center_info">
                  <h3>{ach.title}</h3>
                  <p>
                    <BlockContent blocks={ach.body} />
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      </div> */}
    </>
  );
}

export default Achievements


