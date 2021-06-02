import React, {useState, useEffect} from 'react'
import {Carousel} from 'react-bootstrap'



const Achievements = () => {
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

//   const [achievement, setAchievement] = useState(null);

//     useEffect(() => {
//       sanityClient
//         .fetch(
//           `*[_type == "achievement"]{
//               fieldOne,
//               mission,
//               fieldTwo,
//               vision,
//               mainImage{
//                     asset->{
//                         _id,
//                         url
//                     },
//                 },
//       }`
//         )
//         .then((data) => setMisionVision(data[0]))
//         .catch(console.error);
//     }, []);

    return (
      <Carousel className="carousel_main">
        <Carousel.Item className="carousel_item">
          <img
            className="d-flex w-100"
            src="https://th.bing.com/th/id/R5b90d3cab4c93cc1f47b3d31807a0f99?rik=yMn59TeeZI80YQ&riu=http%3a%2f%2fmedia.idownloadblog.com%2fwp-content%2fuploads%2f2016%2f04%2fblack-screen.png&ehk=RxV1EICkEx5hI0FQBlLKLvKlxHWlhizf2AqbxVit4cw%3d&risl=&pid=ImgRaw"
            alt="First slide"
          />
          <Carousel.Caption className="center_info">
            <h3>First slide label</h3>
            <p>Lorem ipsum dolor sit amet co Lorem ipsum, dolor sit amet</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel_item">
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/Rf064c63ec4e26c876f55395bbecfaf53?rik=UW6NSRJfqFJymg&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f8600000%2frandom-animals-animals-8676039-1600-1200.jpg&ehk=6tjcye1UD%2fllXsU8RkEf%2b%2flTWJe2QD5D%2fvkatzMqPG0%3d&risl=&pid=ImgRaw"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel_item">
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/Rf94d57987fe736de650020597fab9685?rik=9DBdZaX9GUW8NQ&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fphotos%2f5900000%2fRandomness-random-5997130-1280-800.jpg&ehk=%2bJHDAdwADmFcwPe9iALSSqZpQeCmGVB0MG5gujSvPzY%3d&risl=&pid=ImgRaw"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Achievements


