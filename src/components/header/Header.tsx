import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';

import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import './Header.sass';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header id="home" className="header">
      <Logo className="header__logo" />
      <Navigation
        className={`header__navigation ${
          menuOpen ? 'header__navigation--open' : ''
        }`}
      />
      <IconContext.Provider value={{ size: '3rem' }}>
        <button className="header__button" onClick={handleMenuToggle}>
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </IconContext.Provider>
    </header>
  );
};

export default Header;
