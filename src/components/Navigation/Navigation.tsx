import './Navigation.sass';

interface NavigationType {
  flexDirection?: React.CSSProperties['flexDirection'];
  fontSize: React.CSSProperties['fontSize'];
  gap: React.CSSProperties['gap'];
}

const Navigation = ({ flexDirection, fontSize, gap }: NavigationType) => {
  return (
    <nav className="navigation">
      <ul
        className="navigation__list"
        style={{ flexDirection: flexDirection, gap: gap }}
      >
        <li className="navigation__item">
          <a
            href=""
            className="navigation__link"
            style={{ fontSize: fontSize }}
          >
            Link#1
          </a>
        </li>
        <li className="navigation__item">
          <a
            href=""
            className="navigation__link"
            style={{ fontSize: fontSize }}
          >
            Link#2
          </a>
        </li>
        <li className="navigation__item">
          <a
            href=""
            className="navigation__link"
            style={{ fontSize: fontSize }}
          >
            Link#3
          </a>
        </li>
        <li className="navigation__item">
          <a
            href=""
            className="navigation__link"
            style={{ fontSize: fontSize }}
          >
            Link#4
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
