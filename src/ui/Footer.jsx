import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Heading from './Heading';

import {
  FaCreditCard,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaUniversity,
  FaWhatsapp,
} from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';

const src = '/logo-dark.png';

const StyledFooter = styled.footer`
  padding: 4rem 0 0 0;
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
  color: var(--color-brand-50);
  font-size: 1.4rem;
`;

const FooterBaseItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem 4.8rem;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 2rem;
  transition: color 0.3s;
  display: inline-flex;

  &:hover {
    color: var(--color-gold-500); // Customize this color as needed
  }
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
            <span>Copyright &copy; 2024 PBlaze Store. All Rights Reserved</span>
          </div>

          <IconContainer>
            <StyledIcon
              //   href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </StyledIcon>
            <StyledIcon
              //   href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </StyledIcon>
            <StyledIcon
              //   href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </StyledIcon>
            <StyledIcon
              //   href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </StyledIcon>
          </IconContainer>

          <IconContainer>
            <StyledIcon href="#">
              <FaUniversity title="Bank Transfer" />
            </StyledIcon>
            <StyledIcon href="#">
              <FaCreditCard title="Card Payment" />
            </StyledIcon>
            <StyledIcon href="#">
              <AiOutlineMobile title="Mobile Payment" />
            </StyledIcon>
          </IconContainer>
        </FooterBaseItems>
      </FooterBase>
    </StyledFooter>
  );
}

export default Footer;
