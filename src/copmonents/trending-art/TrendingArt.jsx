import { explore } from "../../db"
import "../explore/Nft_Card.css"
import NFT_Card from "../../utils"
const TrendingArt = () => {
  return (
    <div className="container">
      <section className='trending__art'>
        <h2 className='nft__card__main__title'>Trending Art 🔥</h2>
        <div className="nft__card__content">
          {
            explore.slice(0, 4).map(element =>
              <NFT_Card cardType="vertical" key={element.id} element={element} />

            )
          }
        </div>
      </section>
    </div>
  )
}

export default TrendingArt
