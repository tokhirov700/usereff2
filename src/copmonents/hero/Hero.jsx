import "./Hero.css"
import hero_img from "../../images/hero.png"
import wallet__img from "../../images/wallet.svg"


const Hero = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero__content">
          <div className="hero__left__content">
            <span className="hero__text">WEB 3 NON-FUNGIBLE TOKENS</span>
            <h1 className="hero__title">Unlock Unique Digital Ownership with NFTs</h1>
            <p className="hero__description">Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</p>
            <button className="hero__btn">
              <a target="_blank" href="https://wallet.tonkeeper.com/">
                <img src={wallet__img} alt="wallet" />
                <span>Connect Wallet</span>
              </a>
            </button>
          </div>
          <div className="hero__right__content">
            <img src={hero_img} alt="hero" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
