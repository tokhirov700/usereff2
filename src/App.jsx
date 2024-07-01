import './App.css'

import Nav from './copmonents/nav/Nav'
import bactToTop from './images/backToTop.svg'
import {Routes, Route } from "react-router-dom";
import Home from './routes/home/Home'
import Trending from './routes/trending/Trending'
import Faq from './routes/faq/Faq'
import Explore from "./routes/explore/Explore"

function App() {

  return (
    <>
      <Nav/>
      <a href="#" className="backToTop" ><img src={bactToTop} alt=" back to top"/></a>

      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/trending' element={<Trending/>} />
          <Route path='/explore' element={<Explore/>} />
          <Route path='/faq' element={<Faq/>} />
      </Routes>
    </>
  )
}

export default App
