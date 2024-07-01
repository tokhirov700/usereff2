import React from 'react'
import Hero from '../../copmonents/hero/Hero';
import Collections from '../../copmonents/collections/Collections';
import Leaderboard from '../../copmonents/leaderboard/Leaderboard';
import ExploreComponent from '../../copmonents/explore/Explore';


const Home = () => {
  return (
    <div>
         <Hero/>
         <Collections/>
         <Leaderboard/>
         <ExploreComponent/>
    </div>
  )
}

export default Home