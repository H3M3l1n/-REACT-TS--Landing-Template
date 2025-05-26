import type { IconType } from 'react-icons';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';

import apple_fuji from '../assets/images/products_apple-fuji.jpg';
import apple_golden from '../assets/images/products_apple-golden.jpg';
import apple_gala from '../assets/images/products_apple-gala.jpg';

interface Links {
  id: number;
  name: string;
  url: string;
}

interface Products {
  id: number;
  name: string;
  image: string;
}
interface Social {
  id: number;
  name: string;
  url: string;
  Icon: IconType;
}

// Navigation links
export const links: Links[] = [
  {
    id: 1,
    name: 'Home',
    url: '#home',
  },
  {
    id: 2,
    name: 'About',
    url: '#about',
  },
  {
    id: 3,
    name: 'Products',
    url: '#products',
  },
  {
    id: 4,
    name: 'Sign Up',
    url: '#signup',
  },
];

// Products list
export const products: Products[] = [
  { id: 1, name: 'Fuji', image: apple_fuji },
  { id: 2, name: 'Golden', image: apple_golden },
  { id: 3, name: 'Gala', image: apple_gala },
];

// Footer social links
export const social: Social[] = [
  {
    id: 1,
    name: '@applekingua',
    url: 'https://www.instagram.com/apple_king_ua/',
    Icon: FaInstagram,
  },
  {
    id: 2,
    name: '@applekingua',
    url: 'https://x.com/applekingua',
    Icon: FaXTwitter,
  },
];
