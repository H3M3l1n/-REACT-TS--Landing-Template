import './Button.sass';

interface Button {
  className?: string;
  buttonText: string;
}

const Button = ({ className, buttonText }: Button) => {
  return <button className={`button ${className}`}>{buttonText}</button>;
};

export default Button;
