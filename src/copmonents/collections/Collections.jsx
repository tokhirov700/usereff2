import React from 'react'
import { collaction } from '../../db'

import "./Collections.css"
import NFT_Card from '../../utils'


const Collections = () => {
  return (
    <div className="container">
      <section className='collections'>
        <h2 className='collections__title'>Collections</h2>
        <div className="collections__content">
          {
            collaction.map(element =>
              <NFT_Card cardType="horizontal" element={element} key={element.id} />
            )
          }
        </div>
      </section>
    </div>
  )
}

export default Collections
