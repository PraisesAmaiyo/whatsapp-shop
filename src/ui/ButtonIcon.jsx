import styled from 'styled-components';

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  color: var(--color-grey-100);

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  &:hover {
    color: var(--color-brand-900);
    background-color: var(--color-brand-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    transition: all 0.3s;

    &:hover {
      color: var(--color-brand-900);
    }
  }
`;

export default ButtonIcon;
