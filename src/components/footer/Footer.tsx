import Logo from '../logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Footer.sass';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__content">
        <div className="footer__image">
          <Logo />
        </div>
        <div className="footer__links">
          <Navigation flexDirection={'column'} fontSize={'1rem'} gap={'1rem'} />
          <ul className="footer__social">
            <li className="footer__social-item">
              <a href="">SOCIAL#1</a>
            </li>
            <li className="footer__social-item">
              <a href="">SOCIAL#2</a>
            </li>
            <li className="footer__social-item">
              <a href="">SOCIAL#3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <a href="" className="footer__bottom-email">
          MAIL
        </a>
        <span className="footer__bottom-copy">COPY</span>
      </div>
    </footer>
  );
};

export default Footer;
