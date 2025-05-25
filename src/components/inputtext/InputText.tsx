import type { RefObject } from 'react';

import './InputText.sass';

import type { FunctionTypeVoid } from '../../types/general.types';

interface InputTextProps {
  children?: React.ReactNode;
  className?: string;
  error: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
  maxLength?: number;
  onChange: FunctionTypeVoid;
  placeholder?: string;
  type?: string;
}

const InputText = ({
  children,
  className,
  error,
  inputRef,
  maxLength = 30,
  onChange,
  placeholder,
  type = 'text',
}: InputTextProps) => {
  return (
    <div
      className={`inputText__wrapper inputText__wrapper-${
        error ? 'error' : 'normal'
      } ${className}`}
    >
      <input
        className="inputText__input"
        maxLength={maxLength}
        onChange={onChange}
        placeholder={placeholder}
        ref={inputRef}
        required
        type={type}
      />
      {children}
    </div>
  );
};

export default InputText;
