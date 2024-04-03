import { Content } from '@/components/layout/content';
import { Header } from '@/components/layout/header';
import { ModeToggle } from '@/components/layout/theme';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header.Element>
        <Header.Nav>
          <Header.Fixed>
            <Header.Logo />
            <div className="flex justify-center items-center gap-4">
              <ModeToggle />
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link
                  href="/auth/sign-in"
                  className="flex justify-center items-center gap-1 text-sm font-semibold leading-6 text-emerald-800 dark:text-emerald-200"
                >
                  Log in{' '}
                  <span aria-hidden="true">
                    <FaArrowRightLong />
                  </span>
                </Link>
              </div>
            </div>
          </Header.Fixed>
        </Header.Nav>
      </Header.Element>
      <Content>{children}</Content>
    </div>
  );
}
