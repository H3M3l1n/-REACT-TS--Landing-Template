import Logo from '../logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.sass';

const Header = () => {
  return (
    <header id="header" className="header">
      <Logo />
      <Navigation fontSize={'1.5rem'} gap={'5rem'} />
    </header>
  );
};

export default Header;
