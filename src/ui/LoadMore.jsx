import styled from 'styled-components';
import Button from './Button';

const StyledLoadMore = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
`;

function LoadMore() {
  return (
    <StyledLoadMore>
      <Button size="large" variation="primary">
        Load More
      </Button>
    </StyledLoadMore>
  );
}

export default LoadMore;
