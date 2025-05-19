import './header.sass';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header id="header" className="header">
      <img src={logo} alt="apple logo" className="header__logo" />
      <nav className="header-nav">
        <ul className="header-nav__list">
          <li className="header-nav__item">
            <a href="" className="header-nav__link">
              Link#1
            </a>
          </li>
          <li className="header-nav__item">
            <a href="" className="header-nav__link">
              Link#2
            </a>
          </li>
          <li className="header-nav__item">
            <a href="" className="header-nav__link">
              Link#3
            </a>
          </li>
          <li className="header-nav__item">
            <a href="" className="header-nav__link">
              Link#4
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
