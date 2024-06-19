import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-900);
    background-color: var(--color-gold-400);

    &:hover {
      background-color: var(--color-gold-500);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);
    s &:hover {
      background-color: var(--color-red-800);
    }
  `,

  text: css`
    color: var(--color-grey-100);
    background-color: transparent;
    text-decoration: 2px underline;
    text-decoration-color: var(--color-gold-400);

    &:hover {
      outline: 2px solid var(--color-gold-400);
      outline-offset: -2px;
      text-decoration-color: transparent;
    }
  `,

  textDark: css`
    color: var(--color-brand-900);
    background-color: transparent;
    text-decoration: 2px underline;
    text-decoration-color: var(--color-brand-400);

    &:hover {
      outline: 2px solid var(--color-brand-400);
      outline-offset: -2px;
      text-decoration-color: transparent;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-full);
  box-shadow: var(--shadow-sm);
  margin-right: 0.5rem;

  display: flex;
  gap: 0.5rem;
  align-items: center;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: 'primary',
  size: 'medium',
};

export default Button;
