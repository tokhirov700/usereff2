import { leadbordCard } from "../../db"
import eth from '../../images/etherioum.svg'
import "./Leaderboard.css"


const Leaderboard = () => {
  return (
    <section className='leaderboard'>
      <div className="container">
        <div className="leaderboard__main__content">
          <h2 className='leaderboard__main__title'>Leaderboard of the Week</h2>
          <div className="leaderboard__content">
            {
              leadbordCard.map(element =>
                <div key={element.id} className="leaderboard__card">
                  <div className="leaderboard__card__img__content">
                    <span>#{element.id}</span>
                    <img className='leaderboard__card__img' src={element.image} alt={element.name} />
                  </div>
                  <h4 className="leaderboard__card__title">
                    Perperzon
                  </h4>
                  <div className="leaderboard__card__price">
                    <img src={eth} alt="etherium" />
                    <span>{element.price}</span>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leaderboard
