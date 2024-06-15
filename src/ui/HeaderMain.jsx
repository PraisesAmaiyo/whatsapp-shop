import styled from 'styled-components';
import Heading from './Heading';
import Button from './Button';
import headerImage from '../assets/images/header-image.jpeg';

import Tag from './Tag';

const StyledHeaderMain = styled.main`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 60vh;
  gap: 2rem;

  border: 2px yellow dashed;
`;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;

const MainRight = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0 2rem;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: var(--border-radius-lg);
  }
`;

function HeaderMain() {
  return (
    <StyledHeaderMain>
      <MainLeft>
        <Tag>Wear Your Confidence</Tag>
        <Heading as="h1">Your Stylish and Affordable Destination</Heading>
        <Heading as="h3">
          Discover trendy looks that fit your budget! We've got the latest
          styles and everyday essentials, all at prices that make shopping fun
          and guilt-free.
        </Heading>
        <div>
          <Button variation="primary" size="large">
            Shop Now
          </Button>
          <Button variation="text" size="large">
            Follow Instagram
          </Button>
        </div>
      </MainLeft>

      <MainRight>
        <img src={headerImage} alt="Happy shopping girl" />
      </MainRight>
    </StyledHeaderMain>
  );
}

export default HeaderMain;
