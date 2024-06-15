import styled from 'styled-components';
import Header from '../ui/Header';

const StyledHeader = styled.header`
  height: 100vh;
  color: var(--color-grey-50);
`;

function homepage() {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
    </>
  );
}

export default homepage;
