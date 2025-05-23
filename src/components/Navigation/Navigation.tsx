import { links } from '../../data/linkData';

import './Navigation.sass';

interface NavigationType {
  flexDirection?: React.CSSProperties['flexDirection'];
  fontSize: React.CSSProperties['fontSize'];
  gap: React.CSSProperties['gap'];
}

const Navigation = ({ flexDirection, gap }: NavigationType) => {
  return (
    <nav className="navigation">
      <ul
        className="navigation__list"
        style={{ flexDirection: flexDirection, gap: gap }}
      >
        {links.map((item) => (
          <li key={item.id} className="navigation__item">
            <a href={item.url} className="navigation__link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
