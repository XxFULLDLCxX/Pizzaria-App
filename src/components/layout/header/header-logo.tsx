import Link from 'next/link';
import { Header } from './header-@types';
import Image from 'next/image';

interface HeaderLogoProps extends Header {
  src?: string;
  href?: string;
}

export function HeaderLogo({ src, href }: HeaderLogoProps) {
  return (
    <div className="flex lg:flex-1">
      <Link href={href || '/products'} className="-m-1.5 p-1.5">
        <span className="sr-only">Pizzaria App</span>
        <Image
          className="h-8 w-auto"
          src={src || 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'}
          alt=""
        />
      </Link>
    </div>
  );
}
