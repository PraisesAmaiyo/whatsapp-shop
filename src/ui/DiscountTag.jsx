import styled, { css } from 'styled-components';

const type = {
  light: css`
    color: var(--color-brand-100);
    background-color: var(--color-brand-100-opacity);
  `,
  dark: css`
    color: var(--color-grey-50);
    background-color: var(--color-brand-500);
  `,
};

const DiscountTag = styled.span`
  position: absolute;
  color: var(--color-grey-50);
  top: 10px;
  left: 10px;
  font-size: 1rem !important;
  width: fit-content;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;
  z-index: 100;

  ${(props) => type[props.type]}
`;

DiscountTag.defaultProps = {
  type: 'dark',
};

export default DiscountTag;
