import { links } from '../../data/linkData';

import './Navigation.sass';

interface NavigationType {
  className?: string;
  flexDirection?: React.CSSProperties['flexDirection'];
  fontSize?: React.CSSProperties['fontSize'];
  gap?: React.CSSProperties['gap'];
}

const Navigation = ({
  className,
  flexDirection,
  fontSize,
  gap,
}: NavigationType) => {
  return (
    <nav className={`navigation ${className}`}>
      <ul
        className="navigation__list"
        style={{ flexDirection: flexDirection, gap: gap }}
      >
        {links.map((item) => (
          <li key={item.id} className="navigation__item">
            <a
              href={item.url}
              className="navigation__link"
              style={{ fontSize: fontSize }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
