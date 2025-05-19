import './sectionhero.sass';
import hero_apple_left from '../../assets/images/hero_apple-left.jpg';
import hero_apple_right from '../../assets/images/hero_apple-right.jpg';

const SectionHero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          The Crown
          <br /> of Apple Flavor
        </h1>
        <button className="hero__button">Order Now</button>
      </div>
      <div className="hero__gallery">
        <div className=".hero__item hero__item--left">
          <img
            src={hero_apple_left}
            alt="apple with a green leaf"
            className="hero__item-image hero__item-image--left"
          />
          <div className="hero__item-circle hero__item-circle--left"></div>
        </div>
        <div className=".hero__item hero__item--right">
          <img
            src={hero_apple_right}
            alt="apple with a green leaf"
            className="hero__item-image hero__item-image--right"
          />
          <div className="hero__item-circle hero__item-circle--right"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
