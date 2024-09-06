import styled from 'styled-components';
import ContactLinks from './ContactLinks';
import ContactForm from './ContactForm';

const ContactUsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 46%);
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

function contactUs() {
  return (
    <ContactUsContainer>
      <ContactLinks />
      <ContactForm />
    </ContactUsContainer>
  );
}

export default contactUs;
