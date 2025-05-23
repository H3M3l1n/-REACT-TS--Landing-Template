import { HiArrowLongRight } from 'react-icons/hi2';
import './Button.sass';

interface Button {
  className?: string;
  buttonText: string;
}

const Button = ({ className, buttonText }: Button) => {
  return (
    <button className={`button ${className}`}>
      <span className="button__text">{buttonText}</span>
      <HiArrowLongRight className="button__arrow" />
    </button>
  );
};

export default Button;
