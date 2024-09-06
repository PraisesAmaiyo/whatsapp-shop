import styled from 'styled-components';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import Textarea from '../../ui/Textarea';

const ContactFormContainer = styled(Form)`
  background-color: var(--color-brand-800);
  padding: 3rem;
  color: var(--color-brand-50);
  border-radius: var(--border-radius-lg);
`;

const ContactFormHeading = styled.div`
  color: var(--color-brand-50);
  text-align: center;
  margin-bottom: 2rem;
`;

const Inputfield = styled(Input)`
  color: var(--color-brand-900);
  font-size: 1.5rem;
  font-weight: 500;
`;

const Messagefield = styled(Textarea)`
  color: var(--color-brand-900);
  font-size: 1.5rem;
  font-weight: 500;
  height: 15rem;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubmitButton = styled(Button)`
  justify-content: center;
  width: 100%;
`;

function ContactForm() {
  return (
    <ContactFormContainer>
      <ContactFormHeading>
        <Heading as="h1">Send us a message</Heading>
        <Heading as="h4">Your email adddress will not be published.</Heading>
        <Heading as="h4">Requird feilds are marked.</Heading>
      </ContactFormHeading>

      <FormRowVertical label="Name">
        <Inputfield type="name" id="name" />
      </FormRowVertical>

      <FormRowVertical label="Email Address">
        <Inputfield type="email" id="email" />
      </FormRowVertical>

      <FormRowVertical label="Phone Number">
        <Inputfield type="text" id="phonenumber" />
      </FormRowVertical>

      <FormRowVertical label="Messsage">
        <Messagefield type="text" id="message" />
      </FormRowVertical>

      <SubmitButtonContainer>
        <SubmitButton size="medium" variation="primary">
          Submit
        </SubmitButton>
      </SubmitButtonContainer>
    </ContactFormContainer>
  );
}

export default ContactForm;
