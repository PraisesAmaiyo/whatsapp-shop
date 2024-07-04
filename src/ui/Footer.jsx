import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Heading from './Heading';

const src = '/logo-dark.png';

const StyledFooter = styled.footer`
  padding: 4rem 0;
`;
const FooterImageContainer = styled.div`
  padding: 2rem;
  border-top: 1px var(--color-grey-300) solid;
  border-bottom: 1px var(--color-grey-300) solid;
  display: flex;
  justify-content: center;

  img {
    height: 5rem;
    width: auto;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 1.2rem 4.8rem;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  .link-heading {
    padding: 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;

    color: var(--color-brand-900);
    font-size: 1.6rem;
    font-weight: 400;
    padding: 0.5rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-gold-600);
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

const FooterBase = styled.div`
  background-color: var(--color-brand-900);
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const FooterBaseItems = styled.div`
  width: ;
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 1.2rem 4.8rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterImageContainer>
        <img src={src} alt="Logo" />
      </FooterImageContainer>

      <FooterContent>
        <nav>
          <LinkList>
            <li>
              <Heading as="h4" className="link-heading">
                About
              </Heading>
            </li>
            <li>
              <StyledLink to="">
                <span>Our Company</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="">
                <span>Our Success Story</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="">
                <span>Testimonials</span>
              </StyledLink>
            </li>
          </LinkList>
        </nav>

        <nav>
          <LinkList>
            <li>
              <Heading as="h4" className="link-heading">
                Information
              </Heading>
            </li>
            <li>
              <StyledLink to="">
                <span>Create an account</span>
              </StyledLink>
            </li>

            <li>
              <StyledLink to="">
                <span>How to buy on Pblaze Store</span>
              </StyledLink>
            </li>

            <li>
              <StyledLink to="">
                <span>Delivery Information</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="">
                <span>Returns and Refund</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="">
                <span>Terms and Conditions</span>
              </StyledLink>
            </li>
          </LinkList>
        </nav>

        <nav>
          <LinkList>
            <li>
              <Heading as="h4" className="link-heading">
                Help & Support
              </Heading>
            </li>
            <li>
              <StyledLink to="">
                <span>Contact us</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="">
                <span>Help</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="">
                <span>FAQ</span>
              </StyledLink>
            </li>

            <li>
              <StyledLink to="">
                <span>Checkout</span>
              </StyledLink>
            </li>
          </LinkList>
        </nav>
      </FooterContent>

      <FooterBase>
        <FooterBaseItems>
          <div>
            <Heading as={'h4'}>
              Copyright &copy; 2024 PBlaze Store. All Rights Reserved
            </Heading>
          </div>

          <div></div>
        </FooterBaseItems>
      </FooterBase>
    </StyledFooter>
  );
}

export default Footer;
