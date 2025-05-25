import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import './Header.sass';

const Header = () => {
  return (
    <header id="home" className="header">
      <Logo />
      <Navigation fontSize={'1.5rem'} gap={'5rem'} />
    </header>
  );
};

export default Header;
