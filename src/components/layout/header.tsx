'use client';
import { ModeToggle } from './theme';
import { Fragment, useState } from 'react';
import { FaBars, FaArrowRight } from 'react-icons/fa';
import { Menu } from '@/components/layout/menu';

interface HeaderProps { }

export function Header({ }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 shadow-xl rounded-box">
      <nav
        className="max-w-7xl w-full px-10 h-16 lg:px-8 lg:py-5"
        aria-label="Global"
      >
        <div className='fixed top-0 left-0 w-full h-16 px-10 flex items-center justify-between shadow-md backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-30 rounded-b-lg'>
          <div className="flex lg:flex-1">
            <a href="/products" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
              {/* <Menu /> */}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Features
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Marketplace
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Company
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="auth/sign-in"
              className="text-sm font-semibold leading-6 light:text-gray-900 dark:text-gray-100"
            >
              Log in <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
        </div>
      </nav>
      {/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
         <div className="fixed inset-0 z-10" />
         <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
           <div className="flex items-center justify-between">
             <a href="#" className="-m-1.5 p-1.5">
               <span className="sr-only">Your Company</span>
               <img
                 className="h-8 w-auto"
                 src="https//:tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                 alt=""
               />
             </a>
             <button
               type="button"
               className="-m-2.5 rounded-md p-2.5 text-gray-700"
               onClick={() => setMobileMenuOpen(false)}
             >
               <span className="sr-only">Close menu</span>
               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
             </button>
           </div>
           <div className="mt-6 flow-root">
             <div className="-my-6 divide-y divide-gray-500/10">
               <div className="space-y-2 py-6">
                 <Disclosure as="div" className="-mx-3">
                   {({ open }) => (
                     <>
                       <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                         Product
                         <ChevronDownIcon
                           className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                           aria-hidden="true"
                         />
                       </Disclosure.Button>
                       <Disclosure.Panel className="mt-2 space-y-2">
                         {[...products, ...callsToAction].map((item) => (
                           <Disclosure.Button
                             key={item.name}
                             as="a"
                             href={item.href}
                             className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                           >
                             {item.name}
                           </Disclosure.Button>
                         ))}
                       </Disclosure.Panel>
                     </>
                   )}
                 </Disclosure>
                 <a
                   href="#"
                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                 >
                   Features
                 </a>
                 <a
                   href="#"
                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                 >
                   Marketplace
                 </a>
                 <a
                   href="#"
                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                 >
                   Company
                 </a>
               </div>
               <div className="py-6">
                 <a
                   href="#"
                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                 >
                   Log in
                 </a>
               </div>
             </div>
           </div>
         </Dialog.Panel>
       </Dialog> */}
    </header>
  );
}
