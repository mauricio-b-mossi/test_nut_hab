import React from 'react'
import Hero from './Hero'
import SectionWhite from './SectionWhite'
import HealthyBk from './HealthyBk'
import SectionWhiteAbout from './SectionWhiteAbout'
import Achievements from './Achievements'

const HomeBody = () => {
    return (
      <>
        <Hero />
        <SectionWhite />
        <HealthyBk />
        {/* <Achievements/> */}
          <SectionWhiteAbout/>
      </>
    );
}

export default HomeBody
