import React, {useEffect, useState} from 'react'
import sanityClient from '../client'

const Hero = () => {

  const [heroImg, setHeroImg] = useState(null)
  
  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "heroimage"]{
                mainImage{
                    assets->{
                        _id,
                        url
                    },
                },
            }`
    ).then((data) => console.log(data)).catch(console.error)
  }, [])
  // setHeroImg(data) ,
  
  if (heroImg) {
    console.log('A hero');
  }
    return (
      <>
        <div
          className="hero"
        >
          <div className="text_hero">
            NUTRIENDO
            <br />
            HÁBITOS
          </div>
        </div>
      </>
    );
}

export default Hero
