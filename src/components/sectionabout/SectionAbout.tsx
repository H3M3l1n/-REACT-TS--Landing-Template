import './SectionAbout.sass';
import about_apple_left from '../../assets/images/about_apple-left.jpg';
import about_apple_right from '../../assets/images/about_apple-right.jpg';

const SectionAbout = () => {
  return (
    <section id="about" className="about">
      <div className="about__item about__item--left">
        <img
          src={about_apple_left}
          alt=""
          className="about__image about__image--left"
        />
        <div className="about__circle about__circle--left"></div>
      </div>
      <div className="about__content">
        <h2 className="about__subtitle">
          Crowned with Quality. Rooted in Nature.
        </h2>
        <h1 className="about__title">
          The orchard behind{' '}
          <span className="about__title-span">the Crown</span>
        </h1>
        <p className="about__text">
          Apple King delivers premium apples grown with care and harvested for
          peak flavor — fresh, natural, and always delicious.
        </p>
      </div>
      <div className="about__item about__item--right">
        <img
          src={about_apple_right}
          alt=""
          className="about__image about__image--right"
        />
        <div className="about__circle about__circle--right"></div>
      </div>
    </section>
  );
};

export default SectionAbout;
