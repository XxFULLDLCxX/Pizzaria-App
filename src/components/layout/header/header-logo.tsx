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
      <Link href={href || '/products'} className="-m-1.5 p-1.5 flex">
        <span className="sr-only">Pizzaria App</span>
        <Image
          className="h-[64px] w-[75px] object-center object-cover"
          src={src || '/pizzaria-title.svg'}
          width={50}
          height={200}
          alt="Pizzaria App Logo"
        />
      </Link>
    </div>
  );
}
