import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import TopRank from './TopRank/TopRank'
import VillaRental from './VillaRental/VillaRental'
import Comments from './Comments/Comments'
import Takhfifat from './takhfifat/Takhfifat'

const LandingContainer = () => {
  return (
    <div className='' >
      <HeroSection/>
      <Takhfifat/>
      <TopRank/>
      <VillaRental/>
      <Comments/>
    </div>
  )
}

export default LandingContainer
