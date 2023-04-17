import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyled';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';

import { StyledLink, StyledLinkContainer, Header } from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <div>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Header>
        <StyledLinkContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledLinkContainer>
      </Header>

      <main>
        <Suspense fallback={<Loader></Loader>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </div>
  );
};

export default Layout;
