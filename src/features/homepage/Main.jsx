import styled from 'styled-components';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import headerImage from '../../assets/images/header-image.jpeg';

import Tag from '../../ui/Tag';
import Row from '../../ui/Row';

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-rows: 60vh;
  gap: 2rem;
  padding: 5rem 0;
`;

const MainSummary = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;

  div {
    display: flex;
    flex-direction: column;
  }
  h4 {
    font-size: 2rem;
    font-weight: 500;
  }
  h5 {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 1rem; */
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

const ButtonDiv = styled.div`
  margin-top: 2rem;
`;

function Main() {
  return (
    <>
      <Row type="vertical">
        <StyledMain>
          <MainLeft>
            <Tag>Wear Your Confidence</Tag>

            <Heading as="h1">Your Stylish and Affordable Destination</Heading>

            <Heading as="h3">
              Discover trendy looks that fit your budget! We've got the latest
              styles and everyday essentials, all at prices that make shopping
              fun and guilt-free.
            </Heading>

            <ButtonDiv>
              <Button variation="primary" size="medium">
                Shop Now
              </Button>

              <Button variation="text" size="medium">
                Follow Instagram
              </Button>
            </ButtonDiv>
          </MainLeft>

          <MainRight>
            <img src={headerImage} alt="Happy shopping girl" />
          </MainRight>

          <MainSummary>
            <div>
              <h4>50+</h4>
              <h5>Unique Fashion Styles</h5>
            </div>

            <div>
              <h4>250+</h4>
              <h5>Happy Customers</h5>
            </div>

            <div>
              <h4>1000+</h4>
              <h5>Trusted Partners</h5>
            </div>
          </MainSummary>
        </StyledMain>
      </Row>
    </>
  );
}

export default Main;
