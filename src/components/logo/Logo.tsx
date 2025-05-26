import logo from '../../assets/images/logo.png';
import './Logo.sass';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <img src={logo} alt="apple king logo" className={`logo ${className}`} />
  );
};

export default Logo;
