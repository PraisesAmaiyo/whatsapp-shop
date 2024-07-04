import styled from 'styled-components';
import Heading from './Heading';
import Button from './Button';

const StyledJoinCommunity = styled.section`
  padding: 4rem 0;
  margin-bottom: 6rem;
  justify-content: center;
  background-color: var(--color-brand-200);
  color: var(--color-brand-900);
  border-radius: var(--border-radius-lg);
`;

const JoinCommunityContent = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  .commuinty-header {
    font-size: 2.5rem;
  }
`;

function JoinCommunity() {
  return (
    <StyledJoinCommunity>
      <JoinCommunityContent>
        <Heading as="h2" className="commuinty-header">
          Join our community of Customers today
        </Heading>
        <Button size="large" variation="primary">
          Join Now
        </Button>
      </JoinCommunityContent>
    </StyledJoinCommunity>
  );
}

export default JoinCommunity;
