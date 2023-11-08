import { Outlet } from 'react-router-dom';
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
        <Outlet />
      </ContainerLayout>
    </>
  );
};
