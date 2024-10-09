import styled from 'styled-components';

const StyledRadioButton = styled.div`
  display: flex;
  gap: 1.6rem;

  & input[type='radio'] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type='radio']:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

function RadioButton({ checked, onChange, disabled = false, id, children }) {
  return (
    <StyledRadioButton>
      <input
        type="radio"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ''}>{children}</label>
    </StyledRadioButton>
  );
}

export default RadioButton;
