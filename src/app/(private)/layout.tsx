import { Content } from '@/components/layout/content';
import { Header } from '@/components/layout/header';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header.Element>
        <Header.Nav>
          <Header.Fixed>
            <Header.Logo />
            <Header.Cart />
          </Header.Fixed>
        </Header.Nav>
      </Header.Element>
      <Content>{children}</Content>
    </>
  );
}
