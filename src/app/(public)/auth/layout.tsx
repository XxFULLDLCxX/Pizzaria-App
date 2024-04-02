import { Content } from '@/components/layout/content';
import { Header } from '@/components/layout/header';
import { ModeToggle } from '@/components/layout/theme';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header.Element>
        <Header.Nav>
          <Header.Fixed>
            <Header.Logo />
            <ModeToggle />
          </Header.Fixed>
        </Header.Nav>
      </Header.Element>
      <Content>{children}</Content>
    </>
  );
}
