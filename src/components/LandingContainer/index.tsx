import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import TopRank from './TopRank/TopRank'
import VillaRental from './VillaRental/VillaRental'
import Comments from './Comments/Comments'
import Takhfifat from './takhfifat/Takhfifat'
import {CategoryGrid} from './Categories'
import SelandBoy from './SeelandBay'
import { Comment } from '@/types/Landing/Comments'

interface Props {
  comments: Comment[];
}

const LandingContainer = ({comments}:Props) => {
  return (
    <div className=' ' >
      <HeroSection/>
      <Takhfifat/>
      <CategoryGrid/>
      <SelandBoy/>
      <TopRank/>
      <VillaRental/>
      <Comments comments={comments} />
    </div>
  )
}

export default LandingContainer
