import './SectionSignUp.sass';
import Button from '../button/Button';

const SectionSignUp = () => {
  return (
    <section className="signup">
      <div className="signup__content">
        <h1 className="signup__title">TEXT</h1>
      </div>
      <div className="signup__form">
        <input type="text" className="signup__input" placeholder='Email address'/>
        <Button buttonText="Sign Up" className='signup__button' />
      </div>
    </section>
  );
};

export default SectionSignUp;
