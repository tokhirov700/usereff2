
import "./Nav.css"


import searchImg from '../../images/search.svg'
import nav__log__1 from '../../images/navlogo1.svg'
import nav__log__2 from '../../images/navlogo2.svg'
import nav__log__3 from '../../images/navlogo3.svg'
import { Link, NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav__content__main">
          <div className="nav__content">
            <div className="nav__left__content">
              <Link to="/">
                <div className="nav__logo">
                  <img src={nav__log__1} alt="logo" />
                  <img src={nav__log__2} alt="logo" />
                  <img src={nav__log__3} alt="logo" />
                </div>
              </Link>
              <div className="nav__search__content">
                <img src={searchImg} alt="search" />
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div className="nav__rigth__content">
              <ul className="nav__content__list">
                <li><NavLink to="/" className="nav__content__list__item__link">Home</NavLink></li>
                <li><NavLink to="/explore" className="nav__content__list__item__link">Explore</NavLink></li>
                <li><NavLink to="/trending"  className="nav__content__list__item__link">Trending</NavLink></li>
                <li><NavLink to="/faq" className="nav__content__list__item__link">FAQ</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
