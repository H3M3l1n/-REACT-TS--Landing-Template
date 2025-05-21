import './SectionProducts.sass';
import products_apple_1 from '../../assets/images/products_apple_1.jpg';
import Button from '../button/Button';

const SectionProducts = () => {
  return (
    <section className="products">
      <div className="products__content">
        <h1 className="products__title">Available Varieties</h1>
        <p className="products__text">TEXT</p>
        <Button buttonText='Buy Now' />
      </div>
      <div className="products__gallery">
        <div className="products__item">
          <img src={products_apple_1} alt="" className="products__item-image" />
          <p className="products__item-text">Name #1</p>
        </div>
        <div className="products__item">
          <img src={products_apple_1} alt="" className="products__item-image" />
          <p className="products__item-text">Name #2</p>
        </div>
        <div className="products__item">
          <img src={products_apple_1} alt="" className="products__item-image" />
          <p className="products__item-text">Name #3</p>
        </div>
      </div>
    </section>
  );
};

export default SectionProducts;
