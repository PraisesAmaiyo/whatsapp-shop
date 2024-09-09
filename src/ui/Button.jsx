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
    color: var(--color-brand-100);
    background: var(--color-brand-800);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-brand-900);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);
    s &:hover {
      background-color: var(--color-red-800);
    }
  `,

  outline: css`
    color: var(--color-grey-50);
    background-color: var(--color-brand-100-opacity);

    &:hover {
      color: var(--color-grey-50);
      background-color: var(--color-brand-200-opacity);
    }
  `,

  text: css`
    color: var(--color-grey-100);
    background-color: transparent;

    &:hover {
      outline: 2px solid var(--color-gold-400);
      outline-offset: -2px;
    }
  `,

  textDark: css`
    color: var(--color-brand-900);
    background-color: transparent;
    text-decoration: 2px underline;
    text-decoration-color: var(--color-brand-400);
    outline: 1px solid var(--color-brand-300);

    &:hover {
      outline: 2px solid var(--color-brand-400);
      outline-offset: -2px;
      text-decoration-color: transparent;
    }
  `,
};

const disabledStyle = css`
  background-color: var(--color-grey-300);
  color: var(--color-grey-500);
  cursor: not-allowed;

  &:hover {
    background-color: var(--color-grey-300); /* Same background for hover */
  }
`;

const underlineStyles = {
  none: css`
    text-decoration: none;
  `,
  underline: css`
    text-decoration: 2px underline;
    text-decoration-color: var(--color-gold-400);

    &:hover {
      text-decoration-color: transparent;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-full);
  box-shadow: var(--shadow-sm);
  /* margin-right: 0.5rem; */

  display: flex;
  gap: 0.5rem;
  align-items: center;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
  ${(props) => underlineStyles[props.underline]}

  &:disabled {
    ${disabledStyle}
  }
`;

Button.defaultProps = {
  variation: 'primary',
  size: 'medium',
  underline: 'none',
};

export default Button;
