import './SectionAbout.sass';
import about_apple_left from '../../assets/images/about_apple-left.jpg';
import about_apple_right from '../../assets/images/about_apple-right.jpg';

const SectionAbout = () => {
  return (
    <section className="about">
      <div className="about__item about__item--left">
        <img
          src={about_apple_left}
          alt=""
          className="about__image about__image--left"
        />
        <div className="about__circle about__circle--left"></div>
      </div>
      <div className="about__content">
        <h3 className="about__subtitle">SUBTITLE</h3>
        <h1 className="about__title">SECTION ABOUT</h1>
        <p className="about__text">TEXT</p>
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
