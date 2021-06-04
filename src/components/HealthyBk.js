import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
// To display markdown
import BlockContent from "@sanity/block-content-to-react";
import { Carousel } from "react-bootstrap";


const HealthyBk = () => {

  const [fact, setFact] = useState('');
  // const [randomNum, setRandomNum] = useState('');
  // const [num, setNum] = useState('')
  

useEffect(() => {
  sanityClient
    .fetch(
      `*[_type == "fact"]{
              body,
      }`
    )
    .then((data) => setFact(data))
    .then(() => console.log(fact.length))
    // .then(() => setRandomNum(Math.floor(Math.random() * (fact.length)))).then(()=>console.log(randomNum))
    // .then(() => setRandomNum(fact.length))
    // .then(() => console.log(randomNum))

    .catch(console.error);
}, []);


  return (
    <>
      <div className="healthy_bk">
        <div className="diabetes_fact">
          <Carousel className="carousel_main facts_height" >
            {fact &&
              fact.map((ach, index) => (
                <Carousel.Item className="carousel_item_bk">
                  <BlockContent blocks={ach.body} />
                </Carousel.Item>
              ))}
          </Carousel>

          {/* Random fact from the db */}
          {/* {fact ? (
            <div>
              <BlockContent
                blocks={fact[Math.floor(Math.random() * fact.length)].body}
              />
            </div>
          ) : (
            <div></div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default HealthyBk;
