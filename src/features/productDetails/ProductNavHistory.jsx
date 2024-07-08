import styled from 'styled-components';
import Heading from '../../ui/Heading';

const StyledProductNavHistory = styled.div`
  /* padding: 3rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProductNavHistory() {
  return (
    <StyledProductNavHistory>
      <Heading as="h2">Products/Shirt/Product Details</Heading>
    </StyledProductNavHistory>
  );
}

export default ProductNavHistory;
