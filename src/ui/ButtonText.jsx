import styled from 'styled-components';

const ButtonText = styled.button`
  color: var(--color-brand-800);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-round);
  padding: 1.2rem;

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;

export default ButtonText;
