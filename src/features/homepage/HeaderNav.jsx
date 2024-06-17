import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  /* gap: 0.8rem; */
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;

    color: var(--color-grey-100);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-900);
    background-color: var(--color-brand-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/">
              <span>Home</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">
              <span>Products</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">
              <span>Categories</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">
              <span>About us</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">
              <span>Contact us</span>
            </StyledNavLink>
          </li>
        </NavList>
      </nav>
    </>
  );
}

export default MainNav;
