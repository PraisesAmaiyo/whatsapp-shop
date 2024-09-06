import styled from 'styled-components';

import Heading from '../../ui/Heading';
import { MdOutlineEmail, MdOutlineMap, MdOutlinePhone } from 'react-icons/md';

import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ContactLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;
`;

const ContactDIv = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 7rem;
`;

const ContactIcon = styled.div`
  color: var(--color-brand-900);
  font-size: 4rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: var(--border-radius-md);
  background-color: var(--color-brand-200);

  &:hover {
    color: var(--color-brand-950);
    background-color: var(--color-brand-300);
  }
`;

const StyledHeading = styled(Heading)`
  color: var(--color-brand-800);
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled.div`
  color: var(--color-gold-500);
  text-decoration: none;
  font-size: 2.5rem;
  transition: color 0.3s;
  display: inline-flex;
  padding: 1rem;
  border-radius: var(--border-radius-full);
  background-color: var(--color-brand-100);

  &:hover {
    color: var(--color-gold-600);
    background-color: var(--color-brand-200);
  }
`;

function ContactForm() {
  return (
    <ContactLinkContainer>
      <Heading as="h1">Get in touch</Heading>
      <Heading as="h4">
        We're here for you every step of the way. Whether you have questions,
        need order assistance, or want to share feedback, our friendly customer
        support team is ready to assist. Our team is here to help! Reach out to
        us via
      </Heading>

      <ContactDIv href="mailto:amaiyo.praises@gmail.com">
        <ContactIcon className="icon">
          <MdOutlineEmail />
        </ContactIcon>
        <div>
          <StyledHeading as="h4" className="contact-name">
            Email
          </StyledHeading>
          <Heading as="h4">amaiyo.praises@gmail.com</Heading>
        </div>
      </ContactDIv>

      <ContactDIv href="tel:08130909020">
        <ContactIcon>
          <MdOutlinePhone />
        </ContactIcon>
        <div>
          <StyledHeading as="h4">Phone</StyledHeading>
          <Heading as="h4">08130909020</Heading>
        </div>
      </ContactDIv>

      <ContactDIv
        href="https://www.google.com/maps?q=Warri,+Delta+State,+Nigeria"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ContactIcon>
          <MdOutlineMap />
        </ContactIcon>
        <div>
          <StyledHeading as="h4">Office</StyledHeading>
          <Heading as="h4">Warri, Delta State, Nigeria</Heading>
        </div>
      </ContactDIv>

      <Heading as="h1">Stay Connected</Heading>

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
    </ContactLinkContainer>
  );
}

export default ContactForm;
