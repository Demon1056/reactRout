import { Outlet} from 'react-router-dom';
import { ContainerLayout, CustomNavLink } from './Layout.styled';
export const Layout = () => {
  return (
    <>
      <ContainerLayout>This red LAYOUT
        <CustomNavLink to="/">HOME</CustomNavLink>
        <CustomNavLink to="/movies">MOVIES</CustomNavLink>
      </ContainerLayout>
      <Outlet />
    </>
  );
};
