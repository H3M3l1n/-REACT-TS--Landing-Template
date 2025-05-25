import Button from '../button/Button';
import { products } from '../../data/linkData';

import './SectionProducts.sass';

import type { FunctionTypeVoid } from '../../types/general.types';

interface ProductsProps {
  modalSwitch: FunctionTypeVoid;
}

const SectionProducts = ({ modalSwitch }: ProductsProps) => {
  return (
    <section id="products" className="products">
      <div className="products__content">
        <h1 className="products__title">
          <span className="products__title-span">King’s</span> Selection
        </h1>
        <p className="products__text">
          Premium apples, each with its own royal flavor.
        </p>
        <Button buttonText="Buy Now" theme="light" onClick={modalSwitch} />
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
