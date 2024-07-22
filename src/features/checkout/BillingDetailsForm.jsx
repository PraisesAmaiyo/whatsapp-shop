import styled from 'styled-components';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import CountryStateCity from '../../ui/CountryStateCity';

const InputGroup = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
`;

function BillingDetailsForm() {
  return (
    <Form>
      <InputGroup>
        <FormRowVertical label="First Name">
          <Input type="name" id="firstname" />
        </FormRowVertical>

        <FormRowVertical label="Last Name">
          <Input type="name" id="lastname" />
        </FormRowVertical>
      </InputGroup>

      <InputGroup>
        <FormRowVertical label="Phone Number">
          <Input type="phonenumber" id="phonenumber" />
        </FormRowVertical>

        <FormRowVertical label="Email Address">
          <Input type="email" id="email" />
        </FormRowVertical>
      </InputGroup>

      <FormRowVertical label="Address">
        <Input type="address" id="address" />
      </FormRowVertical>

      <CountryStateCity />
    </Form>
  );
}

export default BillingDetailsForm;
