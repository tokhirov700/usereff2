import React, { useState } from 'react'
import { explore } from '../../db'
import './Nft_Card.css'

import NFT_Card from '../../utils'
import { useLocation } from 'react-router-dom'


const Explore = () => {
  const location = useLocation();
const [data, setData] = useState(4)

let count = 4
  return (
    <>
      <div className='container'>
        <section className='explore'>
          <h2 className='nft__card__main__title'> Explore </h2>
          <div className="nft__card__content">
            {
              explore.slice(4, location.pathname === "/explore" ? undefined :  count * data ).map(element =>
              <NFT_Card cardType="vertical" key={element.id} element={element}/>
      
              )
            }
          </div>
          {
            location.pathname === "/explore" ? <></> : <button type='button' onClick={() => setData(p => p+1)} className='nft__card__btn'>Discover More</button>
          }
         
        </section>
      </div>
    </>
  )
}

export default Explore
