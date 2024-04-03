
// import { ModeToggle } from './theme';
import { Fragment, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { CartSheet } from '@/components/cart/cart-sheet';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HeaderElement } from './header';
import { HeaderNav } from './header-nav';
import { HeaderFixed } from './header-fixed';
import { HeaderLogo } from './header-logo';
import { HeaderCart } from './header-cart';

export const Header = {
  Element: HeaderElement,
  Nav: HeaderNav,
  Fixed: HeaderFixed,
  Logo: HeaderLogo,
  Cart: HeaderCart,
};
