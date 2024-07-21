import styled from 'styled-components';

const StyledFormRow = styled.div`
  font-size: 1.2rem;
  padding-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;
  min-width: 0;
`;

const Label = styled.label`
  font-weight: 500;
  margin-left: 1rem;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
  margin-right: 1rem;
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
