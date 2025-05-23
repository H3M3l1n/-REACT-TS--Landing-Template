import Button from '../button/Button';
import { products } from '../../data/linkData';

import './SectionProducts.sass';

const SectionProducts = () => {
  return (
    <section id="products" className="products">
      <div className="products__content">
        <h1 className="products__title">Available Varieties</h1>
        <p className="products__text">TEXT</p>
        <Button buttonText="Buy Now" />
      </div>
      <div className="products__gallery">
        {products.map((item) => (
          <div key={item.id} className="products__item">
            <img src={item.image} alt="" className="products__item-image" />
            <p className="products__item-text">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionProducts;
