import { HiArrowLongRight } from 'react-icons/hi2';

import './Button.sass';

import type { FunctionTypeVoid } from '../../types/general.types';

interface Button {
  buttonText: string;
  className?: string;
  error?: boolean;
  onClick: FunctionTypeVoid;
  theme: 'dark' | 'light';
}

const Button = ({ buttonText, className, error, onClick, theme }: Button) => {
  return (
    <button
      className={`button ${
        error
          ? 'button--error'
          : theme === 'dark'
          ? 'button--dark'
          : 'button--light'
      } ${className}`}
      onClick={onClick}
    >
      <span className="button__text">{error ? 'Error' : buttonText}</span>
      <HiArrowLongRight className="button__arrow" />
    </button>
  );
};

export default Button;
