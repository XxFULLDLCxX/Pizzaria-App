import { Header } from './header-@types';

interface HeaderLogoProps extends Header {
}

export function HeaderLogo({ children }: HeaderLogoProps) {
  return (
    <div className="flex lg:flex-1">
      <a href="/products" className="-m-1.5 p-1.5">
        <span className="sr-only">Pizzaria App</span>
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </a>
    </div>
  );
}
