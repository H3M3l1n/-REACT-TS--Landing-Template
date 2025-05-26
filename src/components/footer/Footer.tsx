import { IconContext } from 'react-icons';
import { FaRegEnvelope } from 'react-icons/fa';

import { social } from '../../data/linkData';

import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import './Footer.sass';

const Footer = () => {
  return (
    <IconContext.Provider value={{ size: '1.5em' }}>
      <footer id="footer" className="footer">
        <div className="footer__content">
          <div className="footer__image">
            <Logo />
          </div>
          <div className="footer__links">
            <Navigation flexDirection={'column'} gap={'1rem'} />
            <div className="footer__social">
              <h2 className="footer__social-title">Social Media</h2>
              <ul className="footer__social-list">
                {social.map(({ id, name, url, Icon }) => (
                  <li key={id} className="footer__social-item">
                    <a
                      href={url}
                      className="footer__social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <a href="mailto:example@example.com" className="footer__bottom-email">
            <FaRegEnvelope />
            example@example.com
          </a>
          <span className="footer__bottom-copy">
            2025 Royal Apple all rights reserved.
          </span>
        </div>
      </footer>
    </IconContext.Provider>
  );
};

export default Footer;
