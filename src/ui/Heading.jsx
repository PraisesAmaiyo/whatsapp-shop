import styled, { css } from 'styled-components';

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
      margin: 2rem 0 1rem 0;
    `}
    
    ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 400;
    `}
    
    ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 1.5rem;
      font-weight: 600;
    `}
    

    
  line-height: 1.4;
`;

export default Heading;
