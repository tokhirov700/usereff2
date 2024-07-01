import eth from '../images/etherioum.svg'
import check from "../images/check.svg"
import wallet__img from "../images/wallet.svg"

const NFT_Card = ({ element, cardType }) => {
  return (
    <div data-card-type={cardType} className="collections__card" style={cardType === "vertical" ? { flexDirection: "column" , gap: "0px" } : { flexDirection: "row" , gap: "30px"} } >
      <div className="collections__card__img__content">
        <img className='collections__card__img' src={element.image} alt={element.title} />
      </div>
      <div className="collections__card__content" style={cardType === "vertical" ? { display: "none" } : { display: "flex" }}>
        <div className="collections__card__profile">
          <div className="collections__card__profile__box">
            <img className="collections__card__profile__img" src={element.profile_img} alt={element.profile_name} />
            <img className="collections__card__profile__check" src={check} alt="check" />
          </div>
          <p className="collections__card__profile__name">{element.profile_name}</p>
        </div>
        <h2 className=' collections__card__title'>
          ExBoot #1
        </h2>
        <span className='collections__card__description'>
          Description
        </span>
        <p className='collections__card__description__text'>
          {element.description}
        </p>
        <div className="collections__card__info">
          <div className="collections__card__price__info">
            <p className='collections__card__current__bid'>Current Bid</p>
            <strong className='collections__card__price'><img src={eth} alt="etherium" />{element.current}</strong>
          </div>
          <div className="collections__card__timer">
            <p className='collections__card__current__bid'>End in</p>
            <strong className='collections__card__current__time'>{element.current_hour}h{element.current_min}m{element.current_sec}s</strong>
          </div>
        </div>
        <button className="collections__card__btn">
          <a target="_blank" href="https://wallet.tonkeeper.com/">
            <img src={wallet__img} alt="wallet" />
            <span>Place Bid</span>
          </a>
        </button>
      </div>
      <div className="nft__card__main__content" style={cardType === "vertical" ? { display: "flex" } : { display: "none" }}>
        <h2 className='nft__card__title'>{element.title}</h2>
        <div className="nft__card__info">
          <div className="nft__card__profile">
            <div className="nft__card__profile__box">
              <img className="nft__card__profile__img" src={element.profile_img} alt={element.profile_name} />
              <img className="nft__card__profile__check" src={check} alt="check" />
            </div>
            <p className="nft__card__profile__name">{element.profile_name}</p>
          </div>
          <div className="nft__card__price__info">
            <p className='nft__card__current__bid'>Current Bid</p>
            <strong><img src={eth} alt="etherium" />{element.current}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFT_Card
