import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Loader } from 'components/Loader/Loader';

import {
  ContainerLayout,
  ContainerButtons,
  CustomNavLink,
} from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <ContainerLayout>
        <ContainerButtons>
          <CustomNavLink to="/">HOME</CustomNavLink>
          <CustomNavLink to="/movies">MOVIES</CustomNavLink>
        </ContainerButtons>
        <Suspense fallback={Loader}>
          {' '}
          <Outlet />
        </Suspense>
      </ContainerLayout>
    </>
  );
};
