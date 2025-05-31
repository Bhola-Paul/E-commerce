import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSeller from './../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewletterBox from '../components/NewletterBox';

const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollections/>
        <BestSeller/>
        <OurPolicy/>
        <NewletterBox/>
    </div>
  )
}

export default Home