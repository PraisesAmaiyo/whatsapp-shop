import styled from 'styled-components';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import CountryStateCity from '../../ui/CountryStateCity';
import { useForm } from 'react-hook-form';

const InputGroup = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
`;

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function BillingDetailsForm({ register, errors }) {
  return (
    <Form>
      <InputGroup>
        <FormRowVertical label="First Name" error={errors?.firstname?.message}>
          <Input
            type="text"
            id="firstname"
            {...register('firstname', {
              required: 'This field is required',
            })}
          />
        </FormRowVertical>

        <FormRowVertical label="Last Name" error={errors?.lastname?.message}>
          <Input
            type="text"
            id="lastname"
            error={errors?.lastname?.message}
            {...register('lastname', {
              required: 'This field is required',
            })}
          />
        </FormRowVertical>
      </InputGroup>

      <InputGroup>
        <FormRowVertical
          label="Phone Number"
          error={errors?.phonenumber?.message}
        >
          <Input
            type="tel"
            id="phonenumber"
            {...register('phonenumber', {
              required: 'This field is required',
            })}
          />
        </FormRowVertical>

        <FormRowVertical label="Email Address" error={errors?.email?.message}>
          <Input
            type="email"
            id="email"
            {...register('email', {
              required: 'This field is required',
            })}
          />
        </FormRowVertical>
      </InputGroup>

      <FormRowVertical label="Address" error={errors?.address?.message}>
        <Input
          type="address"
          id="address"
          {...register('address', {
            required: 'This field is required',
          })}
        />
      </FormRowVertical>

      <CountryStateCity />
    </Form>
  );
}

export default BillingDetailsForm;
