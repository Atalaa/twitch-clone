import React from 'react';
import crossIcon from '../../assets/crossIcon.svg'
import hambugerMenuIcon from '../../assets/hambugerMenuIcon.svg'
import searchIcon from '../../assets/searchIcon.svg'
import twitchIcon from '../../assets/twitchIcon.svg'

const Header = () => {
  return (
    <div>

      <nav className="headerTop">
        <ul className="menuList">
          <li className="navLinks">
            <img src={twitchIcon} alt="twitch logo" className="twitchLogo"/>
          </li>
          <li className="navLinks">
            Top Games
          </li>
          <li className="navLinks">
            Top Streams
          </li>
          <li className="navLinks">
            <form className="formSubmit">
              <input type="text" className="searchInput"/>
              <button type="submit">
                <img src={searchIcon} alt="search logo" className="searchLogo"/>
              </button>
            </form>
          </li>
        </ul>
      </nav>

      <div className="responsiveMenuButton">
        <img src={hambugerMenuIcon} alt="hamburger menu logo" className="hamburgerMenuLogo"/>
      </div>

    </div>
  );
};

export default Header;