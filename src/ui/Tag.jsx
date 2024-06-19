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

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  ${(props) => type[props.type]}
`;

Tag.defaultProps = {
  type: 'light',
};

export default Tag;
