import { Content } from '@/components/layout/content';
import { Header } from '@/components/layout/header';
import StoreProvider from '@/app/store-provider';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <Header.Element>
        <Header.Nav>
          <Header.Fixed>
            <Header.Logo href="/" />
            <Header.Cart />
          </Header.Fixed>
        </Header.Nav>
      </Header.Element>
      <Content>{children}</Content>
    </StoreProvider>
  );
}
