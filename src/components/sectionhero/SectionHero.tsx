import './SectionHero.sass';
import hero_apple_left from '../../assets/images/hero_apple-left.jpg';
import hero_apple_right from '../../assets/images/hero_apple-right.jpg';
import Button from '../button/Button';

import type { FunctionTypeVoid } from '../../types/general.types';

interface HeroProps {
  modalSwitch: FunctionTypeVoid;
}

const SectionHero = ({ modalSwitch }: HeroProps) => {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-span--first">The Crown</span> of Apple{' '}
          <span className="hero__title-span--second">Flavor</span>
        </h1>
        <h2 className="hero__subtitle">
          Discover the crisp, royal taste of nature’s finest apples — grown with
          care, crowned with flavor.
        </h2>
        <Button buttonText="Taste Now" onClick={modalSwitch} theme="light" />
      </div>
      <div className="hero__gallery">
        <div className="hero__item hero__item--left">
          <img
            src={hero_apple_left}
            alt="apple with a green leaf"
            className="hero__item-image hero__item-image--left"
          />
          <div className="hero__item-circle hero__item-circle--left"></div>
        </div>
        <div className="hero__item hero__item--right">
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
